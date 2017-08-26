import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProviderDadospessoais } from '../../providers/service/servicedadospessoais';//

@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html'
})
export class DadosPessoaisPage {
  users : any[];
    constructor(public navCtrl: NavController,public service:ServiceProviderDadospessoais) {
  this.getDados();//inicio da requisição
  }

  getDados(){
    this.service.getData().subscribe(
            data=>this.users=data,
            err=>console.log(err)
    );
  }

}
