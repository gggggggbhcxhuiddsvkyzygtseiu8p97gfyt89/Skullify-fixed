import React, { useState } from 'react';

const Upload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('audio/')) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid audio file.');
    }
  };

  const handleUpload = () => {
    if (!file || !title.trim() || !artist.trim()) {
      setError('Please fill all fields and select an audio file.');
      return;
    }

    onUpload({ file, title, artist });
    setFile(null);
    setTitle('');
    setArtist('');
    setError('');
  };

  return (
    <div className="upload-container">
      <h2>Upload Track</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Track Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist Name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleUpload}>Upload</button>

      <style>{`
        .upload-container {
          background: #222;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        input[type="file"] {
          margin-bottom: 10px;
          color: #eee;
        }
        input[type="text"] {
          display: block;
          width: 100%;
          padding: 8px;
          margin: 6px 0;
          border-radius: 4px;
          border: none;
          font-size: 1rem;
        }
        button {
          background: #1db954;
          color: #fff;
          border: none;
          padding: 10px 15px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #17a44c;
        }
        .error {
          color: #ff4c4c;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default Upload;
