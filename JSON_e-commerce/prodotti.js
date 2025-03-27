function caricaProdotti(marca) {
    var vProdotti = document.getElementById('prodotti');
    vProdotti.innerHTML = '';

    fetch('./prod.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var prodotti = data[marca];

        prodotti.forEach(function(prodotto) { 
          var productCard = document.createElement('div');
          productCard.className = 'product-card';
          
          var product = document.createElement('div');
          product.className = 'product';
          
          var image = document.createElement('img');
          image.src = prodotto.immagine;
          image.alt = prodotto.nome;
          
          var name = document.createElement('p');
          name.textContent = prodotto.nome;
          
          var price = document.createElement('p');
          price.innerHTML = `<strong>${prodotto.prezzo}</strong>`;
          
          product.appendChild(image);
          product.appendChild(name);
          product.appendChild(price);
          productCard.appendChild(product);
          vProdotti.appendChild(productCard);
        });
      })
  }

  document.getElementById('shonen-btn').onclick = function() {
    caricaProdotti('shonen');
  };

  document.getElementById('seinen-btn').onclick = function() {
    caricaProdotti('seinen');
  };

  document.getElementById('Isekai-btn').onclick = function() {
    caricaProdotti('Isekai');
  };

  caricaProdotti('shonen');