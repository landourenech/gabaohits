"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const function Client() {
    
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const scrollContainerRef = useRef(null);
  
    useEffect(() => {
      // Simuler une API ou une récupération de données
      const fetchMusicData = () => {
        // Exemple de données
        const data = [
          { id: 1, titre: "Chanson 1", cover: "/images/cover1.jpg", artist: "Artiste 1" },
          { id: 2, titre: "Chanson 2", cover: "/images/cover2.jpg", artist: "Artiste 2" },
          { id: 3, titre: "Chanson 3", cover: "/images/cover3.jpg", artist: "Artiste 3" },
          { id: 4, titre: "Chanson 4", cover: "/images/cover4.jpg", artist: "Artiste 4" },
        ];
        setRecentlyPlayed(data);
      };
  
      fetchMusicData();
    }, []);
  
    const loadMoreMusic = () => {
      // Simuler l'ajout de nouvelles données
      const moreData = [
        { id: 5, titre: "Chanson 5", cover: "/images/cover5.jpg", artist: "Artiste 5" },
        { id: 6, titre: "Chanson 6", cover: "/images/cover6.jpg", artist: "Artiste 6" },
        // Ajoutez plus de chansons ici
      ];
      setRecentlyPlayed(prev => [...prev, ...moreData]);
    };
  
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        loadMoreMusic();
      }
    };
  
    
    
    return (
    <div
    className="flex overflow-x-auto gap-4 scrollbar-hide"
    onScroll={handleScroll}
    ref={scrollContainerRef}
    style={{ scrollBehavior: "smooth" }}
  >
    {recentlyPlayed.map((music) => (
      <div
        key={music.id}
        className="flex flex-col items-center p-4 rounded-xl shadow-lg border-2 border-white bg-red-500 w-[35%]"
      >
        <Image
          src={music.cover}
          alt={`Cover de ${music.titre}`}
          width={200}
          height={200}
          className="rounded-[50%] border-2 border-white"
        />
        <p className="text-sm text-gray-700">{music.artist}</p>
      </div>
    ))}
  </div>
  );
}

export default MusicList ;
