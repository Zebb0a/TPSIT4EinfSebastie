let dati = [];

function aggiungiDati() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let citta = document.getElementById("citta").value;
    let email = document.getElementById("email").value;

    dati.push([nome, cognome, indirizzo, citta, email]);

    aggiornaTabella();

    document.getElementById("datiNelForm").reset();
}

function aggiornaTabella() {
    let tbody = document.getElementById("datiTabella").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; 

 
    dati.forEach((record) => {
        let row = document.createElement("tr");

        record.forEach((cellData) => {
            let cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}