import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';
import { AlterarLoginESenhaPage } from '../alterar-login-esenha/alterar-login-esenha';
import { AlterarCartODeCrDitoPage } from '../alterar-cart-ode-cr-dito/alterar-cart-ode-cr-dito';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController) {
  }
  goToDadosPessoais(params){
    if (!params) params = {};
    this.navCtrl.push(DadosPessoaisPage);
  }goToAlterarLoginESenha(params){
    if (!params) params = {};
    this.navCtrl.push(AlterarLoginESenhaPage);
  }goToAlterarCartODeCrDito(params){
    if (!params) params = {};
    this.navCtrl.push(AlterarCartODeCrDitoPage);
  }
}
