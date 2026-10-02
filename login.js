// ==========================================
// UniManage AI - Login
// ==========================================

const loginForm = document.getElementById("loginForm");

const passwordInput = document.getElementById("password");

const showPassword = document.getElementById("showPassword");


// Show / Hide Password
showPassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        showPassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";
        showPassword.textContent = "👁";

    }

});


// Login
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim().toLowerCase();

    const password =
        document.getElementById("password").value.trim();

    const message =
        document.getElementById("loginMessage");


    // Demo Login
    if (
        (username === "admin" || username === "keerthana")
        &&
        password === "1234"
    ) {

        message.textContent =
            "✓ Login successful!";

        message.className =
            "login-message success";


        // Save Login Status
        localStorage.setItem(
            "unimanageLoggedIn",
            "true"
        );


        // Go to Dashboard
        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 700);


    } else {

        message.textContent =
            "✕ Invalid username or password.";

        message.className =
            "login-message error";

    }

});