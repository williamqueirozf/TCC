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

	$query = $con->prepare("SELECT
								p.nome_pessoa,
								CONCAT('R$ ',CONCAT(hp.valorpago_hp)) as valorpago_hp,
								DATE_FORMAT(hp.dt_entrada, '%d/%m/%Y') AS dt_entrada,
								m.nome_municipio,
								e.nome_estabelecimento,
								e.bairro_estabelecimento,
								est.sg_estado,
								pais.sg_pais

								FROM historico_pagamento as hp
								JOIN pessoa as p
								ON p.id_pessoa = hp.id_pessoa

								JOIN estabelecimento as e
								ON e.id_estabelecimento = hp.id_estabelecimento

								JOIN municipio as m
								ON m.id_municipio = e.id_municipio

								JOIN estado est
								ON est.id_estado = m.id_estado

								JOIN pais
								ON pais.id_pais = est.id_pais");

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"valorpago_hp": "'.$result["valorpago_hp"].'",';
			$out .= '"nome_pessoa": "'.$result["nome_pessoa"].'",';
			$out .= '"dt_entrada": "'.$result["dt_entrada"].'",';
			$out .= '"bairro_estabelecimento": "'.$result["bairro_estabelecimento"].'",';
			$out .= '"nome_municipio": "'.$result["nome_municipio"].'",';
			$out .= '"nome_estabelecimento": "'.$result["nome_estabelecimento"].'",';
			$out .= '"sg_estado": "'.$result["sg_estado"].'",';
			$out .= '"sg_pais": "'.$result["sg_pais"].'"}';
		}
		$out .= "]";
		echo $out;


/*
} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};*/
