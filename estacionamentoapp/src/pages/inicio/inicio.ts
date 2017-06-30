import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';//

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  elementType : 'url' | 'canvas' | 'img' = 'url';
    value : string = 'Aqui é Evotech';
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
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


}
