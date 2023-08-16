<template>
  <div class="forecast-card">
    <button class="delete-button" @click="excluirCard">Excluir</button>
    <h2 class="cidade">{{ cidade }} - {{ dia }}</h2>
    <p class="temperatura">{{ temperatura }} °C</p>
    <div class="previsao">
      <img :src="iconeUrl"  :alt="previsao" />
      {{ previsao }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'WeatherForecastCard',
  props: {
    cidade: String as PropType<string>,
    dia: String as PropType<string>,
    temperatura: String as PropType<string>,
    previsao: String as PropType<string>,
    icone: String as PropType<string>,
  },
  computed: {
    iconeUrl(): string {
      return `https://openweathermap.org/img/wn/${this.icone}.png`;
    },
  },
  methods: {
    excluirCard() {
      this.$emit('excluir');
    },
  },
});
</script>

<style scoped>
.forecast-card{
  background-color: red;
}
</style>
