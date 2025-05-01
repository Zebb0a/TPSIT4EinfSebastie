var idSelezionato = localStorage.getItem("prodottoSelezionato");
var dati = JSON.parse(localStorage.getItem("prodotti"));
var prodotto;

for (var i = 0; i < dati.length; i++) {
  if (dati[i].id == idSelezionato) {
    prodotto = dati[i];
    break;
  }
}

if (prodotto) {
  var contenitore = document.getElementById("dettaglio-prodotto");
  contenitore.innerHTML = 
    '<div class="col-md-6">' +
      '<div id="carouselProdotto" class="carousel slide" data-bs-ride="carousel">' +
        '<div class="carousel-inner">' +
          '<div class="carousel-item active">' +
            '<img src="' + prodotto.img + '" class="d-block w-100 rounded" alt="' + prodotto.tipo + '">' +
          '</div>' +
          '<div class="carousel-item">' +
            '<img src="' + prodotto.img2 + '" class="d-block w-100 rounded" alt="' + prodotto.tipo + '">' +
          '</div>' +
          '<div class="carousel-item">' +
            '<img src="' + prodotto.img3 + '" class="d-block w-100 rounded" alt="' + prodotto.tipo + '">' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="col-md-6">' +
      '<div class="card">' +
        '<div class="card-body text-center">' +
          '<h5 class="card-title">' + prodotto.marca + ' - ' + prodotto.tipo + '</h5>' +
          '<p class="descrizione-prodotto">' + prodotto.descrizione + '</p>' +
          '<p class="prezzo">€ ' + prodotto.prezzo + '</p>' +
          '<button onclick="aggiungiAlCarrello(\'' + prodotto.id + '\')" class="btn btn-outline-success">Aggiungi al carrello</button>' +
        '</div>' +
      '</div>' +
    '</div>';
    
  mostraValutazioniSalvate();
}

function aggiungiAlCarrello(id) {
  var prodotto;
  for (var i = 0; i < dati.length; i++) {
    if (dati[i].id == id) {
      prodotto = dati[i];
      break;
    }
  }

  var carrello = JSON.parse(localStorage.getItem("carrello"));
  if (!carrello) {
    carrello = [];
  }

  carrello.push(prodotto);
  localStorage.setItem("carrello", JSON.stringify(carrello));
  alert("Prodotto aggiunto al carrello!");
}

var votoSelezionato = 0;
var stelle = document.getElementById("stelle-valutazione").getElementsByTagName("span");

for (var i = 0; i < stelle.length; i++) {
  stelle[i].onclick = function() {
    votoSelezionato = parseInt(this.getAttribute("data-voto"));
    aggiornaStelle();
  };
}

function aggiornaStelle() {
  for (var i = 0; i < stelle.length; i++) {
    var valore = parseInt(stelle[i].getAttribute("data-voto"));
    if (valore <= votoSelezionato) {
      stelle[i].className = "attiva";
    } else {
      stelle[i].className = "";
    }
  }
}

function salvaValutazione() {
  var commento = document.getElementById("commento").value.trim();
  if (!votoSelezionato || commento == "") {
    alert("Compila tutti i campi!");
    return;
  }

  var valutazioni = JSON.parse(localStorage.getItem("valutazioni"));
  if (!valutazioni) {
    valutazioni = {};
  }

  if (!valutazioni[prodotto.id]) {
    valutazioni[prodotto.id] = [];
  }

  valutazioni[prodotto.id].push({ voto: votoSelezionato, testo: commento });
  localStorage.setItem("valutazioni", JSON.stringify(valutazioni));
  mostraValutazioniSalvate();

  votoSelezionato = 0;
  document.getElementById("commento").value = "";
  aggiornaStelle();
}

function mostraValutazioniSalvate() {
  var valutazioniContainer = document.getElementById("valutazioni-salvate");
  var valutazioni = JSON.parse(localStorage.getItem("valutazioni")) || {};
  var lista = valutazioni[prodotto.id] || [];

  valutazioniContainer.innerHTML = "<h5>Recensioni:</h5>";

  for (var i = 0; i < lista.length; i++) {
    var val = lista[i];
    var stellePiene = "★".repeat(val.voto);
    var stelleVuote = "☆".repeat(5 - val.voto);
    valutazioniContainer.innerHTML += 
      '<div class="border rounded p-2 mb-2">' +
        '<strong>' + stellePiene + stelleVuote + '</strong><br>' +
        '<span>' + val.testo + '</span>' +
      '</div>';
  }
}
