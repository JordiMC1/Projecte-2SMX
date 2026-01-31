document.getElementById("loginBtn").addEventListener("click", function() {
    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (user === "" || pass === "") {
        message.textContent = "Omple tots els camps";
        message.className = "error";
        return;
    }

    var users = JSON.parse(localStorage.getItem("users") || "{}");

    if (!users[user] || users[user] !== pass) {
        message.textContent = "Usuari o contrasenya incorrectes";
        message.className = "error";
        return;
    }

    localStorage.setItem("loggedUser", user);

    message.textContent = "Sessió iniciada correctament!";
    message.className = "success";

    setTimeout(function () {
        window.location.href = "../index.html";
    }, 1500);
});
