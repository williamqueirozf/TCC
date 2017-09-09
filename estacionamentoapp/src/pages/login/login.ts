import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CadastrarDadosPessoais13Page } from '../cadastrar-dados-pessoais13/cadastrar-dados-pessoais13';
import { CadastrarLoginESenha23Page } from '../cadastrar-login-esenha23/cadastrar-login-esenha23';
import { CadastrarCartODeCrDitoPage } from '../cadastrar-cart-ode-cr-dito/cadastrar-cart-ode-cr-dito';

import { Validators,FormBuilder} from '@angular/forms';//colocado para formulario
import { ServiceProviderInicio } from '../../providers/inicio/inicioservice';//

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
acesso : any[];
  constructor(public navCtrl: NavController,
                public formBuilder: FormBuilder,
                public service : ServiceProviderInicio
            ) {
               

  }




  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToCadastrarDadosPessoais13(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarDadosPessoais13Page);
  }goToCadastrarLoginESenha23(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarLoginESenha23Page);
  }goToCadastrarCartODeCrDito(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarCartODeCrDitoPage);
  }
}
