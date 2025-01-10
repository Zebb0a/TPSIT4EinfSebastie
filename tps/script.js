let risultato = [];
let iter = 1;

function leggiFile(input) {
    const file = input.files[0];
  
    const lettore = new FileReader();
  
    lettore.readAsText(file);
  
    lettore.onload = function() {
        risultato = lettore.result;
        creaTabella(); 
    };
  
    lettore.onerror = function() {
        alert(lettore.error);
    };
}

function creaTabella() {
    let csv = risultato.split("\n");
    let categorie = csv[0].split(",");
  
    const tabella = document.getElementById("csvTable");
    tabella.innerHTML = "";
    const rigaIntestazione = document.createElement("tr");

    const thVuoto = document.createElement("th");
    rigaIntestazione.appendChild(thVuoto);
  
    for (let i in categorie) {
        let th = document.createElement("th");
        th.style.cssText = "color: #0bf7ff;";
        th.innerHTML = categorie[i].replaceAll('"', '');
        rigaIntestazione.appendChild(th);
    }
    tabella.appendChild(rigaIntestazione);
  
    for (let i = 1; i < csv.length; i++) {
        const dati = csv[i].replaceAll('"', '');
        let datiEffettivi = csv[i].split(",");
        const rigaTabella = document.createElement("tr");
        const intestazioneRiga = document.createElement("th");
        intestazioneRiga.innerHTML = iter;
        rigaTabella.appendChild(intestazioneRiga);
        iter++;

        for (let j = 0; j < datiEffettivi.length; j++) {
            const cellaTabella = document.createElement("td");
            cellaTabella.innerHTML = datiEffettivi[j] ? datiEffettivi[j].replaceAll('"', '') : ' '; 
            rigaTabella.appendChild(cellaTabella);
        }
        tabella.appendChild(rigaTabella);
    }
}

document.getElementById('uploadButton').addEventListener('click', () => {
    document.getElementById('csvFileInput').click();
});

document.getElementById('csvFileInput').addEventListener('change', (evento) => {
    leggiFile(evento.target);
});










//gestisce le stelle di sfondo.
function createStars() {
    const starfield = document.getElementById('starfield');
    for (let i = 0; i < 200; i++) { 
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 5 + 2; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starfield.appendChild(star);
    }
}

createStars();

document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const rect = star.getBoundingClientRect();
        const starX = rect.left + rect.width / 2;
        const starY = rect.top + rect.height / 2;
        const distance = Math.sqrt((e.clientX - starX) ** 2 + (e.clientY - starY) ** 2);
        const scale = Math.max(1 - distance / 150, 0.5); 
        star.style.transform = `scale(${scale})`;
        const colorChange = Math.max(255 - (distance / 2), 0);
        star.style.backgroundColor = `rgb(${colorChange}, ${colorChange}, 255)`;
    });
});
