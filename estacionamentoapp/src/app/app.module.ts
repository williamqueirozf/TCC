import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { estacionamentoApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { CadastrarDadosPessoais13Page } from '../pages/cadastrar-dados-pessoais13/cadastrar-dados-pessoais13';
import { DadosPessoaisPage } from '../pages/dados-pessoais/dados-pessoais';
import { CadastrarLoginESenha23Page } from '../pages/cadastrar-login-esenha23/cadastrar-login-esenha23';
import { AlterarLoginESenhaPage } from '../pages/alterar-login-esenha/alterar-login-esenha';
import { CadastrarCartODeCrDitoPage } from '../pages/cadastrar-cart-ode-cr-dito/cadastrar-cart-ode-cr-dito';
import { AlterarCartODeCrDitoPage } from '../pages/alterar-cart-ode-cr-dito/alterar-cart-ode-cr-dito';
import { HistRicoPage } from '../pages/hist-rico/hist-rico';
import { PerfilPage } from '../pages/perfil/perfil';
import { SobrePage } from '../pages/sobre/sobre';
import { RedesCredenciadasPage } from '../pages/redes-credenciadas/redes-credenciadas';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ServiceProvider } from '../providers/service/service';//
import { ServiceProvider2 } from '../providers/service/service2';//
import { ServiceProvider3 } from '../providers/service/service3';//

import { HttpModule } from '@angular/http';//

@NgModule({
  declarations: [
    estacionamentoApp,
    InicioPage,
    LoginPage,
    CadastrarDadosPessoais13Page,
    DadosPessoaisPage,
    CadastrarLoginESenha23Page,
    AlterarLoginESenhaPage,
    CadastrarCartODeCrDitoPage,
    AlterarCartODeCrDitoPage,
    HistRicoPage,
    PerfilPage,
    SobrePage,
    RedesCredenciadasPage
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    HttpModule,//
    IonicModule.forRoot(estacionamentoApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    estacionamentoApp,
    InicioPage,
    LoginPage,
    CadastrarDadosPessoais13Page,
    DadosPessoaisPage,
    CadastrarLoginESenha23Page,
    AlterarLoginESenhaPage,
    CadastrarCartODeCrDitoPage,
    AlterarCartODeCrDitoPage,
    HistRicoPage,
    PerfilPage,
    SobrePage,
    RedesCredenciadasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ServiceProvider, useClass: ServiceProvider},//
    {provide: ServiceProvider2, useClass: ServiceProvider2},//
    {provide: ServiceProvider3, useClass: ServiceProvider3}//



  ]
})
export class AppModule {}
