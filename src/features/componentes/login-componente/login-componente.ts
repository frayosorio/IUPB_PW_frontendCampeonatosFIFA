import {Component, Inject} from '@angular/core';
import {ReferenciasMaterialModule} from '../../../shared/modulos/referencias-material.module';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DatosLogin {
  usuario: string;
  clave: string;
}

@Component({
  selector: 'app-login-componente',
  imports: [
    ReferenciasMaterialModule,
    FormsModule
  ],
  templateUrl: './login-componente.html',
  styleUrl: './login-componente.css',
})
export class LoginComponente {
  constructor(
    public dialogRef: MatDialogRef<LoginComponente>,
    @Inject(MAT_DIALOG_DATA) public datos: DatosLogin) {
  }
}
