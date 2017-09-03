<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

//Utilizado para buscar Vaga e colocar na tela inicial
$dns = "mysql:host=localhost;dbname=estacionamentobd";
$user = "root";
$pass = "";
//aqui

try {
	$con = new PDO($dns, $user, $pass);

	if(!$con){
		echo "Não foi possivel conectar com Banco de Dados!";
	}

	$query = $con->prepare("SELECT historico_pagamento.id_hp,vaga_utilizada FROM pessoa join historico_pagamento 
		on pessoa.id_pessoa = historico_pagamento.id_pessoa where historico_pagamento.dt_saida is null");

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"id_hp": "'.$result["id_hp"].'",';
			$out .= '"vaga_utilizada": "'.$result["vaga_utilizada"].'"}';
		}
		$out .= "]";
		echo $out;



} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};
