fetch("./prodotti.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    localStorage.setItem("prodotti", JSON.stringify(data.prodotti));

    var container = document.getElementById("prodotti-container");

    for (var i = 0; i < data.prodotti.length; i++) {
      var prodotto = data.prodotti[i];

      var col = document.createElement("div");
      col.className = "col";

      var card = document.createElement("div");
      card.className = "card";

      card.innerHTML =
        '<div class="card-inner">' +
          '<img src="' + prodotto.img + '" class="card-img-top" alt="nessuno">' +
          '<div class="card-body">' +
            '<h5 class="card-title">' + prodotto.marca + ' ' + prodotto.tipo + '</h5>' +
            '<p class="descrizione-prodotto">' + prodotto.descrizione + '</p>' +
            '<span class="prezzo mb-2 d-block">€' + parseFloat(prodotto.prezzo).toFixed(2) + '</span>' +
            '<a href="./prodotti.html">' +
              '<button>' +
                '<div class="default-btn">' +
                  '<span>Scopri di più</span>' +
                '</div>' +
                '<div class="hover-btn">' +
                  '<span>Compra adesso</span>' +
                '</div>' +
              '</button>' +
            '</a>' +
          '</div>' +
        '</div>';

      col.appendChild(card);
      container.appendChild(col);
    }

    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
      card.onmousemove = function(e) {
        var rect = card.getBoundingClientRect();
        var mouseX = e.clientX - rect.left;
        var mouseY = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var diffX = mouseX - centerX;
        var diffY = centerY - mouseY;
        var x = diffX / 20;
        var y = diffY / 20;
        card.style.transform = "rotateX(" + y + "deg) rotateY(" + x + "deg) scale(1.03)";
      };

      card.onmouseleave = function() {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      };
    });
  });
