<?php
// Process comment form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get comment data from POST request
    $name = htmlspecialchars($_POST["name"]);
    $comment = htmlspecialchars($_POST["comment"]);
    
    // rimpiazzare con il mio database su server VM o mattia
    $dsn = "mysql:host=localhost;dbname=your_database";
    $username = "your_username";
    $password = "your_password";

    try {
        $pdo = new PDO($dsn, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare SQL statement
        $stmt = $pdo->prepare("INSERT INTO comments (name, comment) VALUES (:name, :comment)");

        // Bind parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':comment', $comment);

        // Execute the query
        $stmt->execute();

        // Close connection
        $pdo = null;
        
        // Send success response lato server e client
        http_response_code(200);
        echo "Comment submitted successfully!";
    } catch(PDOException $e) {
        // Send error response lato client 
        http_response_code(500);
        echo "Error: " . $e->getMessage();
    }
}
?>
