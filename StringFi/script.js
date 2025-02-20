const users = [];

let it = 1;
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
    localStorage.setItem("p" + it, JSON.stringify(users[users.length - 1]));
    localStorage.setItem("i", it);
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("citta").value = "";
    document.getElementById("email").value = "";
    it++;
}

function ricarica() {
    it = parseInt(localStorage.getItem("i"));
    for (let i = 0; i < it; i++) {
        const p = JSON.parse(localStorage.getItem("p" + (i + 1)));
        const tRiga = document.createElement("tr");
        const intestazione = document.createElement("th");
        intestazione.innerHTML = i + 1;
        tRiga.appendChild(intestazione);
        for (let y = 0; y < p.length; y++) {
            const tc = document.createElement("td");
            tc.innerHTML = p[y];
            tRiga.appendChild(tc);
        }
        document.getElementById("tabella").appendChild(tRiga);
    }
}

function resetTabella() {
    document.getElementById('tabella').innerHTML = '';
    localStorage.clear();
}
