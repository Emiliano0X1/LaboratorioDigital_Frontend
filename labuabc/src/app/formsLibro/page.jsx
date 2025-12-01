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
      {isLoading ? ( <IsLoading /> ) : ( 
          
        <main>


          <h1> Forms Page </h1>
          <br/>
          <p>Nombre del libro:</p>
          <input type="text" ref={nombreRef} placeholder="Nombre"></input>
          <br/> <br/>
          <p>Descripcion:</p>
          <input type="text" ref={descripcionRef} placeholder="Descripcion"></input>
          <br/> <br/>
          <p>Subir archivo:</p>
          <input type="file" ref={archivoRef}></input>
          <br/> <br/>
          
          <p>Seleccione las tematicas correspondientes</p>
              {data.data.data.map((topic) => (
                <div className="flex items-center gap-3" key={topic.topic_id}>
                  <Checkbox id={topic.topic_id} checked = {selectedTopics.includes(topic.topic_id)} onCheckedChange = {() => handleToggle(topic.topic_id)}></Checkbox>
                  <Label htmlFor = {topic.topic_id}>{topic.name}</Label>
                </div>
              ))}
          <button type="button" onClick={handleSubmit}>Enviar</button>
        </main>  
        
        
        )}

        </>
    );

}
