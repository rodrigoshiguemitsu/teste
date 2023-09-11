import { Request, Response } from "express";
import { ApagarUsuariosService } from "../../Services/Usuarios/ApagarUsuarioService";

class ApagarUsusariosController{
    async handle (req:Request, res:Response){
        const {deletar} =req.body
        const apagarUsusariosServices = new ApagarUsuariosService()
        const apagar = await apagarUsusariosServices.execute({
            deletar
        }) 
        return res.json(apagar)
    }
}

export {ApagarUsusariosController}