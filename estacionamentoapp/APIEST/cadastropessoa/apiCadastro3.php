<?php
//ESTA API atualiza dados na tabela cartão, de acordo com o passo 3 de cadastro´novo usuário
//USUÁRIOS E UTILIZA ENVIO E RETORNO EM OBJETOS
header("Access-Control-Allow-Origin:http://localhost:8100");
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    //RECUPERAÇÃO DO FORMULÁRIO
    $data = file_get_contents("php://input");
    $objData = json_decode($data);
    // TRANSFORMA OS DADOS
    $nomecartao = $objData->nomecartao;
    $numerocartao = $objData->numerocartao;
    $codigoverificador = $objData->codigoverificador;
    $validade = $objData->validade;


    // LIMPA OS DADOS
    $nomecartao = stripslashes($nomecartao);
    $numerocartao = stripslashes($numerocartao);
    $codigoverificador = stripslashes($codigoverificador);
    $validade = stripslashes($validade);

    $nomecartao = trim($nomecartao);
    $numerocartao = trim($numerocartao);
    $codigoverificador = trim($codigoverificador);
    $validade = trim($validade);



    $dados; // RECEBE ARRAY PARA RETORNO
    // INSERE OS DADOS
    //@$db = new PDO("mysql:host=localhost;dbname=usuarios", "root", ""); //antigo
    @$db = new PDO("mysql:host=localhost;dbname=estacionamentobd", "root", "");
   //VERIFICA SE TEM CONEXÃO
    if($db){
       //$sql = " insert into usuarios(nome,email,cpf) values('".$nome."','".$email."','".md5($cpf)."')"; ,cpf_pessoa,dt_nasc_pessoa,telefone_pessoa,dt_cadastro_pessoa//(antigo)
        /*$sql = " insert into cartao(nome_cartao,numero_cartao,codseg_cartao,DT_VENC_CARTAO,DT_CADASTRO_CARTAO,id_pessoa)
        values('".$nomecartao."','".$numerocartao."','".$codigoverificador."','".$validade."',now(),LAST_INSERT_ID(5))";
        */
    $sql = " UPDATE CARTAO
              join pessoa
              on pessoa.id_pessoa = cartao.id_pessoa
              SET nome_cartao='".$nomecartao."',numero_cartao='".$numerocartao."',codseg_cartao='".$codigoverificador."'
              ,DT_VENC_CARTAO='".$validade."',DT_CADASTRO_CARTAO=now()

              WHERE NOME_CARTAO IS NULL

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
