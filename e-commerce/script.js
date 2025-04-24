document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username == storedUsername && password == storedPassword) {
        window.location.href = "home.html"; 
    } else {
        alert("Dati errati! Riprova.");
    }
});

document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registrazione completata con successo!");
});
