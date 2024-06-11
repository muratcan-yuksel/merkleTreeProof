const { expect } = require("chai");
const { formatEther } = require("ethers");
const { ethers } = require("hardhat");

describe("MerkleProof", function () {
  it("only whitelisted address can call function and it returns true", async function () {
    let owner, addr1, addr2;
    let merkleTreeContract;
    let rootHash =
      "0x12014c768bd10562acd224ac6fb749402c37722fab384a6aecc8f91aa7dc51cf";

    // async function setup() {
    [owner, addr1, addr2] = await ethers.getSigners();

    const MerkleTree = await ethers.getContractFactory("MerkleProofContract");
    merkleTreeContract = await MerkleTree.deploy(rootHash);
    console.log(merkleTreeContract.address);
    // }

    // beforeEach(async function () {
    //   await setup();
    // });

    const user = addr1;

    const proof = [
      "0xe9707d0e6171f728f7473c24cc0432a9b07eaaf1efed6a137a4a8c12c79552d9",
      "0x1ebaa930b8e9130423c183bf38b0564b0103180b7dad301013b18e59880541ae",
    ];

    console.log(
      `user address: ${user.address} and proof: ${proof} and rootHash: ${rootHash}`
    );

    expect(
      await merkleTreeContract.connect(user).onlyWhitelisted(proof)
    ).to.equal(5);
  });
});
