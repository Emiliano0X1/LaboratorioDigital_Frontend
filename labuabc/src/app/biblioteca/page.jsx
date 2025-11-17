import SliderBooks from "../compoments/slider";

//In this compoment FETCH all the resources using React Query
export default function BibliotecaDigital(){
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
    
    
      return (
          <main className="space-y-12 py-10 flex flex-col items-center">
              <SliderBooks topicTittle= "Ciencias Naturales" ></SliderBooks>
              <SliderBooks topicTittle= "Fisica Cuantica" ></SliderBooks>
              <SliderBooks topicTittle= "Negocios Internacionales"></SliderBooks>
          </main>
      );
}