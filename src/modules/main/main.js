import { MainContainer } from './styles';
import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from 'js-md5';


function Main() {
  const [characters, setCharacters] = useState([]);
  const PUBLIC_KEY = '16a6689cc985c2e858e4f3ed066cf981';
  const PRIVATE_KEY = '08321f2952fc07ed52b473963ad75f2e665852bc';
 


  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const timeStamp = new Date().getTime();
        const stringToHash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;

        const HASH = md5(stringToHash);

        console.log('Timestamp:', timeStamp);
        console.log('String a ser hashed:', stringToHash);
        console.log('Hash gerado pelo código:', HASH);
        
        const url = `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

         const response = await axios.get(url);
        
        setCharacters(response.data.data.results)


      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      }
    }

    fetchCharacters();

  }, [])
  
  return (
    <MainContainer>
      {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
    </MainContainer>
  );
}

export default Main;