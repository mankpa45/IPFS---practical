// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers }= require("hardhat");
require("dotenv").config({path:".env"});

async function main() {
  //url from where we can extract the metadata for lw3punks
 const metadataURL ="ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5"
/*
a contractFactory in ethers.js is an abstractoion used to deploy new smart contracts
so Lw3punkscontract here is a factory for instances of our Lw3Punks contract,
 */
const lw3PunksContract= await ethers.getContractFactory("LW3Punks");

//deploy the contract 
const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);
await deployedLW3PunksContract.deployed();

//print the address of the deployed contract
console.log ("Lw3Punks contract Address:", deployedLW3PunksContract.address);
 
}
// call the main function and cath if there is any error

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
