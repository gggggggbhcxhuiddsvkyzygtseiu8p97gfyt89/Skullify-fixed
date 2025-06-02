import React, { useState } from 'react';
import Upload from './Upload';
import Studio from './Studio';

const MusicStudio = () => {
  const [tracks, setTracks] = useState([]);

  const handleUpload = (track) => {
    setTracks((prev) => [...prev, track]);
  };

  return (
    <div className="music-studio">
      <h1>Skullify Music Studio</h1>
      <Upload onUpload={handleUpload} />
      <Studio tracks={tracks} />
      <style>{`
        .music-studio {
          max-width: 900px;
          margin: 20px auto;
          padding: 10px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #121212;
          color: #eee;
          border-radius: 8px;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default MusicStudio;
