import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



/*
  Generated class for the ServiceProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider3 {

      api : string = 'http://localhost:80/APIEST/cadastropessoa/';

  constructor(public http: Http) {}
      getData() {
            return this.http.get(this.api + 'apiRecupera.php').map(res=>res.json())
      }
      

            postData(parans) {
            let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "apiCadastro3.php", parans, {
                  headers:headers,
                  method:"POST"
            }).map(
                  (res:Response) => {return res.json();}
            );
      }

}
