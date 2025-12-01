"use client";
import SliderBooks from "../compoments/slider";
import Login from "../compoments/LoginButton";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useUser } from "../contextUser";

//In this compoment FETCH all the resources using React Query
export default function BibliotecaDigital(){
      const router = useRouter()
      const { user } = useUser()
      console.log("user :" ,user)

      const handleNavigation = () => {
          router.push('/formsLibro') 
      }

      const handlePanelNav = () => {
        router.push('/panelAdmin')
      }

      return (
          <main className="space-y-12 py-10 flex flex-col">
              
              <div className="flex justify-between items-center">
                <div className="ml-20 flex flex-row items-center gap-4">
                  <h1 className="text-black">Bienvenido {user?.name}</h1>
                  <Login></Login>
                </div>

                {user?.role === 'PROFESOR' && (
                  <div className="mr-20">
                    <Button variant="outline" onClick={handleNavigation}>Crear un nuevo Recurso</Button>
                  </div>
                )}

                {user?.role === 'ADMIN' && (
                  <div className="mr-20">
                    <Button variant="outline" onClick={handlePanelNav}>Panel de Control</Button>
                  </div>
                )}
              </div>
              
              <SliderBooks topic= "Matematicas" topic_id={3}></SliderBooks>
              <SliderBooks topic= "Fisica" topic_id={4}></SliderBooks>
              <SliderBooks topic= "Quimica" topic_id={5}></SliderBooks>
              <SliderBooks topic= "Ciencias Sociales" topic_id={6}></SliderBooks>
              <SliderBooks topic= "Economia" topic_id={7}></SliderBooks>
              <SliderBooks topic= "Literatura e Historia" topic_id={8}></SliderBooks>     
              <SliderBooks topic= "Medicina" topic_id={9}></SliderBooks>
              <SliderBooks topic= "Biologia" topic_id={10}></SliderBooks>
              <SliderBooks topic= "Astronomia" topic_id={11}></SliderBooks>
              <SliderBooks topic="Tecnologia" topic_id={12}></SliderBooks>
          </main>
      );
}