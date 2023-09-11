import prismaClient from "../../prisma";

class ListarUsuarioService{
    async execute(){
        const listarUsuarios = await prismaClient.user.findMany({})
        return(listarUsuarios)
    }
}

export {ListarUsuarioService}