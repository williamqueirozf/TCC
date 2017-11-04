import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CadastrarDadosPessoais13Page } from '../cadastrar-dados-pessoais13/cadastrar-dados-pessoais13';
import { CadastrarLoginESenha23Page } from '../cadastrar-login-esenha23/cadastrar-login-esenha23';
import { CadastrarCartODeCrDitoPage } from '../cadastrar-cart-ode-cr-dito/cadastrar-cart-ode-cr-dito';

import { Validators,FormBuilder} from '@angular/forms';//colocado para formulario
import { ServiceProviderInicio } from '../../providers/inicio/inicioservice';//


import { Usuario } from './usuario';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
login ;
senha;
acesso : any = {};


  constructor(public navCtrl: NavController,
                public formBuilder: FormBuilder,
                public service : ServiceProviderInicio
                
            ) {
                this.acesso = this.formBuilder.group({
                login:['', Validators.required],
                senha:['', Validators.required]


  });
  }


  


  ngOnInit() {

  }

  /*fazerLogin(){
    
    console.log("clicou");  
    this.navCtrl.push(InicioPage); //redireciona para a tela inicial se tudo estiver certo
   
  }
*/

  loginDados() {                    
      this.service.postDataLogin(this.acesso.value)
            .subscribe(
                  data=>{
                    if(data.permissao === true){
                      
                    this.navCtrl.push(InicioPage); //redireciona para a tela inicial se tudo estiver certo*/
                    
                  }
                  else{
                    alert("Tente Novamente. Login ou Senha Inválidos")
                  }; //this.getDados();
                        
                  },
                  err=>console.log(err)
            );
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
