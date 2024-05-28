<?php
//godo funziona
if (isset($_POST["regUsername"]) && isset($_POST["regPassword"])) {
    $username = $_POST["regUsername"];
    $password = $_POST["regPassword"];

    // Hash password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Validate username and password
    $dsn = "mysql:host=localhost;dbname=auth";
    $username_db = "root";
    $password_db = "890980";

    try {
        $pdo = new PDO($dsn, $username_db, $password_db);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare SQL statement
        $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");

        // Bind parameters
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $hashed_password);

        // query
        $stmt->execute();

        // Close connection
        $pdo = null;

        // Registration successful
        http_response_code(200);
        header('Location: http://moonhubserver.ddns.net/login.php');
        exit();
    } catch(PDOException $e) {
        // Handle error
        http_response_code(500);
        echo "Error: " . $e->getMessage();
    }
} else {
    // Username or password not provided
    http_response_code(400);
    echo "Username and password sono richiesti";
}
?>
