import{Router} from"express";

import { UsuarioColaboradorController } from "../src/Controller/Usuarios/UsuariosColaboradorController";
import {ApagarUsusariosController} from "../src/Controller/Usuarios/UsuarioColaboradorApagar"
import { ListarUsuarioController } from "./Controller/Usuarios/ListarUsuarioController";
const router = Router()


//Post
router.post('/UsuariosColaborador', new UsuarioColaboradorController().handle)



//Delete
router.delete('/DeleteUsuariosColaborador', new ApagarUsusariosController().handle)


//Get
router.get('/ListarUsuario',new ListarUsuarioController().handle)

export{router}