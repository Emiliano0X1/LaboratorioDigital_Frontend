"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Forms() {


    return (
        <main>
        <h1> Forms Page </h1>
        <br/>
        <p>Nombre del libro:</p>
        <input type="text" id="nombreLibro" placeholder="Nombre"></input>
        <br/> <br/>
        <p>Autor o Editorial:</p>
        <input type="text" id="autorLibro" placeholder="Autor"></input>
        <br/> <br/>
        <p>Descripcion:</p>
        <input type="text" id="descripcionLibro" placeholder="Descripcion"></input>
        <br/> <br/>
        <p>Disciplina:</p>
        <input type="text" id="disciplinaLibro" placeholder="Disciplina"></input>
        <br/> <br/>
        <p>Subir archivo:</p>
        <input type="file" id="archivoLibro"></input>
        <br/> <br/>
        <button type="submit">Enviar</button>
        </main>     
    );
}