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

	$query = $con->prepare(
		"SELECT CONCAT(CONCAT('R$ ',CONCAT(valor_preco), CONCAT('  -  Tempo: ',TIMEDIFF(now(),dt_entrada)))) AS diferenca,valor_preco FROM `historico_pagamento` 
		 JOIN estabelecimento  on historico_pagamento.id_estabelecimento = estabelecimento.id_estabelecimento
		 JOIN preco_estabelecimento	on preco_estabelecimento.id_estabelecimento = estabelecimento.id_estabelecimento
         JOIN preco ON preco.id_preco = preco_estabelecimento.id_preco 
         AND TIMESTAMPDIFF(hour,dt_entrada,now()) = tempo_preco




							");

		$query->execute();

		$out = "";
		while($result = $query->fetch()){
			if ($out != "") {
				$out .= "";
			}
			
			$out .= ' "'.$result["diferenca"].'"';
		}
		$out .= "";
		echo $out;



} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};
