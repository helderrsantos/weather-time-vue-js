<template>
  <div>
    <input
      type="text"
      class="inputSelect"
      placeholder="Selecione uma cidade"
      :value="cidadeSelecionada"
      @input="atualizarCidadeSelecionada"
    />
    <button type="button" class="buttonSelect" @click="buscarCidades()">
      <font-awesome-icon icon="fa-solid fa-search" class="search" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SearchInput',
  props: {
    modelValue: String as PropType<string>,
  },
  emits: ['update:modelValue', 'buscar'],
  data() {
    return {
      cidadeSelecionada: this.modelValue,
    };
  },
  methods: {
    atualizarCidadeSelecionada(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      this.cidadeSelecionada = inputElement.value;
    },
    buscarCidades() {
      this.$emit('update:modelValue', this.cidadeSelecionada);
      this.$emit('buscar');
    },
  },
});
</script>

<style>
.inputSelect {
  border: none;
  outline: none;
  padding: 8px 8px;
  border-radius: 25px;
  font-size: 18px;
  background-color: #7c7c7c2b;
  color: #fff;
  width: calc(100% - 60px);
}::placeholder{
  color:#fff;
  font-style: italic;
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
</style>
