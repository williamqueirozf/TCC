import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//bibliotecas adicionadas
import { LoadingController } from 'ionic-angular'; //metodo utilizado pra carregar pagina
import { Validators,FormBuilder} from '@angular/forms';//colocado para formulario

import { InicioPage } from '../inicio/inicio';

import { ServiceProvider3 } from '../../providers/service/service3';//

@Component({
  selector: 'page-cadastrar-cart-ode-cr-dito',
  templateUrl: 'cadastrar-cart-ode-cr-dito.html'
})
export class CadastrarCartODeCrDitoPage {
  cadastro3 : any = {};
   users : any[];
   nomes : boolean = true;
   teste:any ={
         text: 'entra'
       };

       constructor(public navCtrl: NavController,
                   public loadingCtrl: LoadingController,
                   public formBuilder: FormBuilder,
                   public service : ServiceProvider3

                   )
                   {
                    this.cadastro3 = this.formBuilder.group({
                    nomecartao:['', Validators.required],
                    numerocartao:['', Validators.required],
                    codigoverificador:['', Validators.required],
                    validade:['', Validators.required]

     });
      }
      goToInicio(params){
        if (!params) params = {};
        this.navCtrl.setRoot(InicioPage);
      }

      getDados() {
      //retorno de Dados
      this.service.getData()
            .subscribe(
                  data=> this.users = data,
                  err=> console.log(err)
            );
      }

      /*postDados3() {
            console.log(this.cadastro3.value);
      }*/
      postDados3() {
            this.service.postData(this.cadastro3.value)
                  .subscribe(
                        data=>{console.log(data.mensage);
                              this.getDados();
                        },
                        err=>console.log(err)
                  );
      }


}
