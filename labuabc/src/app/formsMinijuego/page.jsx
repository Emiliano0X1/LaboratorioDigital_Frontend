"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Forms() {

    const nombreJuegoRef = useRef(null);
    const creadorRef = useRef(null);
    const descripcionJuegoRef = useRef(null);
    const disciplinaJuegoRef = useRef(null);
    const dificultadFacilRef = useRef(null);
    const dificultadInterRef = useRef(null);
    const dificultadDificilRef = useRef(null);
    const gitPageRef = useRef(null);

    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('nombreJuego', nombreJuegoRef.current.value);
        formData.append('creadorJuego', creadorRef.current.value);
        formData.append('descripcionJuego', descripcionJuegoRef.current.value);
        formData.append('disciplinaJuego', disciplinaJuegoRef.current.value);
        formData.append('gitPageJuego', gitPageRef.current.value);

        let dificultad = "";
        if (dificultadFacilRef.current.checked) {dificultad.push('Facil');}
        if (dificultadInterRef.current.checked) {dificultad.push('Intermedio');}
        if (dificultadDificilRef.current.checked) {dificultad.push('Dificil');}

        formData.append('dificultadJuego', dificultad);

    const res = await fetch("http://localhost:3000/minijuego", { //fetch de la ruta backend (cambiar si es necesario)
      method: "POST",
      body: formData
    });

    const data = await res.json();
    console.log("Respuesta backend:", data);
};

    return (
        <main>
        <h1> Forms Page </h1>
        <br/>

        <p>Nombre del minijuego:</p>
        <input type="text" ref={nombreJuegoRef} placeholder="Nombre"></input>
        <br/> <br/>

        <p>Creador del juego:</p>
        <input type="text" ref={creadorRef} placeholder="Creador" />
        <br/> <br/>

        <p>Descripcion:</p>
        <input type="text" ref={descripcionJuegoRef} placeholder="Descripcion"></input>
        <br/> <br/>

        <p>Disciplina:</p>
        <input type="text" ref={disciplinaJuegoRef} placeholder="Disciplina"></input>
        <br/> <br/>

        <p>Dificultad:</p>
        <input type="checkbox" ref={dificultadFacilRef} />
        <label>Facil</label>
        <input type="checkbox" ref={dificultadInterRef} />
        <label>Intermedio</label>
        <input type="checkbox" ref={dificultadDificilRef} />
        <label>Dificil</label>
        <br/> <br/>

        <p>Git Page del juego:</p>
        <input type="text" ref={gitPageRef}  placeholder="Introduzca la Github page con el minijuego"></input>
        <br/> <br/>

        <button type="button" onClick={handleSubmit}>Enviar</button>
        </main>     
    );
};
