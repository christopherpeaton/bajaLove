<?php
/**
 * Created by PhpStorm.
 * User: christophereaton
 * Date: 7/14/16
 * Time: 9:29 PM
 */

$name = $_POST['name'];
$mail = $_POST['mail'];
$website = $_POST['website'];
$comment = $_POST['comment'];
$phone = $_POST['phone'];
$birthday = $_POST['birthday'];

$sendEmail = true;
$body = $comment . "\r\n" . $mail . "\r\n" . $website . "\r\n" . $name . "\r\n";

if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    $sendEmail = false;
}

if (!$comment) {
    $sendEmail = false;
}

ini_set("SMTP", "relay-hosting.secureserver.net");
ini_set("smtp_port", "25");

if ($sendEmail && mail('chapferrin@gmail.com', 'mail from baja love outreach', $body)) {
    echo header('Location: mailSent.html');
} else {
    echo header('Location: mailNotSent.html');
}

