// src/pages/Home.jsx
import React, { useState } from "react";
import tracks from "../data/tracks";
import MusicPlayer from "../components/MusicPlayer";

const Home = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Skullify</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <button onClick={() => setCurrentTrack(track)}>
              {track.title} – {track.artist}
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 20 }}>
        <MusicPlayer track={currentTrack} />
      </div>
    </div>
  );
};

export default Home;
