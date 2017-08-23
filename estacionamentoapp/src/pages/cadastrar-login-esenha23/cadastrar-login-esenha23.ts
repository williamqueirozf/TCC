import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarCartODeCrDitoPage } from '../cadastrar-cart-ode-cr-dito/cadastrar-cart-ode-cr-dito';

//bibliotecas adicionadas
import { LoadingController } from 'ionic-angular'; //metodo utilizado pra carregar pagina
import { Validators,FormBuilder} from '@angular/forms';//colocado para formulario


import { ServiceProvider2 } from '../../providers/service/service2';//

@Component({
  selector: 'page-cadastrar-login-esenha23',
  templateUrl: 'cadastrar-login-esenha23.html'
})
export class CadastrarLoginESenha23Page {
  cadastro2 : any = {};
  users : any[];
  nomes : boolean = true;
  teste:any ={
        text: 'entra'
  };

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public formBuilder: FormBuilder,
              public service : ServiceProvider2

              )
              {
               this.cadastro2 = this.formBuilder.group({
               login:['', Validators.required],
               senha:['', Validators.required]
});
 }
  goToCadastrarCartODeCrDito(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarCartODeCrDitoPage);
  }

  getDados() {
        //retorno de Dados
        this.service.getData()
              .subscribe(
                    data=> this.users = data,
                    err=> console.log(err)
              );
        }

        /*postDados() {
              console.log(this.cadastro.value);
        }*/
        postDados2() {
              this.service.postData(this.cadastro2.value)
                    .subscribe(
                          data=>{console.log(data.mensage);
                                this.getDados();
                          },
                          err=>console.log(err)
                    );
        }



}
