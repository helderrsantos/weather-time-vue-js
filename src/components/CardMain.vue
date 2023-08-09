<script setup lang="ts">
import { ref } from 'vue';

const cidadeSelecionada = ref('');
const cidade = ref('');
const temperatura = ref('');
const previsao = ref('');
const umidade = ref('');

const apiKey = 'fea3bb15189ee8108275cc4e719dfb2f';

async function buscar() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidadeSelecionada.value}&appid=${apiKey}&lang=pt_BR`,
    );

    if (!response.ok) {
      throw new Error('Cidade não encontrada');
    }

    const dados = await response.json();
    return dados;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return null;
  }
}

async function buscarCidades() {
  const dados = await buscar();
  console.log(dados);
  if (dados) {
    cidade.value = dados.name;
    temperatura.value = (dados.main.temp - 273.15).toFixed(1);
    previsao.value = dados.weather[0].description;
    umidade.value = dados.main.humidity;
  }
}
</script>

<template>
  <div class="cardMain">
    <input
      type="text"
      class="inputSelect"
      placeholder="Selecione uma cidade"
      v-model="cidadeSelecionada"
    />
    <button type="button" class="buttonSelect" @click="buscarCidades()">
      <font-awesome-icon icon="fa-solid fa-search" class="search" />
    </button>

    <div class="cardContent">
      <h2 class="cidade">Tempo em {{ cidade }}</h2>
      <p class="temperatura">{{ temperatura || '..' }} °C</p>

      <div class="cardDetails">
        <font-awesome-icon icon="fa-solid fa-cloud" class="cloud" />
        <p class="previsao">{{ previsao }}</p>
      </div>

      <p class="umidade">Umidade: {{ umidade || '..' }}%</p>
    </div>
  </div>
</template>

<style>
.cardMain {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 20px;
  width: 95vw;
  max-width: 450px;
}

.inputSelect {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 25px;
  font-size: 18px;
  background-color: #7c7c7c2b;
  color: #fff;
  width: calc(100% - 60px);
}

.buttonSelect {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 50px;
  background-color: #7c7c7c2b;
  cursor: pointer;
  float: right;
}

.search {
  width: 20px;
  color: #fff;
}

.cardContent {
  margin-top: 30px;
}

.cidade {
  color: #fff;
  font-size: 28px;
  font-weight: 300;
}

.temperatura {
  font-size: 20px;
  color: #fff;
  margin-top: 20px;
}

.cardDetails {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.previsao {
  color: #fff;
  margin-left: 20px;
  text-transform: capitalize;
}

.umidade {
  color: #fff;
  margin-top: 20px;
}
</style>
