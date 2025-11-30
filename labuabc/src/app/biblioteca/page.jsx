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
              
              <SliderBooks topic= "Matematicas"></SliderBooks>
              <SliderBooks topic= "Fisica" ></SliderBooks>
              <SliderBooks topic= "Quimica"></SliderBooks>
              <SliderBooks topic= "Ciencias Sociales"></SliderBooks>
              <SliderBooks topic= "Economia"></SliderBooks>
              <SliderBooks topic= "Literatura e Historia"></SliderBooks>     
              <SliderBooks topic= "Medicina"></SliderBooks>
              <SliderBooks topic= "Biologia"></SliderBooks>
              <SliderBooks topic= "Astronomia"></SliderBooks>
              <SliderBooks topic="Tecnologia"></SliderBooks>
          </main>
      );
}