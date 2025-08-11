import { useEffect, useState } from "react"; 
import md5 from "js-md5";

export function useFetchApiMarvel() {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        const fetchComics = async () => {
            try {
                // Suas chaves estão aqui para o desenvolvimento local
                const PUBLIC_KEY = '16a6689cc985c2e858e4f3ed066cf981';
                const PRIVATE_KEY = '08321f2952fc07ed52b473963ad75f2e665852bc';

                // Geração do timestamp e hash para autenticação
                const timeStamp = new Date().getTime();
                const stringToHash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
                const hash = md5(stringToHash);

                // URL da API da Marvel com os parâmetros de autenticação
                const url = `https://gateway.marvel.com/v1/public/comics?limit=100&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

                console.log("Tentando buscar dados de:", url);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erro na requisição para ${url}: ${response.statusText}`);
                }

                const data = await response.json();
                
                console.log('Dados da API Marvel:', data);
                setComics(data.data.results);

            } catch (error) {
                console.error("Erro ao buscar quadrinhos da Marvel:", error);
            }
        };

        fetchComics();
    }, []);

    return comics;
}



export function useFetchApiComicVine(){
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const KEY_API = '1ea7892a7a15cb41314f574fcc6277380d2c345e';

                const isLocalhost = window.location.hostname === 'localhost';
                const baseUrl = isLocalhost ? 'https://comics-marvel-store.vercel.app' : '';
                
                const urlServerless = `${baseUrl}/api/comic-vine/?api_key=${KEY_API}&format=json&limit=20`;

                // Use fetch nativo do navegador para a requisição
                const response = await fetch(urlServerless);

                // Verifique se a resposta foi bem-sucedida
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.statusText}`);
                }

                // Extraia o JSON da resposta
                const data = await response.json();
                
                console.log('Dados da API Comic Vine:', data);
                setCharacters(data.results);

            } catch (error) {
                console.error("Erro ao buscar personagens da Comic Vine:", error);   
            }
        }
        fetchCharacters();
    }, [])

    return characters;
}