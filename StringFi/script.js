const users = [];

let iter = 1;
let table = document.getElementById("tabella");

function push(nome, cognome, indirizzo, citta, email) {
    const user = [];
    user.push(nome);
    user.push(cognome);
    user.push(indirizzo);
    user.push(citta);
    user.push(email);

    users.push(user);
}

function utente() {
    push(
        document.getElementById("nome").value,
        document.getElementById("cognome").value,
        document.getElementById("indirizzo").value,
        document.getElementById("citta").value,
        document.getElementById("email").value
    );
    localStorage.setItem("user" + iter, JSON.stringify(users[users.length - 1]));
    localStorage.setItem("counter", iter);
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("citta").value = "";
    document.getElementById("email").value = "";
    iter++;
}

function ricarica() {
    iter = parseInt(localStorage.getItem("counter") || "1");
    for (let i = 0; i < iter; i++) {
        const user = JSON.parse(localStorage.getItem("user" + (i + 1)));
        const tableRow = document.createElement("tr");
        const tableHead = document.createElement("th");
        tableHead.innerHTML = i + 1;
        tableRow.appendChild(tableHead);
        for (let y = 0; y < user.length; y++) {
            const tableD = document.createElement("td");
            tableD.innerHTML = user[y];
            tableRow.appendChild(tableD);
        }
        document.getElementById("tabella").appendChild(tableRow);
    }
}

function resetTabella() {
    document.getElementById('tabella').innerHTML = '';
    localStorage.clear();
}
