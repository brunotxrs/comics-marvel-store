
export default async function handler(req, res) {
  try {
    const { api_key, format, limit } = req.query;

    const url = `https://comicvine.gamespot.com/api/issues/?api_key=${api_key}&format=${format}&limit=${limit}`;
    
    // Usamos o fetch nativo do Node.js para evitar a dependência do axios
    const response = await fetch(url);

    // O fetch retorna a resposta em formato JSON, então precisamos converter
    const data = await response.json();

    res.status(200).json(data);
    
  } catch (error) {
    console.error("Erro na função serverless:", error);
    res.status(500).json({ error: 'Erro ao buscar dados da API.' });
  }
}