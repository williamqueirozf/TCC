import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarLoginESenha23Page } from '../cadastrar-login-esenha23/cadastrar-login-esenha23';
import { CadastrarCartODeCrDitoPage } from '../cadastrar-cart-ode-cr-dito/cadastrar-cart-ode-cr-dito';


//bibliotecas adicionadas
import { LoadingController } from 'ionic-angular'; //metodo utilizado pra carregar pagina
import { Validators,FormBuilder} from '@angular/forms';//colocado para formulario


import { ServiceProvider } from '../../providers/service/service';//


@Component({
  selector: 'page-cadastrar-dados-pessoais13',
  templateUrl: 'cadastrar-dados-pessoais13.html'
})
export class CadastrarDadosPessoais13Page {
  
      cadastro : any = {};
      users : any[];
      nomes : boolean = true;
      teste:any ={
            text: 'entra'
      };



  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public formBuilder: FormBuilder,
              public service : ServiceProvider

              )
               {
                this.cadastro = this.formBuilder.group({
                nome:['', Validators.required],
                email:['', Validators.required],
                datanasc:['', Validators.required],
                cpf:['', Validators.required],
                telefone:['', Validators.required],
                sexo:['', Validators.required]

});
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


 /*postDados(){
    console.log(this.cadastro.value);
  }*/
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
        postDados() {
              this.service.postData(this.cadastro.value)
                    .subscribe(
                          data=>{console.log(data.mensage);
                                this.getDados();
                          },
                          err=>console.log(err)
                    );
        }


}
