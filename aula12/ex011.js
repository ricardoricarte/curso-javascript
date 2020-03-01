var idade = 22;
console.log(`Você tem ${idade} anos.`);
if (idade < 18) {
  console.log("Não vota");
} else if (idade < 18 || idade > 65) {
  console.log("O voto é Opcional");
} else {
  console.log("O voto Obrigatório");
}
 