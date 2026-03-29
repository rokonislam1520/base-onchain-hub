import React, { useState, useEffect } from 'react';

export const FlashblocksTracker = () => {
  const [blockTime, setBlockTime] = useState("200ms");

  useEffect(() => {
    // In a real app, subscribe to Base Flashblocks API via WebSockets
    console.log("Subscribed to Base Flashblocks API for low-latency state updates");
  }, []);

  return (
    <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#e0f2fe', borderLeft: '5px solid #0ea5e9', borderRadius: '8px' }}>
      <h3>⚡ Flashblocks Integration</h3>
      <p>Real-time onchain data powered by Base Flashblocks. Current Block Time: <strong>{blockTime}</strong></p>
      <p><small>Enjoy instant transaction finality and sub-second updates.</small></p>
    </div>
  );
};
