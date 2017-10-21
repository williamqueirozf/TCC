<?php
	//baixar a class mPDF no site http://www.mpdf1.com/mpdf/index.php
	//Descompactar o arquivo na pasta pdf  --celke https://www.youtube.com/watch?v=NFddudVVXwc
	include ('pdf/mpdf.php');
	
	$servidor = "localhost";
	$usuario = "root";
	$senha = "";
	$dbname = "estacionamentobd";
	
	//Criar a conexão
	$conn = mysqli_connect($servidor, $usuario, $senha, $dbname);
	if(!$conn){
		die("Falha na conexao: " . mysqli_connect_error());
	}else{
		//echo "Conexao realizada com sucesso";
	}
	
	//$id_pessoa = "1";
	$result_usuario = "SELECT * FROM pessoa";
	$resultado_usuario = mysqli_query($conn, $result_usuario);	
	$row_usuario = mysqli_fetch_assoc($resultado_usuario);	
	
	
	$pagina = 
		"<html>
			<body>
				<h1>Informações do Usuário</h1>
				Id_pessoa: ".$row_usuario['id_pessoa']."<br>
				Nome: ".$row_usuario['nome_pessoa']."<br>
				E-mail: ".$row_usuario['email_pessoa']."<br>
				Senha: ".$row_usuario['cpf_pessoa']."<br>
				<h4>http://www.celke.com.br</h4>
			</body>
		</html>
		";
//echo($pagina);
$arquivo = "Cadastro01.pdf";

$mpdf = new mPDF();
$mpdf->WriteHTML($pagina);

$mpdf->Output($arquivo, 'D');

// I - Abre no navegador
// F - Salva o arquivo no servido
// D - Salva o arquivo no computador do usuário
?>
