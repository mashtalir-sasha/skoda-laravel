<?
	if(isset ($_POST['title'])) {$title=$_POST['title'];}
	if(isset ($_POST['name'])) {$name=$_POST['name'];}
	if(isset ($_POST['phone'])) {$phonenum=$_POST['phone'];}
	if(isset ($_POST['date'])) {$date=$_POST['date'];}
	if(isset ($_POST['car'])) {$car=$_POST['car'];}
	if(isset ($_POST['dop'])) {$dop=$_POST['dop'];}

	$to = "diler.skoda@gmail.com, ag.samarin@gmail.com"; // Замениь на емаил клиента

	$utm_source=$_COOKIE['utm_source'];
    $utm_medium=$_COOKIE['utm_medium'];
    $utm_term=$_COOKIE['utm_term'];
    $utm_content=$_COOKIE['utm_content'];
    $utm_campaign=$_COOKIE['utm_campaign'];
    $gclid=$_COOKIE['gclid'];

    if ($gclid) {
        $full_data = "Source: Google Adwords\nKW: $utm_term";
    }
    elseif ($utm_source) {
        $full_data = "Source: $utm_source/$utm_medium\nKW: $utm_term";
    }

   	$subject = "[diler-skoda.com.ua]: $title";

	$message = "";
	if ( $name || $phonenum || $date || $car || $dop || $full_data ) {
		$message .= ""
			. ( $name ?" Имя:  $name <br>" : "")
			. ( $phonenum ?" Телефон:  $phonenum <br>" : "")
			. ( $car  ? " Авто: $car <br>" : "")
			. ( $date  ? " Дата тест драйва: $date <br>" : "")
			. ( $dop  ? " Дополнительно: $dop <br>" : "")
			. ( $full_data  ? "<br> $full_data <br>" : "");
	}

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= 'From: "Заявки с сайта" <no-reply@diler-skoda.com.ua>'; // Заменить домен на домен клиента

	if (!$title && !$phonenum) {
	} else {
		mail($to,$subject,$message,$headers); // Заменить домен на домен клиента
	}
?>