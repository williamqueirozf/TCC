<?php
require("../conexaobanco/configcon.php");
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

$data = file_get_contents("php://input");
$objData = json_decode($data);

/*$dns = "mysql:host=mysql.hostinger.com.br;dbname=u460090852_aula";
$user = 'u460090852_ionic';jhtjtyi
$pass = '123456';*/

$login = $objData->login;
$senha = $objData->senha;
//$senha = md5($senha);

/*try {
	$con = new PDO($dns, $user, $pass);

	if(!$con){
		echo "Não foi possivel conectar com Banco de Dados!";
	};*/

      $query = $con->prepare("SELECT * FROM usuario");
      $query->execute();
      $result = $query->fetch();
      $resultado;
      if($login == $result['login'] && $senha == $result['senha']){
            $resultado = ["permissao" => true, "login"=>$result['login']];
      };

      if($login != $result['login'] || $senha != $result['senha']){
            $resultado = ["permissao" => false, "erro" => "login ou senha incorretos. Tente outros ou cadastre-se!"];
      };

      echo json_encode($resultado);

/*} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};*/
