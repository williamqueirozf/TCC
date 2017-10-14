import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServiceProviderHistorico } from '../../providers/historico/historicoService';//

@Component({
  selector: 'page-hist-rico',
  templateUrl: 'hist-rico.html'
})
export class HistRicoPage {
	historicoUso : any[];

  constructor(public navCtrl: NavController,
  			  public serviceHistorico : ServiceProviderHistorico) {
			  this.getDados();//inicio da requisição
  }

 

getDados(){
  this.serviceHistorico.getDataHistorico().subscribe(
          data=>this.historicoUso=data,
          err=>console.log(err)
  );
}
}