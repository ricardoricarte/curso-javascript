var agora = new Date();
var hora = agora.getHours() + " hora(s)";
var dia = "Bom dia!";
var tarde = "Boa tarde!";
var noite = "Boa noite!";
if (hora < 12) {
  console.log(`${dia} Agora são exatamente ${hora} da manhã.`);
} else if (hora <= 18) {
  console.log(`${tarde} Agora são exatamente ${hora} da tarde.`);
} else {
  console.log(`${noite} Agora são exatamente ${hora} da noite.`);
}
