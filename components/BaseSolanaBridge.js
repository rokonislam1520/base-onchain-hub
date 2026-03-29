import React from 'react';

export const BaseSolanaBridge = () => {
  // Official Base-Solana Bridge Contract Addresses
  const bridgeContract = "0x3eff766C76a1be2Ce1aCF2B69c78bCae257D5188";
  const solTokenOnBase = "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82";

  const handleBridge = async () => {
    alert(`Initiating cross-chain transfer to Solana via Bridge Contract: ${bridgeContract}`);
  };

  return (
    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f3f4f6', borderLeft: '5px solid #14f195', borderRadius: '8px' }}>
      <h3>Base ↔ Solana Bridge 🌉</h3>
      <p>Seamlessly transfer SOL and SPL tokens between Base and Solana.</p>
      <p><small><strong>SOL Token on Base:</strong> {solTokenOnBase}</small></p>
      <button 
        onClick={handleBridge} 
        style={{ padding: '10px 20px', backgroundColor: '#14f195', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Bridge Assets to Solana
      </button>
    </div>
  );
};
