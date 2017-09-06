<?php
//ESTA API é utilizada para realizar update na tela de dados pessoais com usuário logado
//USUÁRIOS E UTILIZA ENVIO E RETORNO EM OBJETOS
header("Access-Control-Allow-Origin:http://localhost:8100");
//header('Access-Control-Allow-Methods:PUT');
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    //RECUPERAÇÃO DO FORMULÁRIO
    $data = file_get_contents("php://input");
    $objData = json_decode($data);
    // TRANSFORMA OS DADOS
    $id_pessoa = $objData->id_pessoa;
    $nome_pessoa = $objData->nome_pessoa;
    $email_pessoa = $objData->email_pessoa;
    $telefone_pessoa = $objData->telefone_pessoa;
    $cpf_pessoa = $objData->cpf_pessoa;

//aqui **
    // LIMPA OS DADOS
    $nome_pessoa = stripslashes($nome_pessoa);
    $email_pessoa = stripslashes($email_pessoa);
    $telefone_pessoa = stripslashes($telefone_pessoa);
    $cpf_pessoa = stripslashes($cpf_pessoa);

    $id_pessoa = trim($id_pessoa);
    $nome_pessoa = trim($nome_pessoa);
    $email_pessoa = trim($email_pessoa);
    $telefone_pessoa = trim($telefone_pessoa);
    $cpf_pessoa = trim($cpf_pessoa);
    $dados; // RECEBE ARRAY PARA RETORNO
    // INSERE OS DADOS
    @$db = new PDO("mysql:host=localhost;dbname=estacionamentobd", "root", "");
   //VERIFICA SE TEM CONEXÃO
    if($db){
        //$sql = " UPDATE usuarios SET nome='".$nome."',email1='".$email1."' WHERE id =".$id;
        $sql = " UPDATE pessoa SET nome_pessoa='".$nome_pessoa."',email_pessoa='".$email_pessoa."',telefone_pessoa='".$telefone_pessoa."',cpf_pessoa='".$cpf_pessoa."' WHERE id_pessoa =".$id_pessoa;
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
