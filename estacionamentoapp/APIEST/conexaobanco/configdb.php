<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

try{
	$db = new PDO('mysql:host=localhost;dbname=estacionamentobd',"root","");
	if(!$db){
		echo "Não foi possivel conectar com Banco de Dados!";
	}

} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
}

?>