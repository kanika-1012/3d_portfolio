// src/components/BlockchainDemo.jsx
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Replace these with your deployed contract’s details
const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
const contractABI = [
  // Paste your contract's ABI array here, for example:
  // {
  //   "inputs": [{ "internalType": "string", "name": "_greeting", "type": "string" }],
  //   "stateMutability": "nonpayable",
  //   "type": "constructor"
  // },
  // ...other ABI items
];

const BlockchainDemo = () => {
  const [greeting, setGreeting] = useState('');
  const [inputGreeting, setInputGreeting] = useState('');

  // On component mount, load the current greeting
  useEffect(() => {
    loadGreeting();
  }, []);

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      return { provider, signer };
    } else {
      alert('Please install MetaMask to use this feature.');
      throw new Error('MetaMask not installed');
    }
  }

  async function loadGreeting() {
    try {
      const { signer } = await connectWallet();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const currentGreeting = await contract.getGreeting();
      setGreeting(currentGreeting);
    } catch (error) {
      console.error('Error loading greeting:', error);
    }
  }

  async function updateGreeting() {
    try {
      const { signer } = await connectWallet();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const tx = await contract.setGreeting(inputGreeting);
      await tx.wait(); // Wait for the transaction to be mined
      alert('Greeting updated!');
      loadGreeting(); // Refresh the greeting
    } catch (error) {
      console.error('Error updating greeting:', error);
    }
  }

  return (
    <section style={{ padding: '2rem', border: '1px solid #ccc', marginTop: '2rem' }}>
      <h2>Blockchain Demo: Greeting DApp</h2>
      <p>
        <strong>Current Greeting:</strong> {greeting || 'Loading...'}
      </p>
      <input
        type="text"
        placeholder="Enter new greeting"
        value={inputGreeting}
        onChange={(e) => setInputGreeting(e.target.value)}
      />
      <button onClick={updateGreeting}>Update Greeting</button>
    </section>
  );
};

export default BlockchainDemo;
