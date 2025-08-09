export default async function handler(req, res) {
  // Configurando o header CORS para permitir requisições de qualquer origem
  // Isso é seguro porque esta função é apenas um proxy para a API externa.
  // Em produção, a sua aplicação no Vercel vai chamar a função sem CORS.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  // Lida com requisições OPTIONS pré-voo do navegador
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { api_key, format, limit } = req.query;

    const url = `https://comicvine.gamespot.com/api/issues/?api_key=${api_key}&format=${format}&limit=${limit}`;
    
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();

    res.status(200).json(data);
    
  } catch (error) {
    console.error("Erro na função serverless:", error);
    res.status(500).json({ error: 'Erro ao buscar dados da API.' });
  }
}



// export default async function handler(req, res) {
//   try {
//     const { api_key, format, limit } = req.query;

//     const url = `https://comicvine.gamespot.com/api/issues/?api_key=${api_key}&format=${format}&limit=${limit}`;
    
//     // Usamos o fetch nativo do Node.js para evitar a dependência do axios
//     const response = await fetch(url);

//     // O fetch retorna a resposta em formato JSON, então precisamos converter
//     const data = await response.json();

//     res.status(200).json(data);
    
//   } catch (error) {
//     console.error("Erro na função serverless:", error);
//     res.status(500).json({ error: 'Erro ao buscar dados da API.' });
//   }
// }