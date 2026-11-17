import {Usuario} from './Usuario';

export interface UsuarioLoginDto  {
  token: string;
  usuario: Usuario;
}
