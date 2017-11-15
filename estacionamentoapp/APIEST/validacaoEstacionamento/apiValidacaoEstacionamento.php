<?php

$data = file_get_contents("php://input");
$objData = json_decode($data);

$text = $objData->text;

// LIMPA OS DADOS
$text = stripslashes($text);
$text = trim($text);

require("../conexaobanco/configcon.php");


/*header("Access-Control-Allow-Origin: *");
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
	}*/



if(!$con){
		echo "Não foi possivel conectar com Banco de Dados!";
	};

      $query = $con->prepare("SELECT usuario.id_usuario,pessoa.nome_pessoa FROM usuario 
      						  JOIN pessoa 
      						  ON pessoa.id_pessoa = usuario.id_pessoa
      						  JOIN historico_pagamento
      						  ON historico_pagamento.id_pessoa = pessoa.id_pessoa
      						  WHERE historico_pagamento.dt_saida AND id_usuario = '$text'");





      $query->execute();
      $result = $query->fetch();
      $resultado;

      if($text == $result['id_usuario']){
            $resultado = ["permissao" => true, "nome_pessoa"=>$result['nome_pessoa']];
      };

      if($text != $result['id_usuario']){
            $resultado = ["permissao" => false, "erro" => "Por Gentileza.Digija-se ao autoatendimento!"];
      };

      echo json_encode($resultado);

/*		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			
			$out .= ' "'.$result["login"].'"';
		}
		$out .= "]";
		echo $out;
		*/



/*} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};*/
