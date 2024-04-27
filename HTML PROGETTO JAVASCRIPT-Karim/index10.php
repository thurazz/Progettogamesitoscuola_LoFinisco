<!DOCTYPE html>
<html>
<head>
<title>Being Myself</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<audio loop autoplay preload="auto">
    <source src="musica/flaterness.mp3" type="audio/mp3">

    Il browser non supporta la riproduzione di audio;
</audio>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jacquard+24&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jacquard+24&family=Jersey+10+Charted&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jersey+25&display=swap" rel="stylesheet">
</head>
<body>
<section id="black-box">
</section>
    <section id="text-banner">
        <section id="main-hub">
            <h1 class="titolo">Being Myself</h1>
            <div id="image-box"></div>
                <div id="text-box">
                    <h1 id="action-text">MIO PADRE</h1>
                </div>
            <div id="options">
                <div id="option-1"><p class="testo">PEFFORZA</p></div>
                <div id="option-2"><p class="testo">PEFFORZA</p></div>
            </div>
            <div class="text-paragaphs">  <p>‎ </p> <p>‎ </p><p>This is not a game</p></div>

            <section id="commenti">
                <h2>Commenti</h2>
                <a href="registration.html"><p>registrazione</p></a>
                <a href="login.html"><p>login</p></a>
            </section>
            <?php
            // Display comments only if login was successful (HTTP response code 200)
            if (http_response_code() === 200) {
                echo '<section id="nigga">';
                echo '<h2>Commenti</h2>';
                echo '<!-- Add your comment display logic here -->';
                echo '</section>';
            }
            ?>
                    
        </section>
    </section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="script.js"></script>
</body>

</html>
