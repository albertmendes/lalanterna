<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>La Lanterna Admin</title>
    <style>
      body {
	font-family: arial;
	font-size: 14px;
      }
      .container {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 24em;
      }
      .formdiv {
	padding: 21px 34px 55px 34px;
	border-radius: 3px;
	border: 1px solid #ccc;
	max-width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-shadow: 0 0 10px rgba(0,0,0,0.2);
      }
      label {
	display: block;
	text-align: center;
	margin-bottom: 5px;
      }
      input[type=password] {
	border-radius: 3px;
	padding: 5px;
	border: 1px solid #ccc;
      }
      input[type=submit] {
	display: block;
	width: 100%;
	border: 0;
	background: #009246;
	padding: 8px;
	border-radius: 3px;
	margin-top: 3px;
	color: white;
	cursor: pointer;
      }
      .logo {
	margin-bottom: 8px;
	width: 55px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="formdiv">
	<form action="" method="POST">
	  <label>Login</label>
      	  <input name="passwd" type="password" />
      	  <input type="submit" />
      	</form>
      </div>
    </div>
  </body>
</html>
