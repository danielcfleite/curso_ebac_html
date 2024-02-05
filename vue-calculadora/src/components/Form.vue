<script setup>
import { reactive, computed } from "vue";

const state = reactive({
  n1: 0,
  n2: 0,
  operation: "add",
});

const result = computed(() => {
  switch (state.operation) {
    case "add":
      return state.n1 + state.n2;
    case "subtract":
      return state.n1 - state.n2;
    case "multiply":
      return state.n1 * state.n2;
    case "divide":
      return state.n2 !== 0 ? state.n1 / state.n2 : "Cannot divide by zero";
    default:
      return "Invalid operation";
  }
});

const getN1 = (e) => {
  state.n1 = parseInt(e.target.value);
  console.log(state.n1);
};

const getN2 = (e) => {
  state.n2 = parseInt(e.target.value);
  console.log(state.n2);
};

const getOperation = (e) => {
  state.operation = e.target.value;
  console.log(state.operation);
};
</script>

<template>
  <form>
    <input type="number" @change="getN1" placeholder="Número 1" class="me-4" />
    <input type="number" placeholder="Número 2" @change="getN2" />
    <select class="ms-4" @change="getOperation">
      <option value="add">somar</option>
      <option value="subtract">subtrair</option>
      <option value="multiply">multiplicar</option>
      <option value="divide">dividir</option>
    </select>
  </form>
  <p class="mt-5">Resultado: {{ result }}</p>
</template>
