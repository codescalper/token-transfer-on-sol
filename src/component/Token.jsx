import React, { useState } from 'react';

const Token = () => {
  const [recipientPublicKey, setRecipientPublicKey] = useState('');
  const [amount, setAmount] = useState(0);
  const [selectedToken, setSelectedToken] = useState('Solana');

  const handleRecipientPublicKeyChange = (event) => {
    setRecipientPublicKey(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTokenChange = (event) => {
    setSelectedToken(event.target.value);
  };

  const handleSendClick = () => {
    console.log(`Sending ${amount} ${selectedToken} to ${recipientPublicKey}`);
  };

  return (
    <div>
      <label>
        Recipient Public Key:
        <input type="text" value={recipientPublicKey} onChange={handleRecipientPublicKeyChange} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <br />
      <label>
        Select Token:
        <select value={selectedToken} onChange={handleTokenChange}>
          <option value="Solana">Solana</option>
          <option value="USDC">USDC</option>
        </select>
      </label>
      <br />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default Token;
