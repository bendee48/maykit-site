<?php

$to = "benbanj@hotmail.com";
$name = $_POST['name'];
date_default_timezone_set("Europe/London");
$message = "$name wrote: "."\n"."\n".$_POST['comment']."\n"."\n".date("h:i, Y-m-d");
$subject = 'Site feedback from: '.$name;
$headers = "From: Maykit Feedback\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

//Validate first
if(empty($name)||empty($message))
{
    echo "Name and message are mandatory on the feedback form! You'll be sent back in 5,4,3...";
    header('Refresh: 5; URL=index.html');
    exit;
}


if(isset($_POST['submit_button'])) {
  mail($to, $subject, $message, $headers);
  header('location: thank-you.html');
} else {
  header('location: index.html');
}

?>
