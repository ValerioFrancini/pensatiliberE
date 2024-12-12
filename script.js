document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Handle Login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUser = localStorage.getItem('username');
        const storedPass = localStorage.getItem('password');

        if (username === storedUser && password === storedPass) {
            alert('Login riuscito!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard or main page
        } else {
            alert('Username o password errati.');
        }
    });

    // Handle Registration
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        alert('Registrazione completata! Ora puoi effettuare il login.');
        registerForm.reset();
    });
});
