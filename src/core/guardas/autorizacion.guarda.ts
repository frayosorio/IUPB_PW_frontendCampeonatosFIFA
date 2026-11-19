import {
  CanActivate,
  Router,
} from '@angular/router';
import {AutorizacionServicio} from '../servicios/autorizacion-servicio';
import {RUTA_DEFAULT} from '../../app/app.routes';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionGuarda implements CanActivate {

  constructor(private autorizacionServicio: AutorizacionServicio,
              private enrutador: Router) {
  }

  canActivate(): boolean {
    const token = this.autorizacionServicio.obtenerToken();

    if (token && !this.tokenExpirado(token)) {
      return true;
    } else {
      this.enrutador.navigate([RUTA_DEFAULT]);
      return false;
    }
  }

  private tokenExpirado(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp;
      const now = Math.floor(Date.now() / 1000);
      return exp < now;
    } catch (e) {
      return true; // si hay error, consideramos el token inválido
    }
  }

}
