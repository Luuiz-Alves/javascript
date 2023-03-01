function confirmar() {
    var txtn = document.querySelector("input#txtnac");
    var res = document.querySelector("div#res");
    var nac = txtn.value;
    res.innerHTML = `<p>Seu país de origem é <strong>${nac}</strong></p>`;
    if (nac == "Brasil" || nac == "brasil") {
      res.innerHTML += `<p>Você é Brasileiro`;
    } else {
      res.innerHTML += `<p>Você é Estrangeiro`;
    }
  }