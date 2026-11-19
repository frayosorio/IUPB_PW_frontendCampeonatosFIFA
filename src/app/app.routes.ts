import {Routes} from '@angular/router';
import {InicioComponent} from '../features/componentes/inicio/inicio';
import {SeleccionComponente} from '../features/componentes/seleccion-componente/seleccion-componente';
import {CiudadComponente} from '../features/componentes/ciudad-componente/ciudad-componente';
import {AutorizacionGuarda} from '../core/guardas/autorizacion.guarda';

export const RUTA_DEFAULT = '/inicio';

export const routes: Routes = [
  {path: "", redirectTo: "inicio", pathMatch: "full"},
  {path: "inicio", component: InicioComponent},
  {path: "selecciones", component: SeleccionComponente, canActivate: [AutorizacionGuarda]},
  {path: "ciudades", component: CiudadComponente, canActivate: [AutorizacionGuarda]}
];
