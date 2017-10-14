<?php 
require("config.php");



  $query = $pdo->prepare("SELECT *,CASE WHEN id_usuario>=1 THEN 'sim' END as cont  FROM usuario");

    $query->execute();

    $out = "[";

    while($result = $query->fetch()){
      $contar=$query->rowCount();
      if($contar>0){

      if ($out != "[") {
        $out .= ",";
      }
      $out .= '{"login": "'.$result["login"].'",';
      $out .= '"cont": "'.$result["cont"].'",';
      $out .= '"senha": "'.$result["senha"].'"}';

    }
  }
    $out .= "]";
    echo $out;
?>

