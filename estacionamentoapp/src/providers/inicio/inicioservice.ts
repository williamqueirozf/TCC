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
export class ServiceProviderInicio {
//
        api : string = 'inicio/';        
        

  constructor(public http: Http,public conexaobd:Conexaobd) {
    //console.log(this.conexaobd.url);
     

  }


     postDataLogin(parans) {
        let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        return this.http.post(this.conexaobd.url + this.api + "apiLogin.php", parans, {
              headers:headers,
              method:"POST"
        }).map(
              (res:Response) => {return res.json();}
        );
      }

      getDataUsuarioId() {
            return this.http.get(this.conexaobd.url + this.api + 'apiRecuperaQrcode.php').map(res=>res.json())
      }

      getDataLogin() {
            return this.http.get(this.conexaobd.url + this.api + 'apiRecuperaLogin.php').map(res=>res.json())
      }

      getDataInicioVaga() {
            return this.http.get(this.conexaobd.url + this.api + 'apiRecuperaVaga.php').map(res=>res.json())
      }

      getDataNome() {
            return this.http.get(this.conexaobd.url + this.api + 'apiRecuperaNome.php').map(res=>res.json())
      }

      getDataTempoValor() { //valor a pagar por tempo de uso
            return this.http.get(this.conexaobd.url + this.api + 'apiRecuperaTempoValor.php').map(res=>res.json())
      }

      getDataFazerLogin() { //valor a pagar por tempo de uso
            return this.http.get(this.conexaobd.url + this.api + 'apiLogin.php').map(res=>res.json())
      }

      updateVaga(data) { //atualizar vaga utilizada
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.conexaobd.url + this.api + "apiUpdateVaga.php", data, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
}


}
