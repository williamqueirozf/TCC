import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';//
import { ServiceProviderInicio } from '../../providers/inicio/inicioservice';//
import { ServiceProvider } from '../../providers/service/service';//

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  
  users : any[];
  nomes : boolean = true;
  elementType : 'url' | 'canvas' | 'img' = 'url';
    value : string = 'Código gerado';  ;
  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              public service : ServiceProviderInicio,
              public service1 : ServiceProvider

            ) {
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

     showPrompt() { //metodo popup guardar vaga
    let prompt = this.alertCtrl.create({
      title: 'Guardar Vaga',
      //message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Insira o Setor'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Saved clicked');
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
