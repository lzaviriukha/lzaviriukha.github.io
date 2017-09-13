<?php
$email = $_POST['email'];
$email= htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
mail("leozaviriukha@ukr.net", "Заявка с сайта", "E-mail: ".$email","From: leozaviriukha@ukr.net \r\n")
if (mail("leozaviriukha@ukr.net", "Заявка с сайта", "E-mail: ".$email","From: leozaviriukha@ukr.net \r\n"))
{
echo "сообщение отправлено";
} else {
	echo "при отправке сообщения возникли ошибки";
}?>