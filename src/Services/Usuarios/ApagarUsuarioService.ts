import prismaClient from "../../prisma";

interface ApagarUsuarioService{

    deletar:string
}

class ApagarUsuariosService{
    async execute({deletar}:ApagarUsuarioService){
        await prismaClient.user.delete({
            where:{
                id:deletar
            }
        })
        return {dados:'Registro apagado com sucesso'}
    }
}
export{ApagarUsuariosService}