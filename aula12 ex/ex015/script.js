function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("É necessário preencher o ano de nascimento!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";

    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "img/bebe_menino.png");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "img/jovem_homem.png");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "img/adulto_homem.png");
      } else {
        //IDOSO
        img.setAttribute("src", "img/senhor_homem.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "img/bebe_menina.png");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "img/jovem_mulher.png");
      } else if (idade < 50) {
        //ADULTA
        img.setAttribute("src", "img/adulta_mulher.png");
      } else {
        //IDOSO
        img.setAttribute("src", "img/senhora_mulher.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `<p>Você é um/uma ${genero} com ${idade} anos.</p>`;
    res.appendChild(img);
  }
}
