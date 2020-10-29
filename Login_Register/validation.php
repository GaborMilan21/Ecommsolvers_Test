<?php

    session_start();
    header('location:login.php');


    $con = mysqli_connect('localhost','root','12345');

    mysqli_select_db($con, 'userregistration');

    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];

    $s = " select * from usertable where email = '$email' && password = '$pass'";

    $result = mysqli_query($con, $s);

    $num = mysqli_num_rows($result);

    if($num == 1){
        $_SESSION['email'] = $email;
        header('location:home.php');
    }else{
        header('location:login.php');
    }

?>