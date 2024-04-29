<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style1.css">
    <title>User Login</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
            window.onload = function() {
            if (sessionStorage.getItem('error')) {
                document.querySelector('.errore').textContent = sessionStorage.getItem('error');
                sessionStorage.removeItem('error');
            }
        };
    </script>
</head>
<body>
    <div id="containertop">
    <div id="panello">
    <div class="errore"></div>
    <h2>User Login</h2>
    <form action="/Lato_server/login.php" method="post"> 

        <div class="username"> <label for="username">Username:</label><br> </div>

        <div class="username"> <input type="text" id="username" name="username" required><br> </div>

        <div class="password"> <label for="password">Password:</label><br> </div>

        <div class="password"> <input type="password" id="password" name="password" required><br><br> </div>

        <div class="button"> <button type="submit">Login</button> </div>
    </form>
        </div>
        <a href="registration.php"><p>Se non sei registrato clicca qui</p> </a>
    </div>
</body>
</html>
