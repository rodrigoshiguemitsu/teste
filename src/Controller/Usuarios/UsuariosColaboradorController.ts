import { Request, Response } from "express"
import {UsuariosColaboradorServices} from '../../Services/Usuarios/CriarUsuarioService'

class UsuarioColaboradorController{

    async handle(req:Request , res:Response){
        const { nome, email, senha } = req.body
    

        const criarUsuariosServices = new UsuariosColaboradorServices()
        const usuarios = await criarUsuariosServices.execute({
            nome,
            email,
            senha
        })
        return res.json(usuarios)
    }
}


export {UsuarioColaboradorController}