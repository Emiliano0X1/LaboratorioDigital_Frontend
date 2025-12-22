import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TeacherCard from "../compoments/TeacherCard";
import AssignRole from "../compoments/assingRole";
import { useQuery } from "@tanstack/react-query";
import { getAllTeachers } from "../queryOptions/getTeachers";

export default function RoleAssign(){

    //TODO - Fucntion to get ALL the profesors registered

    const {data, error} = useQuery(getAllTeachers)
    if(error){
        console.error("No se pudo obtener los profesores")
    }

    //console.log(data.data.data)

    return(

        <>
        {data && (
        <div className="flex gap-6 p-10 w-full">
            <div className="w-7/12">
                <Card>
                    <CardHeader>
                        <CardTitle>Lista de Profesores</CardTitle>
                    </CardHeader>

                    <CardContent>
                        {data?.data?.data?.map((teacher, index) => (
                            <TeacherCard name={teacher.name} email={teacher.email} key={index}></TeacherCard>
                        ))}
                        
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
        )}
        </>
    )
}