<?php
// check con if per merda
if (isset($_POST["username"]) && isset($_POST["password"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    //rimpiazzare con databese su VM o su server di mattia ricodalo
    $dsn = "mysql:host=localhost;dbname=auth";
    $username_db = "root";
    $password_db = "890980";

    try {
        $pdo = new PDO($dsn, $username_db, $password_db);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare SQL statement
        $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");

        // Bind parameters
        $stmt->bindParam(':username', $username);

        // Execute the query
        $stmt->execute();

        // Fetch user
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verify password
        if ($user && password_verify($password, $user['password'])) {
            // Password is correct: set session variables and redirect
            session_start();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            http_response_code(200);
            echo "negri";
            header('Location: http://moonhubserver.ddns.net');
            exit();
        } else {
            // Invalid username or password
            http_response_code(401);
            session_start();
            $_SESSION['error'] = "Invalid username or password";
            header('Location: http://moonhubserver.ddns.net/login.html');
            exit();
            echo "negri1";
        }

        // Close connection
        $pdo = null;
    } catch(PDOException $e) {
        // Handle error
        session_start();
        http_response_code(500);
        echo "Error: " . $e->getMessage();
    }
} else {
    // Username or password not provided
    http_response_code(400);
    header('Location: http://moonhubserver.ddns.net/login.html');
    exit();
}
?>
