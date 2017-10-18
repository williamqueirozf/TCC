import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Conexaobd} from '../../providers/conexao/conexao';

//criada para trazer dados da tela inicial

/*
  Generated class for the ServiceProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProviderHistorico {


        //api : string = 'http://localhost:4000/APIEST/historico/';
        api : string = 'historico/'

  constructor(public http: Http,public conexaobd:Conexaobd) {}

      getDataHistorico() {
            return this.http.get(this.conexaobd.url + this.api + 'apiRecuperaHistorico.php').map(res=>res.json())
      }




}
