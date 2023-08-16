<template>
  <div class="cardContent">
    <h2 class="cidade">Tempo em {{ cidade }}</h2>
    <p class="temperatura">{{ temperatura || '..' }} °C</p>

    <div class="cardDetails">
      <div class="cards">
        <p class="previsao">{{ previsao }}</p>
      <img v-if="icone" :src="getIconUrl(icone)" alt="Ícone do tempo" />
    </div>
    <div class="cards">
      <p>Umidade</p>
      <img v-if="icone" :src="getIconUrl(icone)" alt="Ícone do tempo" />
      <p class="umidade">{{ umidade || '..' }}%</p>
    </div>
    <div class="cards">
      <p>Vento</p>
      <img v-if="icone" :src="getIconUrl(icone)" alt="Ícone do tempo" />
      <p class="vento">{{ vento || '..' }} km/h</p>
    </div>
    <div class="cards">
      <p>Mín/Max °C</p>
      <img v-if="icone" :src="getIconUrl(icone)" alt="Ícone do tempo" />
      <p class="temp-min-max">{{ tempMin || '..' }} / {{ tempMax || '..' }}</p>
    </div>
  </div>


    <div class="forecast">
      <div v-for="(prev, index) in previsoes" :key="index" class="forecast-item">
        <p class="forecast-day">{{ prev.dia }}</p>
        <img :src="getIconUrl(prev.icone)" alt="Ícone do tempo" class="forecast-icon" />
        <p class="forecast-temp">{{ prev.temperatura }} °C</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Previsao {
  dia: string;
  temperatura: string;
  icone: string;
}

const iconBaseUrl = 'https://openweathermap.org/img/wn/';

export default defineComponent({
  name: 'WeatherCard',
  props: {
    cidade: String as PropType<string>,
    temperatura: String as PropType<string>,
    previsao: String as PropType<string>,
    vento: String as PropType<string>,
    tempMin: String as PropType<string>,
    tempMax: String as PropType<string>,
    umidade: String as PropType<string>,
      icone: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    previsoes: Array as PropType<Array<Previsao>>,
  },
  methods: {
    getIconUrl(icon: string) {
      return `${iconBaseUrl}${icon}.png`;
    },
  },
});
</script>

<style scoped>
.cardContent {
  margin-top: 30px;
}
.cidade {
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
}
.temperatura {
  font-size: 80px;
  font-weight: 700;
  color: #fff;
  margin-top: 20px;
  text-align: center;
}
.cardDetails {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
}
.cards{
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:160px;
  height: 100px;
  margin: 4px;
  color:#fff;
  text-transform: capitalize;
  text-align: center;
  font-size: 14px;
}


</style>
