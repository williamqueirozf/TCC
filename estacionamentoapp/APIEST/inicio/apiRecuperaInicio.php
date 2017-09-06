<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
//recupera login usuario

$dns = "mysql:host=localhost;dbname=estacionamentobd";
$user = "root";
$pass = "";
//aqui

try {
	$con = new PDO($dns, $user, $pass);

	if(!$con){
		echo "Não foi possivel conectar com Banco de Dados!";
	}

	$query = $con->prepare("SELECT * FROM usuario");

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"id_usuario": "'.$result["id_usuario"].'",';
			$out .= '"login": "'.$result["login"].'"}';
		}
		$out .= "]";
		echo $out;

/*		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			
			$out .= ' "'.$result["login"].'"';
		}
		$out .= "]";
		echo $out;
		*/



} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};
