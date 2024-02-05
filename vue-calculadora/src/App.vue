<script setup>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
</script>

<template>
  <Header />
  <main>
    <div
      class="container d-flex flex-column align-items-center justify-content-center mt-5"
    >
      <Form />
    </div>
  </main>
</template>

<style scoped>
header {
  background-color: #eee;
  padding: 3rem 0;
}
</style>
