import { useEffect, useState } from "react"; 

export function useFetchApiComicVine(){
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const KEY_API = '1ea7892a7a15cb41314f574fcc6277380d2c345e';

                const isLocalhost = window.location.hostname === 'localhost';
                const baseUrl = isLocalhost ? 'https://comics-marvel-store.vercel.app' : '';
                
                const urlServerless = `${baseUrl}/api/comic-vine/?api_key=${KEY_API}&format=json&limit=36`;

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