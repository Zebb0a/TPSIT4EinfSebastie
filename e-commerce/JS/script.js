var login = document.getElementById("login");
if (login) {
  login.onsubmit = function(e) {
    e.preventDefault();
    var utente = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (utente == localStorage.getItem("username") && password == localStorage.getItem("password")) {
      location.href = "load.html";
    } else {
      alert("Dati errati! Riprova.");
    }
  };
}

var registro = document.getElementById("registerForm");
if (registro) {
  registro.onsubmit = function(e) {
    e.preventDefault();
    var nuovo = document.getElementById("regUsername").value;
    var segreta = document.getElementById("regPassword").value;

    localStorage.setItem("username", nuovo);
    localStorage.setItem("password", segreta);

    alert("Registrazione completata con successo!");
  };
}
