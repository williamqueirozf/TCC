import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';//
import { ServiceProviderInicio } from '../../providers/inicio/inicioservice';//
//import { ServiceProvider } from '../../providers/service/service';//

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  
  users : any[];
  tempoValor;
  vaga  : any[];
  nomeUsuario  : any[];   
  nomes : boolean = true;  
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value;  //só recebe string
  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              public service : ServiceProviderInicio
              //public service1 : ServiceProvider
              

            ) {
 
  }

  ngOnInit() {
           this.getVaga();
           this.getDadosUsuarioId();
           this.getDadosLogin() ;
           this.getNomeInicio();
           this.getTempoValor();
     }

    getDadosLogin() {
     //retorno de Dados
     this.service.getDataLogin()
           .subscribe(
                 data=> this.users = data
                 ,err=> console.log(err)
           );
     }

     getDadosUsuarioId() {
     //retorno de Dados
     this.service.getDataUsuarioId()
           .subscribe(
                 data=> this.value = data
                 ,err=> console.log(err)
           );
     }

     getVaga() {
     //retorno de Dados
     this.service.getDataInicioVaga()
           .subscribe(
                 data=> this.vaga = data
                 ,err=> console.log(err)
           );
     }


     getNomeInicio() {
     //retorno de Dados
     this.service.getDataNome()
           .subscribe(
                 data=> this.nomeUsuario = data
                 ,err=> console.log(err)
           );
     }

     getTempoValor() {
     //retorno de Dados
     this.service.getDataTempoValor()
           .subscribe(
                 data=> this.tempoValor = data
                 ,err=> console.log(err)
           );
     }

     salvarVaga(req) {
         let prompt = this.alertCtrl.create({
           title: 'Lembrar Vaga',
           inputs: [
             {
               name: 'vaga_utilizada',
               placeholder: 'Guarde sua Vaga',
               value:req.vaga_utilizada
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
                  //  variavel banco de dados:data.variavel java
                       id_hp: req.id_hp,
                       vaga_utilizada: data.vaga_utilizada
                       
                 }
                 console.log(data);
                  this.service.updateVaga(params)
                 .subscribe(
                       data=>{
                             console.log(data.mensage);
                             this.getVaga();
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