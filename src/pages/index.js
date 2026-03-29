import React from 'react';
import { SignInWithBase } from '../components/SignInWithBase';
import { SmartWallet } from '../components/SmartWallet';
import { BaseNameService } from '../components/BaseNameService';
import { FarcasterConnect } from '../components/FarcasterConnect';
import { AcrossBridge } from '../components/AcrossBridge';
import { AaveLending } from '../components/AaveLending';
import { ZeroXSwap } from '../components/ZeroXSwap';
import { ZeroXSplits } from '../components/ZeroXSplits';
import { AgentiPyIntegration } from '../components/AgentiPyIntegration';
import { SuperchainFaucet } from '../components/SuperchainFaucet';

export default function Home() { 
  return ( 
    <main style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f4f4f9' }}> 
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '10px' }}>
        <h1 style={{ color: '#0052FF' }}>Base Master Onchain Hub</h1>
        <SignInWithBase /> 
        <SmartWallet />
        <BaseNameService />
        <FarcasterConnect />
        <AcrossBridge />
        <AaveLending />
        <ZeroXSwap />
        <ZeroXSplits />
        <AgentiPyIntegration />
        <SuperchainFaucet />
      </div>
    </main> 
  ); 
}
