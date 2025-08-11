import md5 from "js-md5";

export default async function handler(req, res) {
    try {
        // As chaves são lidas de variáveis de ambiente da Vercel.
        // Elas não estão no código, o que garante a segurança.
        const PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
        const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;

        // Se as chaves não existirem (porque não foram configuradas),
        // a função retorna um erro 500 para evitar falhas.
        if (!PUBLIC_KEY || !PRIVATE_KEY) {
            return res.status(500).json({ error: 'As chaves da API da Marvel não foram configuradas.' });
        }
        
        // Geração do timestamp e hash para autenticação, conforme a API da Marvel exige.
        const timeStamp = new Date().getTime();
        const stringToHash = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
        const hash = md5(stringToHash);

        // Criação da URL da API com todos os parâmetros de segurança.
        const marvelApiUrl = `https://gateway.marvel.com/v1/public/comics?limit=100&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

        // Requisição para a API oficial da Marvel.
        const response = await fetch(marvelApiUrl);
        const data = await response.json();

        // Se a resposta não for bem-sucedida, retorna o erro.
        if (!response.ok) {
            return res.status(response.status).json({ error: data.status || 'Erro na API da Marvel' });
        }

        // Retorna os dados para a sua aplicação.
        res.status(200).json(data.data.results);

    } catch (error) {
        console.error("Erro na função serverless da Marvel:", error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
