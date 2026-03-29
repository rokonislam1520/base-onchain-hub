import React, { useState, useEffect } from 'react';
import { SignInWithBase } from '../components/SignInWithBase'; 
import { BaseVerify } from '../components/BaseVerify'; 
import { BaseSolanaBridge } from '../components/BaseSolanaBridge'; 
import { BitcoinBridge } from '../components/BitcoinBridge'; // <-- Notun
import { AerodromeDeFi } from '../components/AerodromeDeFi'; // <-- Notun
import { ethers } from 'ethers';

export default function Home() { 
  // ... (Ager balance check korar code ekhanei thakbe) ...

  const subscribeNotifications = () => {
    // New Base.dev primitive for notifications
    alert("Subscribed to Base App Notifications using new Base.dev primitives!");
  };

  return ( 
    <main style={{ padding: '50px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9' }}> 
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#0052FF' }}>Base Onchain Hub</h1>
        <p>Your ultimate dApp built on Base! Connect your Base Account to explore.</p>
        
        <div style={{ margin: '20px 0' }}>
            <SignInWithBase /> 
        </div>

        {/* Notun: Base App Primitives Notifications */}
        <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
           <h4>Base.dev Primitives</h4>
           <p>Enable native notifications and app distribution.</p>
           <button onClick={subscribeNotifications} style={{ padding: '8px 15px', cursor: 'pointer' }}>Enable Notifications</button>
        </div>

        <AerodromeDeFi />
        <BitcoinBridge />
        <BaseVerify />
        <BaseSolanaBridge />

        <div style={{ marginTop: '40px', textAlign: 'center', color: '#666' }}>
          <p><small>Analytics tracking powered by <strong>ERC-8021 Builder Codes</strong> on base.dev</small></p>
        </div>
      </div>
    </main> 
  ); 
}
