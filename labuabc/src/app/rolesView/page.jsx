import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TeacherCard from "../compoments/TeacherCard";
import AssignRole from "../compoments/assingRole";

export default function RoleAssign(){

    //TODO - Fucntion to get ALL the profesors registered

    return(
        <div className="flex gap-6 p-10 w-full">
            <div className="w-7/12">
                <Card>
                    <CardHeader>
                        <CardTitle>Lista de Profesores</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <TeacherCard></TeacherCard>
                    </CardContent>
                </Card>
            </div>

            <div className="w-5/12 items-center">
                <Card>
                    <CardTitle className='text-center'>Asignar un nuevo Role</CardTitle>
                    <CardContent>
                        <AssignRole></AssignRole>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}