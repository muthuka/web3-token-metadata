const erc20 = require('./erc20');
const erc721 = require('./erc721');

async function getBlockNumber() {
    const latestBlockNumber = await web3.eth.getBlockNumber()
    console.log("Latest block: ", latestBlockNumber)
    return latestBlockNumber
}

// General Eth node checks
// getBlockNumber();

// Do some ERC-20 print
async function printall20() {
    console.log("Let's play with some ERC-20 tokens")
    let tokens = [
        "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        "0x514910771af9ca656af840dff83e8264ecf986ca",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0x0d8775f648430679a709e98d2b0cb6250d2887ef"];

    for (let i in tokens) {
        await erc20.printToken(tokens[i]);
    }
}

printall20();

// Do some ERC-721 print
async function printall721() {
    console.log("Let's play with some ERC-721 tokens")
    let nfts = [
        "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
        "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",
        "0x86758d1c5aB95FF324F7E0b2cDEc38c86eebe768",
        "0x8C714199d2eA08CC1f1F39A60f5cD02aD260A1e3"
    ];

    for (let i in nfts) {
        await erc721.printNFT(nfts[i]);
    }
}

printall721();