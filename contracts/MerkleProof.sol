// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract MerkleProofContract {
    bytes32 public rootHash;

    constructor(bytes32 _rootHash) {
        rootHash = _rootHash;
    }

    function verifyProof(
        bytes32[] calldata proof,
        bytes32 leaf
    ) private view returns (bool) {
        return MerkleProof.verify(proof, rootHash, leaf);
    }

    modifier isWhitelistedAddress(bytes32[] calldata proof) {
        require(
            verifyProof(proof, keccak256(abi.encodePacked(msg.sender))),
            "Not WhiteListed Address"
        );
        _;
    }

    function onlyWhitelisted(
        bytes32[] calldata proof
    ) public view isWhitelistedAddress(proof) returns (uint8) {
        return 5;
    }
}
