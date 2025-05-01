var carrello = JSON.parse(localStorage.getItem("carrello")) || [];
var container = document.getElementById("carrello-container");
var pagaBtn = document.getElementById("paga-btn");

if (carrello.length == 0) {
  container.innerHTML = "<p class='text-center fs-5'>Il carrello è vuoto.</p>";
} else {
  pagaBtn.className = pagaBtn.className.replace("d-none");

  for (var i = 0; i < carrello.length; i++) {
    var p = carrello[i];

    var item = document.createElement("div");
    item.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center flex-column flex-md-row";

    item.innerHTML =
      '<div class="d-flex align-items-center mb-3 mb-md-0">' +
        '<img src="' + p.img + '" alt="' + p.tipo + '" style="width: 80px;" class="me-3 rounded shadow-sm">' +
        '<div>' +
          '<h5 class="mb-1">' + p.marca + ' - ' + p.tipo + '</h5>' +
          '<p class="mb-1 descrizione-prodotto">' + p.descrizione + '</p>' +
          '<p class="fw-bold text-primary">€ ' + parseFloat(p.prezzo).toFixed(2) + '</p>' +
        '</div>' +
      '</div>' +
      '<button class="btn btn-outline-danger btn-sm rimuovi-btn">Rimuovi</button>';

    container.appendChild(item);

    var bottone = item.getElementsByClassName("rimuovi-btn")[0];
    bottone.onclick = creaFunzioneRimozione(p);
  }
}

function creaFunzioneRimozione(prodotto) {
  return function() {
    var nuovoCarrello = [];
    for (var i = 0; i < carrello.length; i++) {
      if (carrello[i] != prodotto) {
        nuovoCarrello.push(carrello[i]);
      }
    }
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
    location.reload();
  };
}
