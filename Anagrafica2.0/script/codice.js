const utenti = []

let iteratore = 1
let tabella = document.getElementById("tabella")

function aggiungiUtente(nome, cognome, indirizzo, citta, email) {
    const utente = []
    utente.push(nome)
    utente.push(cognome)
    utente.push(indirizzo)
    utente.push(citta)
    utente.push(email)
    utenti.push(utente)
}

function creaUtente() {
    aggiungiUtente(
        document.getElementById("nome").value,
        document.getElementById("cognome").value,
        document.getElementById("indirizzo").value,
        document.getElementById("citta").value,
        document.getElementById("email").value
    )
    localStorage.setItem("utente" + iteratore, utenti[utenti.length - 1])
    const utente = utenti[utenti.length - 1]
    localStorage.setItem("contatore", iteratore)
    document.getElementById("nome").value = ""
    document.getElementById("cognome").value = ""
    document.getElementById("indirizzo").value = ""
    document.getElementById("citta").value = ""
    document.getElementById("email").value = ""
    iteratore++
}

function cancellaCronologia() {
    localStorage.clear()
}

function apriScheda(){
    window.open("tab.html","_blank");
}
