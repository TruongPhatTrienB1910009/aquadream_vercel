const abi = require("../abi/marketplace.json");
const Web3 = require("web3");
const web3 = new Web3('https://rpc-core.icecreamswap.com');
const contractAddress = '0x86926C18746784176A6AD8DF682189C7E1b11579';

const contract = new web3.eth.Contract(abi, contractAddress);

export const getNftType = async (NftId) => {
    const result = await contract.methods.NFT_TYPE(NftId).call();
    return result;
}
