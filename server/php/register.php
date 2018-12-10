<?php
    header('Access-Control-Allow-Origin:*');
	$requestData = file_get_contents("php://input");
    $requestData = json_decode($requestData);
    $phone = $requestData ->phone;
    $password = $requestData ->password;
    //连接数据库
    $coon = new mysqli("localhost","root","123456" ,"db_userinfo",3306);
    $sql = "insert into user_info (tel,password) VALUES ('$phone','$password')";
    $coon -> query("SET NAMES 'utf8'");//写库
    $coon -> query($sql);
?>