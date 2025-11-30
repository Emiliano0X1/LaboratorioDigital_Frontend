import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent } from "@/components/ui/card";

export default function TeacherCard(){
    return(
        <div className="flex">
            <Card className='bg-blue-50 p-4 w-full'>
                <div className="flex items-center justify-between w-full">
                    <CardContent className='flex flex-col'>
                        <p className="text-black">Emiliano Gonzalez Perez</p>
                        <p className="text-black">emiliano.gonzalez@cetys.edu.mx</p>
                    </CardContent>

                    <CardAction className=''>
                        <Button variant='outline'>Quitar permisos</Button>
                    </CardAction>
                </div>
            </Card>
        </div>
    )
}