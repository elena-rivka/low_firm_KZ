<?php 
$name = $_POST['user-name'];
$phone = $_REQUEST['phone']['full'];

$pixel = $_GET['pixel'];
$pixel = $_COOKIE['pixel'];
$token = "5868018815:AAH0waNag4IY3tfEqQXNzb7tOumZ3fcOkJc";
$chat_id = "-992540178";
$arr = array(
    '👤 Имя пользователя: ' => $name,
    '📞 Телефон: ' => $phone,
    '📍 Pixel: ' => $pixel,
    '🗓 Дата: ' => date("m.d.Y")
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
&parse_mode=html&text={$txt}","r");



if ($sendToTelegram) {
    header('Location: thankyou.html');
} else {
    echo "Error";
}
?>


