<?php
session_start();

// Verifica se l'utente è loggato
if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit("Unauthorized");
}

// Connessione al database
$dsn = "mysql:host=localhost;dbname=comments";
$username_db = "root";
$password_db = "890980";

try {
    $pdo = new PDO($dsn, $username_db, $password_db);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prendi il nome utente dell'utente loggato
    $username = $_SESSION['username'];

    // Prendi il commento inviato dal form
    if (isset($_POST["comment"])) {
        $comment = $_POST["comment"];

        // Prepara la query SQL per inserire il commento nel database
        $stmt = $pdo->prepare("INSERT INTO comments (username, comment) VALUES (:username, :comment)");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':comment', $comment);

        // Esegui la query
        $stmt->execute();

        // Redirect dopo aver salvato il commento
        header('Location: index10.php');
        exit();

    } else {
        http_response_code(400);
        exit("Bad Request");
    }
} catch(PDOException $e) {
    http_response_code(500);
    exit("Internal Server Error");
}