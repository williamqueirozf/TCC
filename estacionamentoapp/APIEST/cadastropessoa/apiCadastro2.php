<?php
require("../conexaobanco/configdb.php");
//ESTA API atualiza dados na tabela usuário, passo 2 do cadastro de novo usuário
//USUÁRIOS E UTILIZA ENVIO E RETORNO EM OBJETOS
/*header("Access-Control-Allow-Origin:http://localhost:8100");
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");*/
    //RECUPERAÇÃO DO FORMULÁRIO
    $data = file_get_contents("php://input");
    $objData = json_decode($data);
    // TRANSFORMA OS DADOS
    $login = $objData->login;
    $senha = $objData->senha;


    // LIMPA OS DADOS
    $login = stripslashes($login);
    $senha = stripslashes($senha);

    $login = trim($login);
    $senha = trim($senha);

    $dados; // RECEBE ARRAY PARA RETORNO
    // INSERE OS DADOS
    
    //@$db = new PDO("mysql:host=localhost;dbname=estacionamentobd", "root", "");

   //VERIFICA SE TEM CONEXÃO
    if($db){

        $sql = " UPDATE USUARIO
                  join pessoa
                  on pessoa.id_pessoa = usuario.id_pessoa
                  SET LOGIN='".$login."',SENHA='".$senha."'
                  WHERE LOGIN IS NULL
        ";

        $query = $db->prepare($sql);
        $query ->execute();
        if(!$query){
                   $dados = array('mensage' => "Não foi possivel enviar os dados ");
                   echo json_encode($dados);
         }
        else{
                   $dados = array('mensage' => "Os dados foram inseridos com sucesso. Obrigado e bem vindo ");
                  echo json_encode($dados);
         };
    }
   else{
          $dados = array('mensage' => "Não foi possivel inserir os dados! Tente novamente mais tarde.");
          echo json_encode($dados);
    };
