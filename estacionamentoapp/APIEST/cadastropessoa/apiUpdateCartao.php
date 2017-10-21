<?php
require("../conexaobanco/configdb.php");
//ESTA API é utilizada para realizar update na tela de dados pessoais com usuário logado
//USUÁRIOS E UTILIZA ENVIO E RETORNO EM OBJETOS
/*header("Access-Control-Allow-Origin:http://localhost:8100");
//header('Access-Control-Allow-Methods:PUT');
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");*/
    //RECUPERAÇÃO DO FORMULÁRIO
    $data = file_get_contents("php://input");
    $objData = json_decode($data);
    // TRANSFORMA OS DADOS
    $id_cartao = $objData->id_cartao;
    $nome_cartao = $objData->nome_cartao;
    $numero_cartao = $objData->numero_cartao;
    $dt_venc_cartao = $objData->dt_venc_cartao;
    $codseg_cartao = $objData->codseg_cartao;

//aqui **
    // LIMPA OS DADOS
    $nome_cartao = stripslashes($nome_cartao);
    $numero_cartao = stripslashes($numero_cartao);
    $codseg_cartao = stripslashes($codseg_cartao);
    $dt_venc_cartao = stripslashes($dt_venc_cartao);

    $id_cartao = trim($id_cartao);
    $numero_cartao = trim($numero_cartao);
    $codseg_cartao = trim($codseg_cartao);
    $dt_venc_cartao = trim($dt_venc_cartao);    
    $nome_cartao = trim($nome_cartao);
    $dados; // RECEBE ARRAY PARA RETORNO
    // INSERE OS DADOS
    //@$db = new PDO("mysql:host=localhost;dbname=estacionamentobd", "root", "");
   //VERIFICA SE TEM CONEXÃO
    if($db){
        
        $sql = " UPDATE cartao SET numero_cartao='".$numero_cartao."',codseg_cartao='".$codseg_cartao."',dt_venc_cartao='".$dt_venc_cartao."',nome_cartao='".$nome_cartao."' WHERE id_cartao =".$id_cartao;
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
