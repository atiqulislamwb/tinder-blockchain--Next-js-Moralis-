import { client } from "../../lib/sanity.js";

const createUserOnSanity = async (req, res) => {
  try {
    const userDoc = {
      _type: "users",
      _id: req.body.userWalletAddress,
      name: req.body.name,
      age: req.body.age,
      walletAddress: req.body.walletAddress,
    };
    await client.createIfNotExists(userDoc);
    res.status(200).send({ msg: "success" });
  } catch (error) {
    res.status(500).send({ msg: "error", data: error.message });
  }
};

export default createUserOnSanity;
