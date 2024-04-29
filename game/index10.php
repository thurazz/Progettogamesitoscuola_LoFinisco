<!DOCTYPE html>
<html>
<head>
<title>Being Myself</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<audio  id="myaudio" loop autoplay preload="auto">
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
            <div class="text-paragaphs">
            <p><br><br>
            "Being Myself" è una visual novel che ti trasporta nel mondo interiore di Lily,
            una giovane donna alle prese con i suoi demoni interiori. Mentre si avventura nel 
            parco al tramonto,le sue lotte personali prendono vita sotto forma di entità mostruose,
            manifestazioni dei suoi tormenti mentali e della schizofrenia che la affligge.
            In questo gioco breve ma coinvolgente, prendi decisioni cruciali che plasmano il destino di Lily:

            Sii la voce che ha il potere di portarla fuori dal buio.
            Prova un crescente senso di paranoia mentre cammini nel parco oppure cerca di soffocare le voci cantando una melodia rassicurante.
            Queste scelte conducono Lily attraverso un viaggio emotivo intenso:
            Affronta le tue paure e insicurezze mentre le voci discutono dei tuoi pensieri più intimi.
            Affronta le tue preuccpazioni che si celano dietro ai mostri.
            Lily deve navigare tra ostacoli fisici nel parco e le sue sfide interiori, decidendo se confrontare i mostri che si nascondono o cercare rifugio nell'oscurità.
            Con una durata di gioco di 10-15 minuti, "Echi dell'Abisso" presenta uno stile grafico unico e soluzioni audio autentiche, 
            offrendo una esperienza che mescola abilmente l'arte delle parole con la forma interattiva del gioco.<br><br><br>
            </p></div>

            <section id="commenti">
                <h2>Commenti</h2>
                <a href="login.php"><p>Accedi con nome utente e password per commentare.</p></a>
                <br><br>
            </section>

            <section id="commentare">
            <form method="post" action="save_comment.php">
            <textarea id="commentz" name="comment" rows="4" cols="50" placeholder="Scrivi il tuo commento qui..." required></textarea><br>
            <button id="submit" type="submit">Submit Comment</button>

            </form>
                </section> 

            <section id="commentibrutti">
                <?php
                session_start();
                $dsn = "mysql:host=localhost;dbname=comments";
                $username_db = "root";
                $password_db = "890980";

                try {
                    $pdo = new PDO($dsn, $username_db, $password_db);
                    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                    // Query per selezionare tutti i commenti
                    $stmt = $pdo->query("SELECT * FROM comments ORDER BY created_at DESC");
                    $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);
                } catch(PDOException $e){
                die("Error: " . $e->getMessage());
                }
                ?>
                <?php if (!empty($comments)) : ?>
                <?php foreach ($comments as $comment) : ?>
                <div id="comment">
                    <div class ="nome"> <strong><?= htmlspecialchars($comment['username']) ?></strong> </div>
                    <p><?= htmlspecialchars($comment['comment']) ?></p>
                    <small><?= $comment['created_at'] ?></small>
                </div>
            <?php endforeach; ?>
            <?php else : ?>
                <p>Ancora nessun commento.</p>
            <?php endif; ?>
            </section>

        </section>
    </section>
</section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="script.js"></script>
</body>
</html>
