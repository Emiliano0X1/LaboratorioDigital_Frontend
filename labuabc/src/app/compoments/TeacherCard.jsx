import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent } from "@/components/ui/card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { assignRole } from "../queryOptions/assignNewRole";

export default function TeacherCard({name, email}){

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn : assignRole,
        onSuccess : () => {
            queryClient.invalidateQueries({ queryKey: ['teachers'] })
            console.log("Se a eliminado al profesor con exito")
        },

        onError: (error) => {
            console.error("Hubo un error en el proceso: ", error)
        }
    })

    const handleChange = async () => {
        try{
            mutation.mutate({email, role : 'VISITANTE'})

        } catch (error){
            console.error("[ERROR EN EL HANDLE CHANGE] : ", error)
        }
    }

    return(
        <div className="flex">
            <Card className='bg-blue-50 p-4 mt-4 w-full'>
                <div className="flex items-center justify-between w-full">
                    <CardContent className='flex flex-col'>
                        <p className="text-black">{name}</p>
                        <p className="text-black">{email}</p>
                    </CardContent>

                    <CardAction className=''>
                        <Button variant='outline' onClick= {() => handleChange()}>Quitar permisos</Button>
                    </CardAction>
                </div>
            </Card>
        </div>
    )
}