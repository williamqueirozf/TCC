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

	$query = $con->prepare("SELECT * FROM pessoa");

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"id_pessoa": "'.$result["id_pessoa"].'",';
			$out .= '"nome_pessoa": "'.$result["nome_pessoa"].'",';
			$out .= '"email_pessoa": "'.$result["email_pessoa"].'",';
			$out .= '"cpf_pessoa": "'.$result["cpf_pessoa"].'",';
			$out .= '"telefone_pessoa": "'.$result["telefone_pessoa"].'",';
			$out .= '"sexo_pessoa": "'.$result["sexo_pessoa"].'"}';
		}
		$out .= "]";
		echo $out;


/*
} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};*/
