import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";
import {AutorizacionServicio} from '../servicios/autorizacion-servicio';
import {Router} from '@angular/router';
import {RUTA_DEFAULT} from '../../app/app.routes';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private autorizacionServicio: AutorizacionServicio,
              private enrutador: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.autorizacionServicio.obtenerToken();
    let solicitud = req;
    if (token) {
      solicitud = req.clone({setHeaders: {Authorization: `Bearer ${token}`}})
    }

    return next.handle(solicitud).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.autorizacionServicio.cerrarSesion();
          this.enrutador.navigate([RUTA_DEFAULT])
        }
        return throwError(() => error)
      })
    );
  }

}
