<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="title">{{ msg }}</h1>
</template>

<style>
.title {
  text-align: center;
}
</style>
