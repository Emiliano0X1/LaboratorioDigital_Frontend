"use client";
import { useRef } from "react";


export default function Forms() {

    const nombreJuegoRef = useRef(null);
    const descripcionJuegoRef = useRef(null);
    const gitPageRef = useRef(null);
    const gitRepo = useRef(null)


    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('title', nombreJuegoRef.current.value);
        //formData.append('creadorJuego', creadorRef.current.value);
        formData.append('description', descripcionJuegoRef.current.value);
        formData.append('game_url', gitPageRef.current.value);
        formData.append('repo_url', gitRepo.current.value)

        /*
        let dificultad = "";
        if (dificultadFacilRef.current.checked) {dificultad.push('Facil');}
        if (dificultadInterRef.current.checked) {dificultad.push('Intermedio');}
        if (dificultadDificilRef.current.checked) {dificultad.push('Dificil');}

        formData.append('dificultadJuego', dificultad);
        */
};

    return (
        <main>
        <h1> Crea tu nuevo minujuego </h1>
        <br/>

        <p>Nombre del minijuego:</p>
        <input type="text" ref={nombreJuegoRef} placeholder="Nombre"></input>
        <br/> <br/>

       { /* <p>Creador del juego:</p>
        <input type="text" ref={creadorRef} placeholder="Creador" />
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


       */}

        <p>Descripcion:</p>
        <input type="text" ref={descripcionJuegoRef} placeholder="Descripcion"></input>
        <br/> <br/>

        <p>Git Page del juego:</p>
        <input type="text" ref={gitPageRef}  placeholder="Introduzca la Github page con el minijuego"></input>
        <br/> <br/>

        <p>Repositorio del juego:</p>
        <input type="text" ref={gitRepo}  placeholder="Introduzca el link del repositroeio de github"></input>
        <br/> <br/>

        <button type="button" onClick={handleSubmit}>Enviar</button>
        </main>     
    );
};
