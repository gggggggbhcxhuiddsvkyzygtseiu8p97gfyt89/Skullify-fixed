import React, { useState } from "react";
import tracks from "../data/tracks";
import MusicPlayer from "../components/MusicPlayer";
import Layout from "../layout/Layout";

const Home = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Top Tracks</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-white rounded-lg p-4 shadow hover:shadow-xl cursor-pointer"
            onClick={() => setCurrentTrack(track)}
          >
            <img src={track.cover} alt={track.title} className="rounded mb-2" />
            <h2 className="font-semibold">{track.title}</h2>
            <p className="text-gray-500 text-sm">{track.artist}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <MusicPlayer track={currentTrack} />
      </div>
    </Layout>
  );
};

export default Home;
