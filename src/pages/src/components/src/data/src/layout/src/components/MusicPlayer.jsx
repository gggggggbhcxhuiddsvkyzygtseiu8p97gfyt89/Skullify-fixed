import React from "react";

const MusicPlayer = ({ track }) => {
  if (!track) return <div>Select a track to play</div>;

  const embedUrl = track.url.replace("watch?v=", "embed/");

  return (
    <div className="mt-6">
      <img src={track.cover} alt={track.title} className="w-60 rounded-xl mb-3 shadow-lg" />
      <h2 className="text-xl font-semibold">{track.title}</h2>
      <p className="text-sm text-gray-600">{track.artist}</p>
      <iframe
        className="w-full mt-4 rounded-lg"
        height="315"
        src={embedUrl}
        title="YouTube player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
