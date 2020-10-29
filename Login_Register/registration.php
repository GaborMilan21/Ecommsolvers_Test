<?php

    session_start();
    header('location:login.php');


    $con = mysqli_connect('localhost','root','12345');

    mysqli_select_db($con, 'userregistration');

    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];

    $s = " select * from usertable where email = '$email'";

    $result = mysqli_query($con, $s);

    $num = mysqli_num_rows($result);

    if($num == 1){
        echo "Foglalt e-mail cím";
    }else{
        $reg = " insert into usertable(email, password, fname, lname) values ('$email' , '$pass' , '$fname' , '$lname')";
        mysqli_query($con, $reg);
        echo "Sikeres regisztráció";
    }

?>