var tuttiProdotti = [];

    function mostraProdotti(tipoFiltro) {
      if (!tipoFiltro) tipoFiltro = "Tutti";
      var riga = document.getElementById("prodotti-row");
      riga.innerHTML = "";

      var prodottiDaMostrare = [];
      for (var i = 0; i < tuttiProdotti.length; i++) {
        var prodotto = tuttiProdotti[i];
        if (tipoFiltro == "Tutti" || prodotto.tipo == tipoFiltro) {
          prodottiDaMostrare.push(prodotto);
        }
      }

      for (var i = 0; i < prodottiDaMostrare.length; i++) {
        var p = prodottiDaMostrare[i];
        var colonna = document.createElement("div");
        colonna.className = "col-md-4 mb-4";
        colonna.innerHTML =
          '<div class="card h-100">' +
            '<img src="' + p.img + '" class="img-fluid rounded-top" alt="' + p.tipo + '">' +
            '<div class="card-body text-center">' +
              '<h5 class="card-title">' + p.marca + ' - ' + p.tipo + '</h5>' +
              '<p class="descrizione-prodotto">' + p.descrizione + '</p>' +
              '<p class="prezzo">€ ' + p.prezzo + '</p>' +
              '<button class="btn btn-outline-warning" onclick="vaiADettaglio(\'' + p.id + '\')">Acquista</button>' +
            '</div>' +
          '</div>';
        riga.appendChild(colonna);
      }

      var cards = document.querySelectorAll(".card");
      cards.forEach(function(card) {
        card.onmousemove = function(e) {
          var rect = card.getBoundingClientRect();
          var mouseX = e.clientX - rect.left;
          var mouseY = e.clientY - rect.top;
          var centerX = rect.width / 2;
          var centerY = rect.height / 2;
          var diffX = mouseX - centerX;
          var diffY = centerY - mouseY;
          var x = diffX / 15;
          var y = diffY / 15;
          card.style.transform = "rotateX(" + y + "deg) rotateY(" + x + "deg) scale(1.03)";
        };

        card.onmouseleave = function() {
          card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        };
      });
    }

    function vaiADettaglio(idProdotto) {
      localStorage.setItem("prodottoSelezionato", idProdotto);
      window.location.href = "dettagliProdotto.html";
    }

    var prodottiSalvati = localStorage.getItem("prodotti");
    if (prodottiSalvati) {
      tuttiProdotti = JSON.parse(prodottiSalvati);
      mostraProdotti("Tutti");
    }

    var filtro = document.getElementById("filtro-genere");
    filtro.onclick = function(event) {
      var target = event.target;
      if (target.tagName == "A") {
        var tipo = target.getAttribute("data-tipo");
        mostraProdotti(tipo);
      }
    };
