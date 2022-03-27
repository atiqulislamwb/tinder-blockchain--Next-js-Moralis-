import { TINDER_ADDRESS, TINDER_ABI } from "../../lib/constants";
import Moralis from "moralis/node";
import { ethers } from "ethers";

const mintMatchNft = async (req, res) => {
  await Moralis.start({
    serverUrl: "https://297nscgzqvl0.usemoralis.com:2053/server",
    appId: "TU3CdJj9azGDiTRP28uhVJ29xtZefQMlTksl3FKf",
    masterKey: "yLjZDH1fN4wudYcgcBEuPWtOOBP6QKDFtQO7nxag",
  });

  const metadata = {
    name: `${req.body.names[0]} & ${req.body.names[1]}`,
    description: `${req.body.names[0].split(" ")[0]} & ${
      req.body.names[1].split(" ")[0]
    } just matched!`,
    image: `ipfs://QmY4tKpDGzVHzaSkQc5gzVMCMNoznZqaX15DXkyL2bPp8Z`,
  };

  const toBtoa = Buffer.from(JSON.stringify(metadata)).toString("base64");
  const metadataFile = new Moralis.File("file.json", { base64: toBtoa });

  await metadataFile.saveIPFS({ useMasterKey: true });

  const metadataURI = metadataFile.ipfs();

  const provider = ethers.getDefaultProvider(
    "https://eth-rinkeby.alchemyapi.io/v2/vuXp_wGFtidqhpskCvkOZEn-KFi8nNmC",
    {
      chainId: 4,
      name: "rinkeby",
    }
  );

  const walletWithProvider = new ethers.Wallet(
    "602939657ffa60e43d180e3e0001c3edca370e1058a570388f0fdac04f92cc1e",
    provider
  );

  const contract = new ethers.Contract(
    TINDER_ADDRESS,
    TINDER_ABI,
    walletWithProvider
  );

  const tx = await contract.mintNFT(
    req.body.walletAddresses[0],
    req.body.walletAddresses[1],
    metadataURI
  );

  const txReceipt = await tx.wait();

  res.status(200).send({
    message: "success",
    data: { tx: tx, txReceipt: txReceipt },
  });
};

export default mintMatchNft;
