import React from 'react';

export const SignInWithBase = () => {
  const handleSignIn = async () => {
    // Logic for connecting with Base Universal Account
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        alert("Successfully signed in with Base Account!");
      } catch (error) {
        console.error("Connection failed", error);
      }
    } else {
      alert("Please install a Web3 wallet like Coinbase Wallet.");
    }
  };

  return (
    <button 
      onClick={handleSignIn}
      style={{ padding: '12px 24px', backgroundColor: '#0052FF', color: '#fff', fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
    >
      Sign In With Base
    </button>
  );
};
