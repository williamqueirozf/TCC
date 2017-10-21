<?php

require("../conexaobanco/configcon.php");
//Essa api recupera dados pessoais e coloca no menu alterar dados pessoais
/*header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');


$dns = "mysql:host=localhost;dbname=estacionamentobd";
$user = "root";
$pass = "";
//aqui

try {
	$con = new PDO($dns, $user, $pass);

	if(!$con){
		echo "Não foi possivel conectar com Banco de Dados!";
	}*/

	$query = $con->prepare("SELECT * FROM cartao");

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"id_cartao": "'.$result["id_cartao"].'",';
			$out .= '"numero_cartao": "'.$result["numero_cartao"].'",';
			$out .= '"nome_cartao": "'.$result["nome_cartao"].'",';
			$out .= '"codseg_cartao": "'.$result["codseg_cartao"].'",';
			$out .= '"dt_venc_cartao": "'.$result["dt_venc_cartao"].'"}';
		}
		$out .= "]";
		echo $out;


/*
} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};*/
