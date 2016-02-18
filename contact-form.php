<?php
	/* Declares the name, email, and message fields */
	$field_email = $_POST['inputName'];
	$field_name = $_POST['inputEmail'];
	$field_message = $_POST['inputMessage'];

	/* Assigns the email address receiving the message to $mail_to */
	$mail_to = 'kate.carcia@gmail.com'; 
	/* Assigns and displays the email subject to $subject */
	$subject = 'Message from a site visitor '.$field_name;

	/* Assigns and displays the sender's name to $field_name, 
	   sender's email address to $field_email,
	   and message to $field_message */
	$body_message = 'From: '.$field_name."\n";
	$body_message .= 'E-mail: '.$field_email."\n";
	$body_message .= 'Message: '.$field_message;

	/* Mails the email */
	$mail_status = mail($mail_to, $subject, $body_message, $headers);
?>