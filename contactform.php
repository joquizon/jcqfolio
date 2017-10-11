
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
						$error.="<p>PLEASE ENTER VALID EMAIL ADDRESS</p>";
					} 
					if($error){
						$result='<p>there is a problem'.$error."</p>";
					}else{
						mail($emailTO,$subject,$body, $headers);
						echo"<p class='messages'>EMAIL SENT on".date('l')." ".date('m/d/Y')." at ".date("h:i")."</p>";
					
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

	<style>
		.form{background-color: gray;
			color:white;
			width:15%;
			height:5vw;}
		.button{width:8%;
			background-color: green;
			height:2.5vw;}
	</style>


	</head>

		<body>
			<p>
				Contact Form
			</p>
			<form method="post">	
					<?php echo $result; ?>

			<div>
				<input class="form" type="text" name ="email" placeholder="Your Email"value="<?php echo $_POST['email'] ?>"><br>	
				<input class="form" type="text" name ="subject" placeholder="Subject"value="<?php echo $_POST['subject'] ?>"><br>		
				<input class="form" type="text" name ="body" placeholder="Your Message"value="<?php echo $_POST['body'] ?>">
			</div>

			<input id="submit" type="submit" name="submit" class="button" value="submit"/>
			
			</form>

	<script>

		$("#submit").click(function()
		{
		});
	</script>


		</body>
</html>