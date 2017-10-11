
<?php

	if ($_POST["submit"]) {

					$emailTO="josequizon@hotmail.com";
					$subject=$_POST['subject'];
					$body=$_POST['body'];
					$headers=$_POST['email'];

					if(!$_POST['email']){
						$error.= "<p class='messages'>Please enter your Email so i can contact you!</p>";
					}
					if(!$_POST['body']){
						$error.= "<p class='messages'>Please enter a message so we have something to talk about.Email NOT sent!!!</p>";
					}
					if (!$_POST['email']!=" " AND !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
					{
						$error.="<p class='messages'>PLEASE ENTER VALID EMAIL ADDRESS</p>";
					} 
					if($error){
						$result="<p class='messages'>there is a problem".$error."</p>";
					}else{
						mail($emailTO,$subject,$body, $headers);
						$result="<p class='messages2'>EMAIL SENT on ".date('l')." ".date('m/d/Y')." at ".date("h:i")."</p>";
					
						};


	}
?>

<!doctype html>
<html>
	<head>
	<title>Contact Jose</title>

	<meta charset="utf-8" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/jcqfolioNEW.css">

	<style>

	</style>


	</head>

		<body>
			<div id="maincarrier">
				<p>
					CONTACT <span>FORM</span>
				</p>
				<form method="post">	
				<?php echo $result; ?>

				<div>
					<input class="form" type="text" name ="email" placeholder="Your Email"value="<?php echo $_POST['email'] ?>"><br>	
					<input class="form" type="text" name ="subject" placeholder="Subject"value="<?php echo $_POST['subject'] ?>"><br>		
		
					<textarea id="messagebox"class="form" name="body"><?php echo $_POST['body'];?></textarea>
				</div>


				<input id="submit" type="submit" name="submit" class="button" value="SEND"/>
				
				</form>

	<script>

		$("#submit").click(function()
		{
		});
	</script>


		</body>
</html>