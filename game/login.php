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
                unset($_SESSION['error']); // Clear the error message
            }
            ?>
            <div class="errore"></div>
            <h2>User Login</h2>
            <form action="/Lato_server/login.php" method="post"> 
                <div class="username"> <label for="username">Username:</label><br> </div>
                <div class="username"> <input type="text" id="username" name="username" required><br> </div>
                <div class="password"> <label for="password">Password:</label><br> </div>
                <div class="password"> <input type="password" id="password" name="password" required><br><br> </div>
                <div class="button"> <button type="submit">Login</button> </div>
            </form>
            <a href="registration.php"><p>Se non sei registrato clicca qui</p></a>
        </div>
    </div>
    <script>
        // jQuery script to display error message in 'errore' div if HTTP response code is 401
        $(document).ready(function() {
            <?php
            // Check HTTP response code and display error message if 401 Unauthorized
            if (http_response_code() === 401) {
                echo "$('.errore').text('Unauthorized: Invalid username or password.');";
            }
            ?>
        });
    </script>
</body>
</html>
