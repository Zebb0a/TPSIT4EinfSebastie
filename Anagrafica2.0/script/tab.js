let it = 1

function ricarica() {
    for (let indice = 0; indice < localStorage.getItem("contatore"); indice++) {
        const utente = localStorage.getItem("utente" + it)
        const riga = document.createElement("tr")
        const intestazioneTabella = document.createElement("th")
        intestazioneTabella.innerHTML = it
        riga.appendChild(intestazioneTabella)
        it++
        const element = utente.split(",")
        for (let indicE = 0; indicE < element.length; indicE++) {
            const cel = document.createElement("td")
            cel.innerHTML = element[indicE]
            riga.appendChild(cel)
        }
        document.getElementById("tabella").appendChild(riga)
    }    
}

function apriScheda(){
    window.open("index.html","_blank");
}

document.getElementById("azzera").addEventListener("click", function() {
    localStorage.clear(); 
    location.reload(); 
});
