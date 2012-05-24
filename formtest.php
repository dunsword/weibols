<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<title>formtest</title>
</head>

<body>
<h1>form</h1>
Value:
<?php
	echo $_GET["value"];
?>
Value decoded:
<?php
	echo urldecode($_GET["value"]);
?>
<form action="./formtest.php" method="GET">
<input type="text" name="value" value="中文"/>
<input type="submit" value="submit"/>
</form>
<button onclick="editor1.pasteHTML('<b>added</b>')">添加</button>
</body>
</html>
