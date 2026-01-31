document.getElementById("registerBtn").addEventListener("click", function() {
    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");

    if (user === "" || pass === "" || confirmPass === "") {
        message.textContent = "Omple tots els camps";
        message.className = "error";
        return;
    }

    if (pass !== confirmPass) {
        message.textContent = "Les contrasenyes no coincideixen";
        message.className = "error";
        return;
    }

    var users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[user]) {
        message.textContent = "Aquest usuari ja existeix";
        message.className = "error";
        return;
    }

    users[user] = pass;
    localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "Registrat correctament! Redirigint a login...";
    message.className = "success";

    setTimeout(function () {
        window.location.href = "../login/login.html";
    }, 1500);
});