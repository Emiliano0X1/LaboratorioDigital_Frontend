"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Forms() {

    const nombreRef = useRef(null);
    const autorRef = useRef(null);
    const descripcionRef = useRef(null);
    const disciplinaRef = useRef(null);
    const archivoRef = useRef(null);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('nombre', nombreRef.current.value);
        formData.append('autor', autorRef.current.value);
        formData.append('descripcion', descripcionRef.current.value);
        formData.append('disciplina', disciplinaRef.current.value);

        const file = archivoRef.current.files[0];
        if (file) {
            formData.append('archivo', file);
        }

    const res = await fetch("http://localhost:3000/libro", { //fetch de la ruta backend (cambiar si es necesario)
      method: "POST",
      body: formData
    });

    const data = await res.json();
    console.log("Respuesta backend:", data);
  };
        
    };

    return (
        <main>
        <h1> Forms Page </h1>
        <br/>
        <p>Nombre del libro:</p>
        <input type="text" ref={nombreRef} placeholder="Nombre"></input>
        <br/> <br/>
        <p>Autor o Editorial:</p>
        <input type="text" ref={autorRef} placeholder="Autor"></input>
        <br/> <br/>
        <p>Descripcion:</p>
        <input type="text" ref={descripcionRef} placeholder="Descripcion"></input>
        <br/> <br/>
        <p>Disciplina:</p>
        <input type="text" ref={disciplinaRef} placeholder="Disciplina"></input>
        <br/> <br/>
        <p>Subir archivo:</p>
        <input type="file" ref={archivoRef}></input>
        <br/> <br/>
        <button type="button" onClick={handleSubmit}>Enviar</button>
        </main>     
    );
