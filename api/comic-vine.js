import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { api_key, format, limit } = req.query;
    
    const url = `https://comicvine.gamespot.com/api/issues/?api_key=${api_key}&format=${format}&limit=${limit}`;
    
    const response = await axios.get(url);
    
    // Retorna os dados da API para o front-end
    res.status(200).json(response.data);

  } catch (error) {
    console.error("Erro na função serverless:", error);
    res.status(500).json({ error: 'Erro ao buscar dados da API.' });
  }
}