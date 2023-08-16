<template>
    <div class="cardMain" >
      <searchInput v-model="cidadeSelecionada" @buscar="buscarCidades" />
      <weatherCard
      v-if="showWeatherCard"
      :cidade="cidade"
      :temperatura="temperatura"
      :previsao="previsao"
      :umidade="umidade"
      :vento="vento"
      :tempMin="tempMin"
      :tempMax="tempMax"
      :icone="icone"
      :previsoes="previsoes"
    />
    </div>
  </template>

<script lang="ts">
import { buscarDadosClima } from '../services/api.service';
import searchInput from './modules/components/searchInput.vue';
import weatherCard from './modules/components/weatherCard.vue'

export default {
  name: 'DisplayPanel',
  components: {
    searchInput,
    weatherCard

  },
  data() {
    return {
      cidadeSelecionada: '',
      cidade: '',
      temperatura: '',
      previsao: '',
      umidade: '',
      icone: '',
      vento: '',
      tempMin: '',
      tempMax: '',
      showWeatherCard:false,
      previsoes:[],
    };
  },
  methods: {
    async buscarCidades() {
      try {
        const dados = await buscarDadosClima(this.cidadeSelecionada);

        if (dados) {
          this.cidade = dados.name;
          this.temperatura = (dados.main.temp - 273.15).toFixed(1);
          this.previsao = dados.weather[0].description;
          this.umidade = dados.main.humidity;
          this.icone = dados.weather[0].icon;
          this.vento = dados.wind.speed.toFixed(1)
          this.tempMin = (dados.main.temp_min - 273.15).toFixed(1)
          this.tempMax = (dados.main.temp_max - 273.15).toFixed(1)
          this.showWeatherCard = true;
        } else {
          this.cidade = '';
          this.temperatura = '';
          this.previsao = '';
          this.umidade = '';
          this.icone = '';
          this.vento = '',
          this.tempMin = '',
          this.tempMax = '',
          this.showWeatherCard= false,
          this.previsoes = []
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
  },
};
</script>

<style>
.cardMain {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  padding: 20px;
  width: 125vw;
  max-width: 550px;
}
</style>

