<?php
// Fetch comments from the database and display them
$dsn = "mysql:host=localhost;dbname=your_database";
$username = "your_username";
$password = "your_password";

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare SQL statement
    $stmt = $pdo->prepare("SELECT name, comment FROM comments ORDER BY id DESC");

    // Execute the query
    $stmt->execute();

    // Fetch all comments
    $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Display comments
    foreach ($comments as $comment) {
        echo "<p><strong>" . $comment['name'] . ":</strong> " . $comment['comment'] . "</p>";
    }

    // Close connection
    $pdo = null;
} catch(PDOException $e) {
    // Handle error
    echo "Error: " . $e->getMessage();
}
?>
