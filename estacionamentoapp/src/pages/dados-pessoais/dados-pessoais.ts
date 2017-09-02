import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';//
import { Validators, FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';
//aqui
@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html'
})
export class DadosPessoaisPage {

cadastro : any = {};
users : any[];
nomes : boolean = true;
constructor(public navCtrl: NavController,
              public service : ServiceProvider,
              public alertCtrl: AlertController) {

  }

  ngOnInit() {
           this.getDados();
     }

     getDados() {
     //retorno de Dados
     this.service.getData()
           .subscribe(
                 data=> this.users = data
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
           title: 'Edita Perfil',
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


     mostraNome() {
           this.nomes = !this.nomes;
     }
}
