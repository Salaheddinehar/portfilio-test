import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [text, setText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const generateQRCode = () => {
    setQrCodeUrl(text);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={generateQRCode}
        style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
      >
        Generate QR Code
      </button>
      {qrCodeUrl && (
        <div style={{ marginTop: '20px' }}>
          <QRCode value={qrCodeUrl} />
          <a
            href={`data:image/png;base64,${qrCodeUrl}`}
            download="qrcode.png"
            style={{ display: 'block', marginTop: '10px' }}
          >
            Download QR Code
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
