<?php

    $visitor_email = $_POST['email'];
    $name=$_POST['name'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    $email_from = 'portfolio_contact_michael_song@sfu.ca';
    $email_subject = "New Portfolio Contact: $subject";
    $email_body = "Name: $name.\n".
                    "Email: $visitor_email.\n".
                        "Message: $message.\n";
    
    $to = "zsa51@sfu.ca";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html")

?>