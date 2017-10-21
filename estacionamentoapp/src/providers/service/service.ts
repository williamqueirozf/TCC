import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import {Conexaobd} from '../../providers/conexao/conexao';

/*
  Generated class for the ServiceProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {

      //api : string = 'http://localhost:4000/APIEST/cadastropessoa/';
      api : string = 'cadastropessoa/';


  constructor(public http: Http, public conexaobd:Conexaobd) {}

    getData() {
    return this.http.get(this.conexaobd.url + this.api + 'apiRecupera.php').map(res=>res.json())
    }

    postData(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.conexaobd.url + this.api + "apiCadastro.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
    }


    updateData(data) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.conexaobd.url + this.api + "apiUpdate.php", data, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
    }


    updateCartao(data) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.conexaobd.url + this.api + "apiUpdateCartao.php", data, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
    }


    getCartao() {
    return this.http.get(this.conexaobd.url + this.api + 'apiRecuperaCartao.php').map(res=>res.json())
    }






}
