<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitize and validate name
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    if (!preg_match("/^[A-Za-zÀ-ÿ ,.'-]{2,100}$/u", $name)) {
        exit("Invalid name format.");
    }

    // Sanitize and validate subject
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    if (!preg_match("/^[A-Za-zÀ-ÿ ,.'-]{3,50}$/u", $subject)) {
        exit("Invalid subject format.");
    }

    // Sanitize and validate email
    $email = filter_input(INPUT_POST, 'lname', FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit("Invalid email address.");
    }

    // Sanitize and validate message
    $message = trim(strip_tags($_POST["message"]));
    if (strlen($message) < 10 || strlen($message) > 500) {
        exit("Message must be between 10 and 500 characters.");
    }

    // Prepare email
    $to = "zankokuchu@gmail.com";
    $email_subject = "Contact Form: $subject";
    $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $name <$email>\r\nReply-To: $email\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
} else {
    echo "Invalid request.";
}
?>