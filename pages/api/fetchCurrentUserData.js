import { client } from "../../lib/sanity.js";

const getUserInfo = async (req, res) => {
  try {
    const query = `
         *[_type == "users" && _id == "${req.query.activeAccount}"]{
             name,
             age,
             walletAddress,
             "imageUrl": profileImage.asset->url
           }
       `;
    const sanityResponse = await client.fetch(query);
    res.status(200).send({ msg: "success", data: sanityResponse[0] });
  } catch (error) {
    res.status(500).send({ msg: "error", data: error.message });
  }
};

export default getUserInfo;
