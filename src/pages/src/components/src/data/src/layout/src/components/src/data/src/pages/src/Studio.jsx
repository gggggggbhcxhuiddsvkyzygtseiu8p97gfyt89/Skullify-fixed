import React, { useState, useRef } from 'react';

const Studio = ({ tracks }) => {
  // Store per-track states: playing, volume, muted
  const [trackStates, setTrackStates] = useState(
    tracks.map(() => ({ playing: false, volume: 1, muted: false }))
  );

  // Update trackStates if tracks change (like new uploads)
  React.useEffect(() => {
    setTrackStates(tracks.map(() => ({ playing: false, volume: 1, muted: false })));
  }, [tracks]);

  const audioRefs = useRef([]);

  const togglePlay = (idx) => {
    const isPlaying = trackStates[idx]?.playing;
    const audio = audioRefs.current[idx];

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      updateTrackState(idx, { playing: false });
    } else {
      audio.play();
      updateTrackState(idx, { playing: true });
    }
  };

  const updateTrackState = (idx, newState) => {
    setTrackStates((prev) =>
      prev.map((state, i) => (i === idx ? { ...state, ...newState } : state))
    );
  };

  const handleVolumeChange = (idx, value) => {
    const audio = audioRefs.current[idx];
    if (audio) audio.volume = value;
    updateTrackState(idx, { volume: value });
  };

  const toggleMute = (idx) => {
    const audio = audioRefs.current[idx];
    if (!audio) return;
    const muted = !trackStates[idx].muted;
    audio.muted = muted;
    updateTrackState(idx, { muted });
  };

  const onEnded = (idx) => {
    updateTrackState(idx, { playing: false });
  };

  if (tracks.length === 0)
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>No tracks uploaded yet.</p>;

  return (
    <div className="studio-container">
      <h2>Studio</h2>
      {tracks.map((track, idx) => (
        <div key={idx} className="track-row">
          <div className="track-info">
            <p>
              <strong>{track.title}</strong> — {track.artist}
            </p>
          </div>
          <div className="controls">
            <button onClick={() => togglePlay(idx)}>
              {trackStates[idx]?.playing ? 'Pause' : 'Play'}
            </button>
            <button onClick={() => toggleMute(idx)}>
              {trackStates[idx]?.muted ? 'Unmute' : 'Mute'}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={trackStates[idx]?.volume}
              onChange={(e) => handleVolumeChange(idx, parseFloat(e.target.value))}
              aria-label="Volume slider"
            />
          </div>
          <audio
            ref={(el) => (audioRefs.current[idx] = el)}
            src={URL.createObjectURL(track.file)}
            onEnded={() => onEnded(idx)}
            preload="auto"
          />
        </div>
      ))}
      <style>{`
        .studio-container {
          background: #181818;
          padding: 15px;
          border-radius: 8px;
          color: #ddd;
        }
        .track-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #333;
        }
        .track-info {
          flex: 2 1 300px;
          font-size: 1.1rem;
          color: #1db954;
        }
        .controls {
          flex: 1 1 300px;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: flex-end;
        }
        button {
          background: #1db954;
          border: none;
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s ease;
        }
        button:hover {
          background: #17a44c;
        }
        input[type="range"] {
          width: 120px;
          cursor: pointer;
        }
        @media (max-width: 600px) {
          .track-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .controls {
            width: 100%;
            margin-top: 8px;
            justify-content: flex-start;
          }
          input[type="range"] {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Studio;
