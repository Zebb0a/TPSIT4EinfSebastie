function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function() {
        const rows = reader.result.split('\n');
        const table = document.getElementById('csvTable');
        table.innerHTML = '';

        rows.forEach((row, index) => {
            const tr = document.createElement('tr');
            row.split(',').forEach(col => {
                const cell = document.createElement(index === 0 ? 'th' : 'td');
                cell.textContent = col.trim();
                tr.appendChild(cell);
            });
            table.appendChild(tr);
        });
    };

    reader.readAsText(file);
}

document.getElementById('uploadButton').addEventListener('click', () => {
    document.getElementById('csvFileInput').click();
});

document.getElementById('csvFileInput').addEventListener('change', handleFileUpload);







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