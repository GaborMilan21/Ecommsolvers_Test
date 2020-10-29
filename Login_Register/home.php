<?php

    session_start();
    if(!isset($_SESSION['email'])){
        header('location:login.php');
    }

?>

<html>

<head>
    <meta charset="utf-8">
    <title>Bejelentkezés</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>

    <div class="header container-fluid">
        <div class="row">
            <div class="col-12 col-lg-2 logo">
                <img src="logo.png" alt="">
            </div>
            <div class="col-12 col-lg-3 title_text">
                Tech-Corp Kft.
            </div>
        </div>
    </div>

    <a class="lgoutBtn" href="logout.php">Kijelentkezés</a>

    <div class="container home_text">
        <h1>Sikeresen beléptél <?php echo $_SESSION['email'];?> </h1>
    </div>

</body>
</html>