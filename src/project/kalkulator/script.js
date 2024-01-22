const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const result = document.getElementById("result");

function plus() {
  result.innerHTML = Number(input1.value) + Number(input2.value);
}