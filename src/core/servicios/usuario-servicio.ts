import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UsuarioLoginDto} from '../../shared/entidades/UsuarioLoginDto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}usuarios/`;
  }

  public iniciarSesion(usuario: string, password: string): Observable<UsuarioLoginDto> {
    return this.http.get<UsuarioLoginDto>(`${this.url}login/${usuario}/${password}`);
  }
}
