-- geração de modelo físico
-- sql ansi 2003 - brmodelo.



/*create table pessoa (
id_pessoa integer primary key auto_increment
,cpf_pessoa numeric(11) 
,nome_pessoa varchar(80) 
,dt_nasc_pessoa datetime 
,email_pessoa varchar(50) 
,sexo_pessoa char(1) 
,telefone_pessoa numeric(11) 
,dt_cadastro_pessoa datetime 
)engine=myisam default charset=latin1;*/

create table `pessoa` (
  `id_pessoa` int(11),
  `nome_pessoa` varchar(20) default null,
  `email_pessoa` varchar(50) default null,
  `telefone_pessoa` varchar(50) default null,
  `cpf_pessoa` int(11)  null,
  `dt_nasc_pessoa` date default null,
  `sexo_pessoa` char(1) 
  ,`dt_cadastro_pessoa` datetime 
  
) engine=myisam default charset=latin1;

create table estado (
id_estado numeric(4) primary key,
sg_estado char(2) not null,
nome_estado varchar(40)not null,
id_pais numeric(4) not null
);

create table cartao (
id_cartao integer primary key auto_increment,
numero_cartao numeric(16),
nome_cartao varchar(50),
codseg_cartao numeric(3),
dt_venc_cartao numeric(4),
dt_cadastro_cartao datetime,
id_pessoa integer,
foreign key(id_pessoa) references pessoa (id_pessoa)
);

create table usuario (
id_usuario integer primary key auto_increment,
login varchar(20),
senha varchar(8),
id_pessoa integer not null,
foreign key(id_pessoa) references pessoa (id_pessoa)
);

create table pais (
id_pais numeric(4) primary key,
sg_pais char(2) not null,
nome_pais varchar(40) not null
);

create table preco_estabelecimento (
id_preco integer,
id_estabelecimento integer,
valor_preco numeric (5,2),
primary key(id_preco,id_estabelecimento)
);

create table preco (
id_preco integer primary key auto_increment,
tempo_preco varchar(11) not null
);


create table historico_pagamento (
id_hp integer primary key auto_increment,
dt_saida datetime,
dt_entrada datetime,
valorpago_hp numeric(5,2),
vaga_utilizada varchar(5),
id_pessoa integer,
id_estabelecimento integer,
foreign key(id_pessoa) references pessoa (id_pessoa)
);

create table estabelecimento (
id_estabelecimento integer primary key auto_increment,
nome_estabelecimento varchar(50) not null,
logradouro_estabelecimento varchar(50) not null,
cep_estabelecimento numeric(8) not null,
numero_estabelecimento numeric(8) not null,
email_estabelecimento varchar(50) not null,
bairro_estabelecimento varchar(40) not null,
cnpj_estabelecimento numeric(14)not null,
id_municipio numeric(10) not null
);

create table municipio (
id_municipio numeric(10) primary key,
nome_municipio varchar(50) not null,
id_estado numeric(4) not null,
foreign key(id_estado) references estado (id_estado)
);

alter table estado add foreign key(id_pais) references pais (id_pais);
alter table preco_estabelecimento add foreign key(id_preco) references preco (id_preco);
alter table preco_estabelecimento add foreign key(id_estabelecimento) references estabelecimento (id_estabelecimento);
alter table historico_pagamento add foreign key(id_estabelecimento) references estabelecimento (id_estabelecimento);
alter table estabelecimento add foreign key(id_municipio) references municipio (id_municipio);


alter table `pessoa`
  add primary key (`id_pessoa`);
  
alter table `pessoa`
  modify `id_pessoa` int(11) not null auto_increment, auto_increment=1;