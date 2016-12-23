<?php
	// Forms and sends the message
	$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
	$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
	$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

	$mail_to = 'kate.carcia@gmail.com'; 
	$subject = 'kaitlyncarcia.com Message'.$name;

	$message = 'From: '.$name."\n";
	$message .= 'E-mail: '.$email."\n";
	$message .= 'Message: '.$message;

	mail($mail_to, $subject, $message);
?>
