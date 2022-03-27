import { client } from "../../lib/sanity.js";

const getUserInfo = async (req, res) => {
  try {
    const query = `
         *[_type == "users" && _id == "${req.query.likedUser}"]{
          likes
           }
       `;
    const sanityResponse = await client.fetch(query);
    let isMatch = false;

    sanityResponse[0].likes.forEach((likedUser) => {
      if (likedUser._ref === req.body.currentUser) {
        isMatch = true;
      }
    });

    res.status(200).send({ msg: "success", data: { isMatch: isMatch } });
  } catch (error) {
    res.status(500).send({ msg: "error", data: error.message });
  }
};

export default getUserInfo;
