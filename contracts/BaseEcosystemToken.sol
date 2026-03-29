// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BaseEcosystemToken is ERC20, Ownable {
    constructor() ERC20("BaseBuilderToken", "BBT") Ownable(msg.sender) {
        // Mint 1,000,000 tokens to the deployer
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Function to support cross-chain bridges or DeFi integrations
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
4. File Name: README.md
Professional profile-er jonno ekti bhalo README thaka obosshok. Ete GitHub-e keu asle bujhte parbe project-ti kisher. (Baire theke toiri kora):
# Base Onchain E-Commerce & DeFi Hub

## Overview
This project is an open-source decentralized application (dApp) built on the **Base** network. It is designed to empower builders, creators, and people everywhere to build apps, grow businesses, and earn onchain.

## Features Integrated
1. **Base Account:** Integrated `SignInWithBase` for a passkey-based universal account to connect with the onchain world.
2. **Base Pay:** Ready to accept express checkout crypto payments with global settlement at near-zero cost using USDC.
3. **Smart Contracts:** Includes an optimized ERC-20 token (`BaseEcosystemToken.sol`) ready to be deployed on Base Sepolia and Base Mainnet.

## How to Run
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.

## Network Information
- **Network Name:** Base Sepolia (Testnet) / Base Mainnet
- **Currency:** ETH
- **Smart Contract:** Built with Solidity ^0.8.20

Built by a proud contributor to the Base ecosystem.
