import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//criada para trazer dados da tela inicial

/*
  Generated class for the ServiceProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProviderInicio {

      //api : string = 'http://localhost:80/APIEST/inicio/';
        api : string = 'http://localhost:4000/APIEST/inicio/';

  constructor(public http: Http) {}

      getDataUsuarioId() {
            return this.http.get(this.api + 'apiRecuperaQrcode.php').map(res=>res.json())
      }

      getDataLogin() {
            return this.http.get(this.api + 'apiRecuperaLogin.php').map(res=>res.json())
      }


      getDataInicioVaga() {
            return this.http.get(this.api + 'apiRecuperaVaga.php').map(res=>res.json())
      }

      getDataNome() {
            return this.http.get(this.api + 'apiRecuperaNome.php').map(res=>res.json())
      }

      getDataTempoValor() { //valor a pagar por tempo de uso
            return this.http.get(this.api + 'apiRecuperaTempoValor.php').map(res=>res.json())
      }

      getDataFazerLogin() { //valor a pagar por tempo de uso
            return this.http.get(this.api + 'apiLogin.php').map(res=>res.json())
      }

      updateVaga(data) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiUpdateVaga.php", data, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
}


}
