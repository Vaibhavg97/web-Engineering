<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>News Website Layout</title>
<link href="pass.css" rel="stylesheet" type="text/css" />
</head>
<body>
<form action="final.html">
  

  <h1>Welcome </h1>
			<h2><%out.print(request.getParameter("uname"));%></h2>
	<div> You are now a successfully registered member of File Share</div>
<div class="share"> To go to main file. Click <a href="final.html">here</a> 
</form>
</body>
</html>
