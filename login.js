document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy validation (replace this with actual validation logic)
    const validUsername = 'shraddha';
    const validPassword = 'shraddha';

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        // Show error message
        document.getElementById('error-message').style.display = 'block';
    }
});
