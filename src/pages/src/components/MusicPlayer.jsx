// src/components/MusicPlayer.jsx
import React, { useState } from "react";

const MusicPlayer = ({ track }) => {
  if (!track) return <div>Select a track</div>;

  const embedUrl = track.url.replace("watch?v=", "embed/");

  return (
    <div>
      <h2>{track.title}</h2>
      <h4>{track.artist}</h4>
      <iframe
        width="100%"
        height="315"
        src={embedUrl}
        title="YouTube player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
