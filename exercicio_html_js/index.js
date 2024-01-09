const sendButton = document.querySelector("#send-button");
const n1 = document.querySelector("#n2");
const n2 = document.querySelector("#n1");
const message = document.querySelector("#message");

function higherNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return `O maior número é: ${firstNumber}`;
  } else {
    return `O maior número é: ${secondNumber}`;
  }
}

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  const firstNumber = n1.value;
  const secondNumber = n2.value;
  if (!firstNumber || !secondNumber) {
    message.style.color = "red";
    message.textContent = "por favor, inserir os 2 números";
    return;
  }
  message.style.color = "#3ae227";
  message.textContent = higherNumber(firstNumber, secondNumber);
});
