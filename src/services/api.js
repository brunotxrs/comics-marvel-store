import { useEffect, useState } from "react"; 
import axios from "axios";
// import md5 from "js-md5";


export function useFetchApiComicVine(){
    const [characters, setCharacters] = useState([]);
    

    useEffect(() => {
        const fetchCharacters = async () => {
            
            try {
                const KEY_API = '1ea7892a7a15cb41314f574fcc6277380d2c345e';
                const urlComicVine = `/api/issues/?api_key=${KEY_API}&format=json&limit=10`;

                const response = await axios.get(urlComicVine);

                console.log('Dados da API Comic Vine:', response.data.results);
                setCharacters(response.data.results);
                
            } catch (error) {
                console.error("Erro ao buscar personagens da Comic Vine:", error);   
            }

        }

        fetchCharacters();

    }, [])


    return characters;

}

export function useFetchApiComicVineBackground(){
    const [charactersIssues, setCharactersIssues] = useState([]);
    

    useEffect(() => {
        const fetchCharacters = async () => {
            
            try {
                const KEY_API = '1ea7892a7a15cb41314f574fcc6277380d2c345e';
                const urlComicVineIssues = `/api/issues/?api_key=${KEY_API}&format=json&limit=10`;

                const response = await axios.get(urlComicVineIssues);

                console.log('Dados da API Comic Vine Issues:', response.data.results);
                setCharactersIssues(response.data.results);
                
            } catch (error) {
                console.error("Erro ao buscar HQs da Comic Vine:", error);   
            }

        }

        fetchCharacters();

    }, [])


    return charactersIssues;

}

// These comments are the structure for requesting the Marvel API, which is currently under maintenance. 

// const PRIVATE_KEY = '08321f2952fc07ed52b473963ad75f2e665852bc';
// const PUBLIC_KEY = '16a6689cc985c2e858e4f3ed066cf981';

// const marvelApi = axios.create({
//   baseURL: 'https://gateway.marvel.com/v1/public/'
// });

// export const getComics = async () => {
//   const timeStamp = new Date().getTime();
//   const stringToHash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
//   const hash = md5(stringToHash);

//   try {
//     const response = await marvelApi.get('comics', {
//       params: {
//         ts: timeStamp,
//         apikey: PUBLIC_KEY,
//         hash: hash
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar quadrinhos:", error);
//     throw error;
//   }
// };

