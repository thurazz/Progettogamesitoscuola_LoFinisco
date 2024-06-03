<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style1.css">
    <title>User Login</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    <div id="containertop">
        <div id="panello">
            <?php
            session_start();
            if (isset($_SESSION['error'])) {
                echo '<div class="errore">' . htmlspecialchars($_SESSION['error']) . '</div>';
                unset($_SESSION['error']); //clear messaggio d'errore
            }
            ?>
            <div class="errore"></div>
            <div class="container">
            <form class="form" action="/Lato_server/login.php" method="post">
            <p class="title">Login</p>
            <input name="username" placeholder="Username" class="username input" type="text">
            <input  name="password" placeholder="Password" class="password input" type="password">
            <button class="btn" type="submit">Login</button>
            <a href="registration.php"><p>Se non sei registrato clicca qui</p></a>
            </form>
            </div>
    </div>
    <script>
        // jQuery script 
        $(document).ready(function() {
            <?php
            // Check HTTP response code
            if (http_response_code() === 401) {
                echo "$('.errore').text('username o password errati si prega di riprovare');";
            }
            ?>
        });
    </script>
</body>
</html>
