<?php
    header('Access-Control-Allow-Origin:*');
	$requestData = file_get_contents("php://input");
    $requestData = json_decode($requestData);
    $phone = $requestData -> phone;
    $password = $requestData -> password;
    $coon = new mysqli("localhost","root","123456","db_userinfo",3306);
    $sql = "SELECT tel,password FROM user_info WHERE tel='$phone' AND password = '$password'";
    $coon -> query("SET CHARACTER SET 'utf8'");//读库
    $row = $coon -> query($sql);//执行sql语句
    $result = $row -> fetch_object();
    if($result){
    	echo 1;
    }else{
    	echo 0;
    }
?>