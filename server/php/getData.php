<?php
	header('Access-Control-Allow-Origin:*');
	$json = file_get_contents("../json/shop.json");
	  // 把json字符串转化为对象
    $json = json_decode($json);
    $data = $json -> data;
	$val = $data[0]->title;
	$a = "<h1>".$val."</h1>";
	echo($a);
?>