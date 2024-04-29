<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style1.css">
    <title>User Registration</title>
</head>
<body>
    <div id="containertop">
    <h2>Registrazione:</h2>
    <form action="/Lato_server/register.php" method="post">

        <label for="regUsername">Username:</label><br>

        <input type="text" id="regUsername" name="regUsername" required><br>

        <label for="regPassword">Password:</label><br>

        <input type="password" id="regPassword" name="regPassword" required><br><br>

        <label for="regPassword">Ripeti Password:</label><br>

        <input type="password" id="regPassword" name="regPassword" required><br><br>

        <button type="submit">Registrati</button>

    </div>
    </form>
</body>
</html>
