<?php
if( isset($_POST['email']) ) {
	$email = trim($_POST['email']);
	 if(empty($email)) {
	 	echo 'Вы не заполнили поле!';
	 }
}else {
	$mailto = 'kamida-agro@ukr.net';
    $subject = 'Подписка с сайта';
    $message .= 'E-mail подписчика: <a href="mailto:' . $email . '">' .$email . '</a><br />';
    $headers = 'Content-type: text/html; charset=utf-8';
    $mail = mail($mailto, $subject, $message, $headers);
     if(TRUE === $mail) echo 'Ваше сообщение успешно отправлено!';
     else echo 'Произошла ошибка при отправке сообщения.';
 }
}
?>
