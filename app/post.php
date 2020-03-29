<?php

$name = $_POST['name'];
$email = $_POST['email'];
$topic = $_POST['topic'];
$message = $_POST['message'];

$automat = "request@houseofangular.org";

$headers = "From: $automat\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$content = "Name:<br>";
$content .= "<strong>$name</strong><br><br>";
$content .= "Topic:<br>";
$content .= "<strong>$topic</strong><br><br>";
$content .= "Email address:<br>";
$content .= "<strong>$email</strong><br><br>";
$content .= "Message content:<br>";
$content .= "<strong style='white-space: pre-line;'>$message</strong><br><br>";

mail("_PODAJ_MAILA_", "House of Angular: $topic request", $content, $headers);

?>
