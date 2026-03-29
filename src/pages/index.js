import React, { useState, useEffect } from 'react';
import { SignInWithBase } from '../components/SignInWithBase'; // Source theke neya [2]
import { ethers } from 'ethers';

export default function Home() { 
  const [balance, setBalance] = useState("0");
  const [address, setAddress] = useState(null);

  // Baire theke jukto kora: Wallet connection o balance check korar logic
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
        <h1 style={{ color: '#0052FF' }}>Base Onchain E-Commerce & DeFi Hub</h1>
        <p>Welcome to the ultimate dApp built on Base! Connect your Base Account to start.</p>
        
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

        <div style={{ marginTop: '30px' }}>
            <h2>Base Pay Integration</h2>
            <p>Accept near-zero cost USDC payments globally.</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#0052FF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Pay 10 USDC via Base Pay
            </button>
        </div>
      </div>
    </main> 
  ); 
}
