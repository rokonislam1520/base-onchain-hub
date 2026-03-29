import React, { useState, useEffect } from 'react';
import { SignInWithBase } from '../components/SignInWithBase'; 
import { MintNFT } from '../components/MintNFT'; 
import { BaseVerify } from '../components/BaseVerify'; // <-- Notun import
import { BaseSolanaBridge } from '../components/BaseSolanaBridge'; // <-- Notun import
import { ethers } from 'ethers';

export default function Home() { 
  const [balance, setBalance] = useState("0");
  const [address, setAddress] = useState(null);

  const checkBalance = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        const userBalance = await provider.getBalance(userAddress);
        
        setAddress(userAddress);
        setBalance(ethers.utils.formatEther(userBalance));
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  };

  useEffect(() => {
    checkBalance();
  }, []);

  return ( 
    <main style={{ padding: '50px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9' }}> 
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#0052FF' }}>Base Onchain Hub</h1>
        <p>Your ultimate dApp built on Base! Connect your Base Account to explore.</p>
        
        {/* Base Account universal login component */}
        <div style={{ margin: '20px 0' }}>
            <SignInWithBase /> 
        </div>

        {address && (
          <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#eef2ff', borderRadius: '8px' }}>
            <h3>User Profile</h3>
            <p><strong>Wallet Address:</strong> {address}</p>
            <p><strong>Base ETH Balance:</strong> {balance} ETH</p>
          </div>
        )}

        <BaseVerify />
        
        <MintNFT /> 

        <BaseSolanaBridge />

        {/* Builder Code Analytics Note */}
        <div style={{ marginTop: '40px', textAlign: 'center', color: '#666' }}>
          <p><small>Analytics tracking powered by <strong>ERC-8021 Builder Codes</strong> on base.dev</small></p>
        </div>
      </div>
    </main> 
  ); 
}
