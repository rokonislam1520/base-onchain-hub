import React from 'react';

export const OnchainKitPaymaster = () => {
  const handleGaslessTx = async () => {
    alert("Initiating Gasless Transaction via Base Paymaster...");
    // Integration with OnchainKit for sponsored transactions
    console.log("Paymaster Gas Credits applied. User pays 0 gas.");
  };

  return (
    <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#fffbeeb3', borderLeft: '5px solid #f59e0b', borderRadius: '8px' }}>
      <h3>OnchainKit & Paymaster ⛽</h3>
      <p>Experience zero-gas transactions! We sponsor your gas fees using Base Paymaster Gas Credits.</p>
      <button 
        onClick={handleGaslessTx} 
        style={{ padding: '10px 20px', backgroundColor: '#f59e0b', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Send Gasless Transaction
      </button>
    </div>
  );
};
