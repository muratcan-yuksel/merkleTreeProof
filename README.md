## steps

-instal hardhat & openzeppelin
npm install --save-dev hardhat
npm install @openzeppelin/contracts

- instal these :
  npm install keccak256 merkletreejs fs

Your project has the whitelisted addressess already. We will have them encrypted using a merkle tree, and then implement its proof in the smart contract to make sure only the whitelisted addresses can call a function.

In this scenario, the proof cannot be changed as it will be passed in the constructor. So there will be no more whitelisted addressess added.

The proof is generated in utils/merkleTree.js
