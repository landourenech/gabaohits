"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Client() {
  // Exemple de données musicales (à remplacer par les données réelles)
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    // Simuler une API ou une récupération de données
    const fetchMusicData = () => {
      // Exemple de données
      const data = [
        { id: 1, titre: "Chanson 1", cover: "/images/cover1.jpg", artist: "Artiste 1" },
        { id: 2, titre: "Chanson 2", cover: "/images/cover2.jpg", artist: "Artiste 2" },
        // Ajoutez plus de chansons ici
      ];
      setRecentlyPlayed(data);
    };

    fetchMusicData();
  }, []);

  return (
    <>
      <div className="flex flex-col w-[90%] mx-auto justify-center">
        <div className="flex flex-col w-full justify-center">
          <h1 className="text-xl mb-4">Récemment écoutés</h1>
          <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
            {recentlyPlayed.map((music) => (
              <div
                key={music.id}
                className="flex flex-col items-center bg-red-500 p-4 rounded-lg shadow-lg"
              >
                <Image
                  src={music.cover}
                  alt={`Cover de ${music.titre}`}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <p className="mt-2 text-lg font-semibold">{music.titre}</p>
                <p className="text-sm text-gray-700">{music.artist}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-">
        <Link href="./album/">Aller dans l'album</Link>
      </button>
      </div>
    </>
  );
}
