import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {App} from './app/app';
import {importProvidersFrom} from '@angular/core';
import {CoreModulo} from './core/core.modulo';
import {TOKEN_CLAVE} from './core/servicios/autorizacion-servicio';

localStorage.removeItem(TOKEN_CLAVE);
//localStorage.removeItem('usuarioActual');

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers!,
    importProvidersFrom(CoreModulo)
  ]
})
  .catch((err) => console.error(err));
