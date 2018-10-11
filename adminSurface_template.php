<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
		<title>Lanterna Admin</title>
		<style>
			body {
				font-size: 16px;
				font-family: arial;
				background: #00b254;
			}
			* {
				box-sizing: border-box;
			}
			.wrapper {
				max-width: 543px;
				position: relative;
				margin-left: auto;
				margin-right: auto;
				padding: 21px;
				background: #009246;
				box-shadow: 0 0 10px rgba(0,0,0,0.5);
			}
			hr {
				margin-bottom: 34px;
			}
			textarea, input {
				display: block;
				width: 100%;
				padding: 21px;
				font-size: 16px;
				border-radius: 5px;
				margin: 21px 0;
				box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
			}

			textarea {
				height: 300px;
			}
			input[type="submit"] {
				cursor: pointer;
				outline: none;
				width: 100%;
				background: linear-gradient(#fff, #777);
			}
			input[type="submit"]:hover {
				background: linear-gradient(#fff, #ce2b37);
				color: black;
			}
			input[type="submit"]:active {
				box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
			}
			h1, label {
				color: white;
				text-shadow: 2px 2px 2px black;
			}
			h1.tmenu::before {
				content: '';
				position: relative;
				top: 0;
				left: 0;
				display: inline-block;
				width: 55px;
				height: 55px;
				background: url(./img/dish.png);
				background-size: cover;
				vertical-align: middle;
				margin-right: 21px;
			}
		</style>
	</head>
	<body>
		<div class="wrapper">
			<h1 class="tmenu">Tagesmenü</h1>
			<hr>
			<form action="javascript:writeToFile();">
				<label>Titel</label><input type="text" id="title">
				<label>Beschreibung</label><textarea id="descr" required></textarea>
				<label>Preis</label><input type="text" id="price" required>
				<input type="submit" id="mysubmit">
			</form>

			<form method="GET" action"./admin.php">
				<input type="hidden" value="1" name="logout">
				<input type="submit" value="logout">
			</form>
		</div>


		<script>
			function writeToFile() {
				var title = document.getElementById("title").value;
				var text = document.getElementsByTagName("textarea")[0].value;
				var price = document.getElementById("price").value;

				//console.log(title + text + price);
				fetch('./admin.php?title=' + title + "&text=" + text + "&price=" + price, {
					credentials: "same-origin"
				})
				.then(function() {
					document.getElementById("mysubmit").value = "Ok. Eingetragen.";
					setTimeout(function() {
						document.getElementById("mysubmit").value = "Senden";
					}, 2000);
				});
			}


			var myHeaders = new Headers();
			myHeaders.append('pragma', 'no-cache');
			myHeaders.append('cache-control', 'no-cache');

			var myInit = {
				method: 'GET',
				headers: myHeaders,
			};

			fetch("./tagesmenu.json", myInit)
			.then(resp => resp.json())
			.then(resp => {
				document.getElementById("title").value = resp.title;
				document.getElementById("descr").textContent = resp.descr;
				document.getElementById("price").value = resp.price;
			});
		</script>
	</body>
</html>
