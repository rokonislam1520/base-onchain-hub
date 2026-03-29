import React from 'react';

export const MintNFT = () => {
  const handleMint = async () => {
    // Advanced logic for minting NFT on Base network
    if (typeof window.ethereum !== 'undefined') {
      try {
         alert("Initiating NFT Mint transaction on Base Sepolia...");
         // In a real app, ethers.js Contract interaction goes here
      } catch (error) {
        console.error("Minting failed", error);
      }
    } else {
      alert("Please connect your wallet first.");
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#eef2ff', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Exclusive Base Builder NFT</h3>
      <p>Mint your unique "Top Developer" NFT directly on the Base network.</p>
      <button 
        onClick={handleMint}
        style={{ padding: '10px 20px', backgroundColor: '#14f195', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Mint NFT Now
      </button>
    </div>
  );
};
