import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarCartODeCrDitoPage } from '../cadastrar-cart-ode-cr-dito/cadastrar-cart-ode-cr-dito';

@Component({
  selector: 'page-cadastrar-login-esenha23',
  templateUrl: 'cadastrar-login-esenha23.html'
})
export class CadastrarLoginESenha23Page {

  constructor(public navCtrl: NavController) {
  }
  goToCadastrarCartODeCrDito(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarCartODeCrDitoPage);
  }
}
