"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from 'axios'; 
import GenreDropdown from "../components/GenreDropdown"; // Assurez-vous d'importer correctement le composant

export default function Register() {

  // États pour chaque étape du formulaire
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [genre, setGenre] = useState(""); 
  const [search, setSearch] = useState(""); 
  const [name, setName] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  
  const [showPassword, setShowPassword] = useState(false); // État pour la visibilité du mot de passe

  // Fonction pour passer à l'étape suivante avec vérification des champs
  const handleNextStep = () => {
    if (step === 1 && email === "") {
      setErrorMessage("Veuillez entrer votre adresse email.");
    } else if (step === 2 && password === "") {
      setErrorMessage("Veuillez entrer votre mot de passe.");
    } else if (step === 3 && genre === "") {
      setErrorMessage("Veuillez sélectionner un genre.");
    } else if (step === 4 && search === "") {
      setErrorMessage("Veuillez entrer au moins trois artistes que vous aimez.");
    } else if (step === 5 && name === "") {
      setErrorMessage("Veuillez entrer votre nom.");
    } else {
      setErrorMessage("");
      setStep(step + 1);
    }
  };

  // Fonction pour passer à l'étape précédente
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // Fonction pour soumettre le formulaire
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !genre || !search || !name) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    useEffect(() => {
      if (genre) {
        axios.get(`/api/artists?genre=${genre}`)
          .then(response => setArtists(response.data))
          .catch(error => console.error('Erreur lors de la récupération des artistes', error));
      }
    }, [genre]);
   
    axios.post('/api/register', { email, password, genre, search, name })
      .then(response => {
        console.log("Form submitted successfully:", response.data);
      })
      .catch(error => {
        console.error("Error submitting form", error);
      });
  };

  return (
    <div className="flex flex-col w-[90%] gap-10">
      {step > 1 && (
        <div>
          <button onClick={handlePreviousStep}>Retour au step précédent</button>
        </div>
      )}
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col justify-center items-center w-full gap-5">
          {step === 1 && (
            <div className="flex flex-col justify-center w-full">
              <p className="text-xl">Entrez votre adresse mail</p>
              <input
                className="rounded-xl bg-[#777777] py-5 w-full text-black placeholder:text-gray-500"
                type="email"
                placeholder={errorMessage || "exemple@gmail.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p>Vous devrez confirmer cette adresse plus tard</p>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col justify-center w-full">
              <p className="text-xl">Entrez votre mot de passe</p>
              <div className="relative w-full">
                <input
                  className="rounded-xl bg-[#777777] py-5 w-full text-black"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="8"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Masquer" : "Afficher"}
                </button>
              </div>
              <p>Votre mot de passe doit avoir au moins 8 caractères.</p>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col justify-center w-full">
              <p className="text-xl">Quel est votre genre ?</p>
              <GenreDropdown setGenre={setGenre} />
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col justify-center w-full">
              <p className="text-xl text-center">Choisissez trois artistes ou plus que vous aimez</p>
              <input
                className="rounded-xl bg-[#fff] py-5 w-full text-black px-5 placeholder:text-black"
                type="text"
                placeholder={errorMessage || "Rechercher"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
               <ul>
                {artists
                  .filter(artist => artist.name.toLowerCase().includes(search.toLowerCase()))
                  .map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                  ))}
              </ul>
            </div>
          )}
          {step === 5 && (
            <div className="flex flex-col justify-center w-full">
              <p className="text-xl">Quel est votre nom ?</p>
              <input
                className="rounded-xl bg-[#777777] py-5 w-full"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <p>Cela apparaîtra sur votre profil GABAO-HITS.</p>
              <p>En appuyant sur créer un compte, vous acceptez les <Link href="#">conditions d'utilisation</Link> de GABAO-HITS.</p>
              <p>Découvrez comment GABAO-HITS utilise vos données personnelles. Veuillez consulter la <Link href="#">politique de confidentialité</Link> de GABAO-HITS.</p>
            </div>
          )}
          {step < 5 && (
            <button
              type="button"
              className="bg-[#535353] w-[25%] text-center justify-center rounded-full py-5 flex items-center"
              onClick={handleNextStep}
            >
              Suivant
            </button>
          )}
          {step === 5 && (
            <button
              type="submit"
              className="bg-[#535353] w-[40%] text-center justify-center rounded-full py-5 text-black flex items-center"
            >
              Création d'un compte
            </button>
          )}
        </div>
      </form>

      <button>
        <Link href="../client/">Soumettre le formulaire client</Link>
      </button>
      <button>
        <Link href="../admi/">Soumettre le formulaire admin</Link>
      </button>
    </div>
  );
}
