<?php
  $conn = mysqli_connect("localhost", "root", "", "themensroom");
  if($conn){
    $name = mysqli_real_escape_string($conn, $_POST['Name']);
    $email = mysqli_real_escape_string($conn, $_POST['Email']);
    $subject = mysqli_real_escape_string($conn, $_POST['Subject']);
    $message = mysqli_real_escape_string($conn, $_POST['Message']);
    $send = mysqli_query($conn, "INSERT INTO email (name, email, subject, message)
    VALUES ('$name', '$email', '$subject', '$message')");
    if($send){
      echo("Your email has been sent!");
      header("location: /");
    } else {
      die(mysqli_error($conn));
    }
  } else {
    die(mysqli_connect_error());
  }
?>
