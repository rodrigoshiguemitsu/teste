import { Request, Response } from "express"
import {ListarUsuarioService} from '../../Services/Usuarios/ListarUsuarioService'

class ListarUsuarioController{

    async handle(req:Request , res:Response){
    

        const listarUsuarioService = new ListarUsuarioService()
        const listarUsuario = await listarUsuarioService.execute()
        return res.json(listarUsuario)
    }
}


export {ListarUsuarioController}