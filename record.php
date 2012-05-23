<?php 
	$title="";
	$content="";
	if($_POST['submit']=='submit'){
		$title=$_POST['title'];
		$content=$_POST['content'];
	}
	else{
		$title="blank";
		$content="blank";
	}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>文档记录</title>
</head>
	<?php echo "this is php";?>
    <form name='doc' action="./record.php" method="post">
    	<input name="title" type="text" value="<?php echo  $title; ?>"/><br/>
        <textarea name="content"  rows="3" ><?php echo $content ?></textarea><br/>
        <input type="submit" name="submit" value="submit"/>
    </form>
<body>
</body>
</html>
