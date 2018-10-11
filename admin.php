<?php
  session_start();
  $password = "neinnein";

  if(isset($_POST["passwd"]) && $_POST["passwd"] == $password) {
    $_SESSION["login"] = 1;
  }

  if(isset($_GET['logout'])) {
    session_destroy();
    header('Location: ./admin.php');
  }

  if($_SESSION["login"] != 1 ) {
    require('login_template.php');
  }
  else {
		if(isset($_GET["text"]) && isset($_GET["price"]) && isset($_GET["title"])) {
			$myarray = array(
				"title" => $_GET["title"],
				"descr" => $_GET["text"],
				"price" => $_GET["price"]
			);

			$myarray = json_encode($myarray, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

			$fp = fopen("tagesmenu.json", "w");
			fputs($fp, $myarray);
			fclose($fp);
		}
    require('adminSurface_template.php');
  }
?>
