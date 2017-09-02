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

      api : string = 'http://localhost:80/APIEST/';


  constructor(public http: Http) {}
      getData() {
            return this.http.get(this.api + 'apiRecuperaInicio.php').map(res=>res.json())
      }


}
