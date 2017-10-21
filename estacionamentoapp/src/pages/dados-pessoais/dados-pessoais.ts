import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';//
import { Validators, FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
//aqui
@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html'
})
export class DadosPessoaisPage {

cadastro : any = {};
users : any[];
cartao : any[];
nomes : boolean = true;
constructor(public navCtrl: NavController,
              public service : ServiceProvider,
              public alertCtrl: AlertController) {

  }

  ngOnInit() {
           this.getDados();
           this.getDadosCartao();
     }

     getDados() {
     //retorno de Dados
     this.service.getData()
           .subscribe(
                 data=> this.users = data
                 ,err=> console.log(err)
           );
     }

     getDadosCartao() {
     //retorno de Dados
     this.service.getCartao()
           .subscribe(
                 data=> this.cartao = data
                 ,err=> console.log(err)
           );
     }

     /*postDados() {
           console.log(this.cadastro.value);
     }*/
     postDados() {
           this.service.postData(this.cadastro.value)
                 .subscribe(
                       data=>{console.log(data.mensage);
                             this.getDados();
                       },
                       err=>console.log(err)
                 );
     }

    /* deletarPerfil(user) {
           // console.log(user);
           // console.log(user.id);
           this.service.deleteData(user.id)
                 .subscribe(
                       data=>{
                             console.log(data.mensage);
                             this.getDados();
                       },
                       err=>console.log(err)
                 );
     }*/
     editarPerfil(req) {
         let prompt = this.alertCtrl.create({
           title: 'Editar Dados Pessoais',
           inputs: [
             {
               name: 'nome_pessoa',
               placeholder: 'nome',
               value:req.nome_pessoa
             },
             {
               name: 'email_pessoa',
               placeholder: 'email',
               value:req.email_pessoa
             },
             {
               name: 'cpf_pessoa',
               placeholder: 'CPF',
               value:req.cpf_pessoa
             },
             {
               name: 'telefone_pessoa',
               placeholder: 'Telefone',
               value:req.telefone_pessoa
             },
           ],
           buttons: [
             {
               text: 'Cancelar',
               handler: data => {}
             },
             {
               text: 'Salvar',
               handler: data => {

                 let params:any={
                    //variavel banco de dados:data.variavel java
                       id_pessoa: req.id_pessoa,
                       nome_pessoa: data.nome_pessoa,
                       email_pessoa: data.email_pessoa,
                       cpf_pessoa: data.cpf_pessoa,
                       telefone_pessoa: data.telefone_pessoa
                 }
                 console.log(data);
                 this.service.updateData(params)
                 .subscribe(
                       data=>{
                             console.log(data.mensage);
                             this.getDados();
                             },
                       err=>console.log(err)
                 );
               }
             }
           ]
         });
         prompt.present();
       }

       //cartao _update


       editarCartao(req) {
         let prompt = this.alertCtrl.create({
           title: 'Editar Cartão',
           inputs: [
             {
               name: 'nome_cartao',
               placeholder: 'Nome Conforme Cartão',
               value:req.nome_cartao
             },
             {
               name: 'numero_cartao',
               placeholder: 'Numero do Cartão',
               value:req.numero_cartao
             },
             {
               name: 'codseg_cartao',
               placeholder: 'Codigo de Segurança',
               value:req.codseg_cartao
             },
             {
               name: 'dt_venc_cartao',
               placeholder: 'MMAA',
               value:req.dt_venc_cartao
             },
           ],
           buttons: [
             {
               text: 'Cancelar',
               handler: data => {}
             },
             {
               text: 'Salvar',
               handler: data => {

                 let params:any={
                    //variavel banco de dados:data.variavel java
                       id_cartao: req.id_cartao,
                       numero_cartao: data.numero_cartao,
                       nome_cartao: data.nome_cartao,
                       codseg_cartao: data.codseg_cartao,
                       dt_venc_cartao: data.dt_venc_cartao
                 }
                 console.log(data);
                 this.service.updateCartao(params)
                 .subscribe(
                       data=>{
                             console.log(data.mensage);
                             this.getDadosCartao();                             
                             },
                       err=>console.log(err)
                 );
               }
             }
           ]
         });
         prompt.present();
       }




























     mostraNome() {
           this.nomes = !this.nomes;
     }












}
