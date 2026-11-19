import {Injectable} from '@angular/core';

export const TOKEN_CLAVE = 'token';

@Injectable({
  providedIn: 'root',
})
export class AutorizacionServicio {

  guardarToken(token: string): void {
    localStorage.setItem(TOKEN_CLAVE, token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(TOKEN_CLAVE);
  }

  eliminarToken(): void {
    localStorage.removeItem(TOKEN_CLAVE);
  }

  estaAutenticado(): boolean {
    return this.obtenerToken() !== null;
  }

  cerrarSesion(): void {
    this.eliminarToken()
    //localStorage.removeItem('usuarioActual');
  }
}
