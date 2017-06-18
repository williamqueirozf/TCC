import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarLoginESenha23Page } from '../cadastrar-login-esenha23/cadastrar-login-esenha23';
import { CadastrarCartODeCrDitoPage } from '../cadastrar-cart-ode-cr-dito/cadastrar-cart-ode-cr-dito';

@Component({
  selector: 'page-cadastrar-dados-pessoais13',
  templateUrl: 'cadastrar-dados-pessoais13.html'
})
export class CadastrarDadosPessoais13Page {

  constructor(public navCtrl: NavController) {
  }
  goToCadastrarLoginESenha23(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarLoginESenha23Page);
  }goToCadastrarCartODeCrDito(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarCartODeCrDitoPage);
  }
}
