<?php
require("../conexaobanco/configdb.php");
//ESTA API ESTÁ UTILIZANDO O BENCO DE DADOS AULA COM A TABELA
//USUÁRIOS E UTILIZA ENVIO E RETORNO EM OBJETOS
/*header("Access-Control-Allow-Origin:http://localhost:8100");
//header('Access-Control-Allow-Methods:PUT');
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");*/
    //RECUPERAÇÃO DO FORMULÁRIO
    $data = file_get_contents("php://input");
    $objData = json_decode($data);
    // TRANSFORMA OS DADOS
    $id_hp = $objData->id_hp;
    $vaga_utilizada = $objData->vaga_utilizada;


    // LIMPA OS DADOS
    $id_hp = stripslashes($id_hp);
    $vaga_utilizada = stripslashes($vaga_utilizada);


    $id_hp = trim($id_hp);
    $vaga_utilizada = trim($vaga_utilizada);


    $dados; // RECEBE ARRAY PARA RETORNO
    // INSERE OS DADOS
    //@$db = new PDO("mysql:host=localhost;dbname=estacionamentobd", "root", "");
   //VERIFICA SE TEM CONEXÃO
    if($db){
    //$sql = " UPDATE historico_pagamento SET vaga_utilizada='".$vaga_utilizada."' WHERE id_pessoa =".$id_pessoa;
        $sql = " UPDATE historico_pagamento SET vaga_utilizada='".$vaga_utilizada."' WHERE dt_saida is null";
        $query = $db->prepare($sql);
        $query ->execute();
        if(!$query){
                   $dados = array('mensage' => "Não foi possivel editar os dados ");
                   echo json_encode($dados);
         }
        else{
                   $dados = array('mensage' => "Os dados foram editados com sucesso.");
                  echo json_encode($dados);
         };
    }
   else{
          $dados = array('mensage' => "Não foi possivel editar os dados! Tente novamente mais tarde.");
          echo json_encode($dados);
    };
