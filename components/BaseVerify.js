import React from 'react';

export const BaseVerify = () => {
  const handleVerify = () => {
    // Base Verify logic: Users log in with 3rd party accounts (X, Coinbase, etc.)
    alert("Redirecting to Base Verify... Prove you are a real person and not a bot!");
  };

  return (
    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e0e7ff', borderRadius: '8px' }}>
      <h3>Base Verify 🛡️</h3>
      <p>Confirm you are a real person without sharing personal data.</p>
      <button 
        onClick={handleVerify} 
        style={{ padding: '10px 20px', backgroundColor: '#0052FF', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Verify Identity Onchain
      </button>
    </div>
  );
};
