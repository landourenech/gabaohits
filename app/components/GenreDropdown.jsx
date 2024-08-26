import { useState, useEffect } from 'react';
import axios from 'axios';

const GenreDropdown = ({ setGenre }) => {
  const [genres, setGenres] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get('/api/genres')
      .then(response => setGenres(response.data))
      .catch(error => console.error('Erreur lors de la récupération des genres', error));
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full rounded-xl bg-[#777777] py-5 text-white"
        type="button"
      >
        Choisissez un genre
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg z-10">
          <ul>
            {genres.map((genre) => (
              <li
                key={genre.id}
                onClick={() => {
                  setGenre(genre.name);
                  setIsOpen(false);
                }}
                className="flex flex-col items-center cursor-pointer p-2 hover:bg-gray-200"
              >
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  {/* Ici, vous pouvez mettre une image ou un icône pour chaque genre */}
                  <span className="text-center text-sm">{genre.name}</span>
                </div>
                <span className="mt-1 text-sm">{genre.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GenreDropdown;
