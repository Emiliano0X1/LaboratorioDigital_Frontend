"use client";
import SliderBooks from "../compoments/slider";
import LoginButton from "../compoments/LoginButton";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

//In this compoment FETCH all the resources using React Query
export default function BibliotecaDigital(){
    /*

    const disciplina1 = [
        { id: 1, img: "", title: "Libro 1" },
        { id: 2, img: "", title: "Libro 2" },
        { id: 3, img: "", title: "Libro 3" },
        { id: 4, img: "", title: "Libro 4" },
      ];
    
      const disciplina2 = [
        { id: 1, img: "", title: "Libro 1" },
        { id: 2, img: "", title: "Libro 2" },
        { id: 3, img: "", title: "Libro 3" },
        { id: 4, img: "", title: "Libro 4" },
      ];
    
      const disciplina3 = [
        { id: 1, img: "", title: "Libro 1" },
        { id: 2, img: "", title: "Libro 2" },
        { id: 3, img: "", title: "Libro 3" },
        { id: 4, img: "", title: "Libro 4" },
      ];

      

      */

      const router = useRouter()

      const handleNavigation = () => {
          router.push('/formsLibro')
      }

      return (
          <main className="space-y-12 py-10 flex flex-col items-center">
              
              <LoginButton></LoginButton>
              <Button variant="outline" onClick={handleNavigation}>Crear un nuevo Recurso</Button>
              
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