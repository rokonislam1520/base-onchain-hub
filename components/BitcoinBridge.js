import React from 'react';

export const BitcoinBridge = () => {
  const handleBtcBridge = () => {
    alert("Initiating fast non-custodial BTC transfer to Base via Garden Bridge...");
  };

  return (
    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3e0', borderLeft: '5px solid #ff9800', borderRadius: '8px' }}>
      <h3>Bitcoin ↔ Base Bridge (Powered by Garden) 🟠</h3>
      <p>Bridge BTC directly to Base using fast, trustless, and non-custodial intent-based architecture.</p>
      <button 
        onClick={handleBtcBridge} 
        style={{ padding: '10px 20px', backgroundColor: '#ff9800', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Bridge BTC to Base
      </button>
    </div>
  );
};
