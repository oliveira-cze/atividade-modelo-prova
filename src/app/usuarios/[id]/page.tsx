import UserDetails from "@/components/organisms/UserDetails"
import { UserService } from "@/service/UserService"

export default async function UsuarioDetalhes ({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const index = parseInt(id)

    const user = await UserService.getUserById(index)

    return (
        <UserDetails 
            user={user}
        />
    )

}