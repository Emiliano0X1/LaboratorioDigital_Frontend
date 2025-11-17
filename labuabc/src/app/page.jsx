"use client";
import { useRef } from "react";
import Image from "next/image";
import SiliderBooks from "./compoments/slider";

export default function Home() {

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
          <SiliderBooks topicTittle= "Ciencias Naturales" resources={disciplina1}></SiliderBooks>
          <SiliderBooks topicTittle= "Fisica Cuantica" resources={disciplina2}></SiliderBooks>
          <SiliderBooks topicTittle= "Negocios Internacionales" resources={disciplina3}></SiliderBooks>
      </main>
  );
}