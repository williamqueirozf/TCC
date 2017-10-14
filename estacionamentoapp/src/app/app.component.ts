import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPage } from '../pages/perfil/perfil';
import { DadosPessoaisPage } from '../pages/dados-pessoais/dados-pessoais';
import { AlterarLoginESenhaPage } from '../pages/alterar-login-esenha/alterar-login-esenha';
import { AlterarCartODeCrDitoPage } from '../pages/alterar-cart-ode-cr-dito/alterar-cart-ode-cr-dito';
import { RedesCredenciadasPage } from '../pages/redes-credenciadas/redes-credenciadas';
import { HistRicoPage } from '../pages/hist-rico/hist-rico';
import { SobrePage } from '../pages/sobre/sobre';
import { LoginPage } from '../pages/login/login';
import { CadastrarDadosPessoais13Page } from '../pages/cadastrar-dados-pessoais13/cadastrar-dados-pessoais13';
import { CadastrarLoginESenha23Page } from '../pages/cadastrar-login-esenha23/cadastrar-login-esenha23';
import { CadastrarCartODeCrDitoPage } from '../pages/cadastrar-cart-ode-cr-dito/cadastrar-cart-ode-cr-dito';


import { InicioPage } from '../pages/inicio/inicio';



@Component({
  templateUrl: 'app.html'
})
export class estacionamentoApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HistRicoPage;//InicioPage

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
 goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToDadosPessoais(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DadosPessoaisPage);
  }goToAlterarLoginESenha(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlterarLoginESenhaPage);
  }goToAlterarCartODeCrDito(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlterarCartODeCrDitoPage);
  }goToRedesCredenciadas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RedesCredenciadasPage);
  }goToHistRico(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistRicoPage);
  }goToSobre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SobrePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToCadastrarDadosPessoais13(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastrarDadosPessoais13Page);
  }goToCadastrarLoginESenha23(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastrarLoginESenha23Page);
  }goToCadastrarCartODeCrDito(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastrarCartODeCrDitoPage);
  }


}
