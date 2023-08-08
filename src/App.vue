<script setup lang="ts">
import CardMain from "./components/CardMain.vue";
</script>

<template>
  <div class="container">
    <CardMain msg="Agora foi!" />
    <CardMain msg="Agora foi!" />
    <CardMain msg="Agora foi!" />
    <CardMain msg="Agora foi!" />
  </div>
</template>

<style>
.container {
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 8%;
  margin-right: 45%;
}

div {
}
</style>
