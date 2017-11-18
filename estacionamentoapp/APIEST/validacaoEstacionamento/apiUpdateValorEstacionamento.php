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
$text = $objData->text;
    // TRANSFORMA OS DADOS
// LIMPA OS DADOS
$text = stripslashes($text);
$text = trim($text);

$dados; // RECEBE ARRAY PARA RETORNO
    // INSERE OS DADOS
    //@$db = new PDO("mysql:host=localhost;dbname=estacionamentobd", "root", "");
   //VERIFICA SE TEM CONEXÃO
    if($db){
        
        $sql = "
			UPDATE historico_pagamento
			JOIN estabelecimento  on historico_pagamento.id_estabelecimento = estabelecimento.id_estabelecimento
			JOIN preco_estabelecimento	on preco_estabelecimento.id_estabelecimento = estabelecimento.id_estabelecimento
			JOIN preco ON preco.id_preco = preco_estabelecimento.id_preco 

			JOIN PESSOA ON PESSOA.ID_PESSOA = historico_pagamento.ID_PESSOA
			JOIN USUARIO ON USUARIO.ID_PESSOA = PESSOA.ID_PESSOA


			SET valorpago_hp = valor_preco , dt_saida = NOW()

			WHERE TIMESTAMPDIFF(hour,dt_entrada,now()) = tempo_preco and dt_saida is null AND ID_USUARIO =id_usuario = '$text'
         ";
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
