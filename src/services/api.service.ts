import axios from 'axios'

const apiKey = 'fea3bb15189ee8108275cc4e719dfb2f';

const weatherService = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
});

export async function buscarDadosClima(cidade: string) {
  try {
    const response = await weatherService.get(`?q=${cidade}&appid=${apiKey}&lang=pt_BR`);

    if (!response.data) {
      throw new Error('Cidade não encontrada');
    }

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
}


