<script setup>
import { reactive } from "vue";

const state = reactive({
  input1: 0,
  input2: 0,
  operation: "somar",
  result: 0,
});

const updateInputValue = (e, input) => {
  if (input === 1) {
    state.input1 = e.target.value;
  } else {
    state.input2 = e.target.value;
  }
};

const updateOperation = (e) => {
  state.operation = e.target.value;
};

const getResult = () => {
  const { input1, input2, operation } = state;
  const n1 = parseInt(input1);
  const n2 = parseInt(input2);

  switch (operation) {
    case "somar": {
      state.result = n1 + n2;
      console.log(state.result);
      console.log(n1);
      console.log(n2);
      break;
    }
    case "subtrair": {
      state.result = n1 - n2;
      break;
    }
    case "multiplicar": {
      state.result = n1 * n2;
      break;
    }
    case "dividir": {
      state.result = n1 / n2;
      break;
    }
    case "módulo":
      if (n2 !== 0) {
        state.result = n1 % n2;
      } else {
        state.result = "Não é possível fazer módulo 0";
      }
      break;
  }
};
</script>

<template>
  <header>
    <div class="container text-center">
      <h1>Calculadora Aritimética</h1>
    </div>
  </header>
  <main>
    <div
      class="container d-flex flex-column align-items-center justify-content-center mt-5"
    >
      <form @submit.prevent="getResult">
        <input
          type="number"
          placeholder="Número 1"
          class="me-4"
          @keyup="updateInputValue($event, 1)"
        />
        <input
          type="number"
          placeholder="Número 2"
          @keyup="updateInputValue($event, 2)"
        />
        <select class="ms-4" @change="updateOperation">
          <option value="somar">somar</option>
          <option value="subtrair">subtrair</option>
          <option value="multiplicar">multiplicar</option>
          <option value="dividir">dividir</option>
          <option value="módulo">módulo</option>
        </select>
        <button type="submit" class="btn btn-primary ms-4">
          {{ state.operation }}
        </button>
      </form>
      <p class="mt-5">Resultado: {{ state.result }}</p>
    </div>
  </main>
</template>

<style scoped>
header {
  background-color: #eee;
  padding: 3rem 0;
}
</style>
