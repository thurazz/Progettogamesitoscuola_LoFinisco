<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style1.css">
    <title>User Registration</title>
    <script>
        function validateForm() {
            const username = document.querySelector('.username').value;
            const password = document.querySelectorAll('.password')[0].value;
            const confirmPassword = document.querySelectorAll('.password')[1].value;
            const errorMessage = document.getElementById('error-message');

            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/;

            if (!passwordRegex.test(password)) {
                errorMessage.textContent = 'La password deve contenere almeno un numero, un carattere speciale e deve essere più lunga di 6 caratteri.';
                return false;
            }

            if (password !== confirmPassword) {
                errorMessage.textContent = 'Le password immesse non corrispondono.';
                return false;
            }

            return true;
        }
    </script>
</head>
<body>
    <div id="containertop">
    <div class="container">
        <form action="/Lato_server/register.php" method="post" onsubmit="return validateForm()">
            <p class="title">Registrazione</p>
            <input placeholder="Username" class="username input" type="text" required>
            <input placeholder="Password" class="password input" type="password" required>
            <input placeholder="Conferma Password" class="password input" type="password" required>
            <p id="error-message" style="color: red;"></p>
            <button class="btn" type="submit">Registrati</button>
        </form>
    </div>
</body>
</html>
