import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarLoginESenha23Page } from '../cadastrar-login-esenha23/cadastrar-login-esenha23';
import { CadastrarCartODeCrDitoPage } from '../cadastrar-cart-ode-cr-dito/cadastrar-cart-ode-cr-dito';

import { LoadingController } from 'ionic-angular'; //metodo utilizado pra carregar pagina

@Component({
  selector: 'page-cadastrar-dados-pessoais13',
  templateUrl: 'cadastrar-dados-pessoais13.html'
})
export class CadastrarDadosPessoais13Page {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
  }
  goToCadastrarLoginESenha23(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarLoginESenha23Page);
  }goToCadastrarCartODeCrDito(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarCartODeCrDitoPage);
  }
  
  presentLoading() { //metodo utilizado pra carregar pagina
    let loader = this.loadingCtrl.create({
      content: "Por Favor Aguarde...",
      duration: 3000,
      dismissOnPageChange: true //utilizado pra aparecer quando há uma demora na troca de página
    });
    loader.present();
  }
}
