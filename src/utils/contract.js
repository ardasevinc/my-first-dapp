import { ethers } from "ethers";

const wordContractAddress = "0x813966B0B9D23bb30a6fB5c8647F79C512a32a64";
const contractAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_word",
        type: "string",
      },
    ],
    name: "setWord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWord",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

let provider = null;
const setProvider = async () => {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
};
let wordContract = null;
const setContract = async () => {
  if (provider === null) {
    await setProvider();
  }

  wordContract = new ethers.Contract(
    wordContractAddress,
    contractAbi,
    provider
  );
};

let signer = null;
const setSigner = () => {
  signer = provider.getSigner();
};

let wordContractWithSigner = null;
const setContractWithSigner = () => {
  if (signer === null) {
    setSigner();
  }
  wordContractWithSigner = wordContract.connect(signer);
};

const getWord = async () => {
  if (wordContract === null) {
    await setContract();
  }
  return await wordContract.getWord();
};

const setWord = async (word) => {
  if (wordContractWithSigner === null) {
    if (wordContract === null) {
      await setContract();
    }
    setContractWithSigner();
  }

  try {
    await wordContractWithSigner.setWord(word);
  } catch (error) {
    console.log(error);
  }
};

export { getWord, setWord };
