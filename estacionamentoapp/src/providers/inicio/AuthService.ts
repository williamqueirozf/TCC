
import { Injectable, EventEmitter } from '@angular/core';


import { Usuario } from  '../../pages/login/usuario';

import { InicioPage } from '../../pages/inicio/inicio';


@Injectable()
export class AuthService {

  public usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor() { }

  fazerLogin(usuario: Usuario){

    if (usuario.login === 'usuario@email.com' && 
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;
      console.log('ok')
    


      //this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;

    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
