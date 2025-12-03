"use client";
import SliderBooks from "../compoments/slider";
import Login from "../compoments/LoginButton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUser } from "../contextUser";


// Improved visual layout, keeping everything exactly as you wrote
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
<main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-200 py-10 flex flex-col space-y-14 animate-fadeIn">
    <div className="flex justify-between items-center bg-white/70 backdrop-blur-md shadow-sm border-b py-4 px-10 rounded-xl mx-10">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-800">Bienvenido {user?.name}</h1>
          <Login></Login>
        </div>

        <div className="flex flex-row items-center gap-3">
          {(user?.role === 'PROFESOR' || user?.role === 'ADMIN') && (
          <Button variant="default" className="shadow hover:scale-[1.03] transition" onClick={handleNavigation}>
            Crear un nuevo Recurso
          </Button>
        )}

        {user?.role === 'ADMIN' && (
        <Button variant="outline" className="shadow hover:scale-[1.03] transition" onClick={handlePanelNav}>
          Panel de Control
        </Button>
        )}
      </div>
    </div>

    <SliderBooks topic="Matematicas" topic_id={3}></SliderBooks>
    <SliderBooks topic="Fisica" topic_id={4}></SliderBooks>
    <SliderBooks topic="Quimica" topic_id={5}></SliderBooks>
    <SliderBooks topic="Ciencias Sociales" topic_id={6}></SliderBooks>
    <SliderBooks topic="Economia" topic_id={7}></SliderBooks>
    <SliderBooks topic="Literatura e Historia" topic_id={8}></SliderBooks>
    <SliderBooks topic="Medicina" topic_id={9}></SliderBooks>
    <SliderBooks topic="Biologia" topic_id={10}></SliderBooks>
    <SliderBooks topic="Astronomia" topic_id={11}></SliderBooks>
    <SliderBooks topic="Tecnologia" topic_id={12}></SliderBooks>

</main>
);
}