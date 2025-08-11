import md5 from "js-md5";

export default async function handler(req, res) {
    try {
        // As chaves são lidas de variáveis de ambiente do Vercel
        const PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
        const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;

        if (!PUBLIC_KEY || !PRIVATE_KEY) {
            return res.status(500).json({ error: 'As chaves da API da Marvel não foram configuradas.' });
        }
        
        const timeStamp = new Date().getTime();
        const stringToHash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
        const hash = md5(stringToHash);

        const marvelApiUrl = `https://gateway.marvel.com/v1/public/comics?limit=100&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

        const response = await fetch(marvelApiUrl);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.status || 'Erro na API da Marvel' });
        }

        res.status(200).json(data.data.results);

    } catch (error) {
        console.error("Erro na função serverless da Marvel:", error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}