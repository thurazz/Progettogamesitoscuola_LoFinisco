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
            header('Location: http://moonhubserver.ddns.net/index10.php');
            exit();
        } else {
            // Invalid username or password
            session_start();
            $_SESSION['error'] = "Database error: " . $e->getMessage();
            http_response_code(401);
            header('Location: http://moonhubserver.ddns.net/login.php');
            exit();
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
    header('Location: http://moonhubserver.ddns.net/login.php');
    exit();
}
?>
