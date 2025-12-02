"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { postNewResource } from "../queryOptions/createNewResource";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"
import getTopics from "../queryOptions/getTopics";
import IsLoading from "../compoments/Loading";



export default function Forms() {

    const nombreRef = useRef(null);
    const descripcionRef = useRef(null);
    const archivoRef = useRef(null);
    const [selectedTopics, setSelectedTopics] = useState([])

    const {data, isLoading, error} = useQuery(getTopics())

    if(error){
      console.log("Hubo un error en el sistema", error)
    }

    const mutation = useMutation({
        mutationFn : postNewResource,
        onSuccess : () => {
          console.log("Recurso creado exitosamente")
        },

        onError : (error) => {
          console.error("Hubo un error: " , error.message)
        }
    })

    const handleSubmit = async () => {

      try{
          const formData = new FormData();
          formData.append('title', nombreRef.current.value);
          //formData.append('autor', autorRef.current.value);
          formData.append('description', descripcionRef.current.value);
          //formData.append('disciplina', disciplinaRef.current.value);
          formData.append('status', 'ENVIADO')
          formData.append('user_id',7)
          
          const file = archivoRef.current.files[0];
          if (file) {
              formData.append('file', file);
          }

          if(!file){
            throw new Error("Por favor subir un archivo valido")
          }
          
          if(selectedTopics.length > 0){
            formData.append('topic_ids', selectedTopics)
          } else{
            throw new Error("Seleccione un tema para el recurso")
          }
      
           for (const pair of formData.entries()) {
              console.log(pair[0], pair[1]);
          }
          mutation.mutate(formData)
      } catch(error){
        console.error("Hubo un error en el froms", error)
      }
    }

    const handleToggle = (id) => {
      setSelectedTopics(prev => prev.includes(id) ? prev.filter(item => item != id) : [...prev,id]) 
    }
  

    return (
      <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <main className="w-full min-h-screen flex justify-center items-start py-10 bg-gray-50">
          <div className="bg-white shadow-xl rounded-2xl p-10 w-[90%] max-w-3xl border">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Crear Nuevo Recurso
            </h1>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Nombre del Libro
                </label>
                <input
                  type="text"
                  ref={nombreRef}
                  placeholder="Escribe el nombre del recurso"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Descripción
                </label>
                <textarea
                  ref={descripcionRef}
                  placeholder="Describe brevemente el contenido"
                  className="w-full p-3 border rounded-lg h-28 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Subir Archivo
                </label>
                <input
                  type="file"
                  ref={archivoRef}
                  className="w-full border p-3 rounded-lg bg-gray-100 cursor-pointer"
                />
              </div>

              {/* Temáticas */}
              <div>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Seleccione las temáticas correspondientes
                </p>

                <div className="grid grid-cols-2 gap-3 bg-gray-100 p-4 rounded-xl border">
                  {data.data.data.map((topic) => (
                    <div
                      className="flex items-center gap-3"
                      key={topic.topic_id}
                    >
                      <Checkbox
                        id={topic.topic_id}
                        checked={selectedTopics.includes(topic.topic_id)}
                        onCheckedChange={() => handleToggle(topic.topic_id)}
                      />
                      <Label htmlFor={topic.topic_id}>{topic.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                handleSubmit();
                alert("Libro creado con exito");
                }}
                className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition shadow-md"
              >
                Enviar
              </button>
            </div>
          </div>
        </main>  
           
        )}
        </>
    );
}
