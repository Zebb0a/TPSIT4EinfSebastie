var carrello = JSON.parse(localStorage.getItem("carrello")) || [];
    var contenitore = document.getElementById("scontrino-container");
    var totale = 0;

    if (carrello.length == 0) {
      contenitore.innerHTML = "<p>Il carrello è vuoto.</p>";
    } else {
      var tabella = "<table><thead><tr><th>Prodotto</th><th>Prezzo</th></tr></thead><tbody>";
      for (var i = 0; i < carrello.length; i++) {
        var prodotto = carrello[i];
        var prezzo = parseFloat(prodotto.prezzo);
        totale += prezzo;

        tabella += "<tr><td>" + prodotto.marca + " - " + prodotto.tipo + "</td><td>€ " + prezzo.toFixed(2) + "</td></tr>";
      }
      tabella += "</tbody></table>";
      tabella += "<div class='totale'>Totale: € " + totale.toFixed(2) + "</div>";

      contenitore.innerHTML = tabella;
    }