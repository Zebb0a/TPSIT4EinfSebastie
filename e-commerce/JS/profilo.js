 fetch("prodotti.json")
    .then(function (res) {
    return res.json();
    })
    .then(function (dati) {
    var tbody = document.getElementById("tabella-anagrafica").getElementsByTagName("tbody")[0];

    if (dati != null && dati.anagrafica != null) {
        var a = dati.anagrafica;

        var riga = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.textContent = a.nome;
        riga.appendChild(td1);

        var td2 = document.createElement("td");
        td2.textContent = a.cognome;
        riga.appendChild(td2);

        var td3 = document.createElement("td");
        td3.textContent = a.indirizzo;
        riga.appendChild(td3);

        var td4 = document.createElement("td");
        td4.textContent = a.citta;
        riga.appendChild(td4);

        var td5 = document.createElement("td");
        td5.textContent = a.user;
        riga.appendChild(td5);

        var td6 = document.createElement("td");
        td6.textContent = a.psw;
        riga.appendChild(td6);

        tbody.appendChild(riga);
    } else {
        var rigaVuota = document.createElement("tr");
        var cella = document.createElement("td");
        cella.setAttribute("colspan", "6");
        cella.className = "text-center text-danger";
        cella.textContent = "Nessun dato disponibile";
        rigaVuota.appendChild(cella);
        tbody.appendChild(rigaVuota);
    }
    });

