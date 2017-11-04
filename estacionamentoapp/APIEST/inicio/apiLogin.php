<?php

$data = file_get_contents("php://input");
$objData = json_decode($data);

$login = $objData->login;
$senha = $objData->senha;


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

      $query = $con->prepare("SELECT * FROM usuario WHERE login = '$login'");
      $query->execute();
      $result = $query->fetch();
      $resultado;

      if($login == $result['login'] && $senha ==  $result['senha']){
            $resultado = ["permissao" => true, "login"=>$result['login']];
      };

      if($login != $result['login'] || $senha != $result['senha']){
            $resultado = ["permissao" => false, "erro" => "login ou senha incorretos. Tente outros ou cadastre-se!"];
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
