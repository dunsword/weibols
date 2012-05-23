<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Title</title>
<script language="javascript">
	var change=function(){
		var con=document.getElementById('content');
		alert(con.style);
	}
	var showcss=function(){
		var css = document.styleSheets;
		for(var i=0;i<css.length;i++){
			alert(css[i].title
			);
		}
	}
</script>
<link type="text/css" rel="stylesheet" href="./main.css" />
</head>

<body>

<p>building...</p>
<button onclick="showcss()">click</button>
<div id='content' class="show">content</div>
</body>
</html>
