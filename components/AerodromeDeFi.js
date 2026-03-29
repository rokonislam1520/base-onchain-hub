import React from 'react';

export const AerodromeDeFi = () => {
  const handleSwap = () => {
    alert("Executing token swap via Aerodrome Finance Liquidity Pools...");
  };

  return (
    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e3f2fd', borderLeft: '5px solid #2196f3', borderRadius: '8px' }}>
      <h3>Aerodrome Finance Integration ✈️</h3>
      <p>Trade tokens with the lowest slippage on the central liquidity marketplace of Base.</p>
      <button 
        onClick={handleSwap} 
        style={{ padding: '10px 20px', backgroundColor: '#0052FF', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Swap on Aerodrome
      </button>
    </div>
  );
};
