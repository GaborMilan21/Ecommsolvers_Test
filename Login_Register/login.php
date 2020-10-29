<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Tech-Corp Kft.</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel = "icon" href ="assets/logo.png" type = "image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    
</head>

<body>

    <div class="header container-fluid">
        <div class="row">
            <div class="col-12 col-lg-2 logo">
                <img src="assets/logo.png" alt="logo">
            </div>
            <div class="col-12 col-lg-3 title_text">
                Tech-Corp Kft.
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row content">
            <div class="col-12 col-lg-5 login">
                <label class="title text-center">Bejelentkezés</label>
                <form class="form" action="validation.php" method="post" name="form">
                    <div class="form-group">
                        <label>E-mail cím</label>
                        <input id="email" class="form-control" type="email" name="email" required>
                    </div>
                    <div id="email_error" style="display:none">Rövid az e-mail cím</div>
                    <div class="form-group">
                        <label>Jelszó</label>
                        <input id="password" class="form-control" type="password" name="pass" required>
                    </div>
                    <div id="pass_error" style="display:none">Nincs megadva jelszó</div>
                    <button class="Btn" type="submit" onclick="validated()">Bejelentkezés</button>

                </form>
            </div>

            <div class="col-12 col-lg-7 register">
                <label class="title">Regisztráció</label>
                <form class="form" action="registration.php" method="post" name="form2">
                    <div class="form-group">
                        <label>E-mail cím</label>
                        <input class="form-control" type="email" name="email" required>
                    </div>
                    <div id="email2_error" style="display:none">Rövid az e-mail cím</div>
                    <div class="form-group">
                        <label>Jelszó</label>
                        <input class="form-control" type="password" name="pass" required>
                    </div>
                    <div id="pass2_error" style="display:none">Rövid a jelszó</div>
                    <div class="form-group">
                        <label>Vezetéknév</label>
                        <input class="form-control" type="text" name="fname" required>
                    </div>
                    <div id="short1_error" style="display:none">Üres a mező</div>
                    <div class="form-group">
                        <label>Keresztnév</label>
                        <input class="form-control" type="text" name="lname" required>
                    </div>
                    <div id="short2_error" style="display:none">Üres a mező</div>
                    <button class="Btn" type="submit" onclick="reg_validated()">Regisztráció</button>

                </form>
            </div>
        </div>
    </div>

    
    <script src="js/valid.js">
    </script>
</body>
</html>