function somar() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  const soma = Number(num1) + Number(num2);

  document.getElementById("resultado").innerText = 
    "Resultado: " + soma;
}
