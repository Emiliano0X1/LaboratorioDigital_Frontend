"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const handleSiguiente = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handleAnterior = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

const disciplinas = {
  disciplina1: [
    { id: 1, img: "", title: "Libro 1" },
    { id: 2, img: "", title: "Libro 2" },
    { id: 3, img: "", title: "Libro 3" },
    { id: 4, img: "", title: "Libro 4" },
  ],
  disciplina2: [
    { id: 1, img: "", title: "Libro 1" },
    { id: 2, img: "", title: "Libro 2" },
    { id: 3, img: "", title: "Libro 3" },
    { id: 4, img: "", title: "Libro 4" },
  ],
  disciplina3: [
    { id: 1, img: "", title: "Libro 1" },
    { id: 2, img: "", title: "Libro 2" },
    { id: 3, img: "", title: "Libro 3" },
    { id: 4, img: "", title: "Libro 4" },
  ],
};

  return (
      <main className="space-y-12 py-10 flex flex-col items-center">
      <Link href="/forms">Forms</Link>
      <h1>Biblioteca digital</h1>
      <br/>
      {/* slider 1*/}
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">Disciplina 1</h2>
          <button className="text-blue-600 font-medium hover:underline">
            Ver más
          </button>
        </div>

        <div className="relative w-[80%] flex items-center">
          <button
            onClick={() => handleAnterior(sliderRef1)}
            className="absolute left-0 z-10 bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-10 h-24 flex items-center justify-center"
          >
            ←
          </button>

          <div
            ref={sliderRef1}
            className="flex overflow-x-scroll scroll-smooth gap-6 px-12 no-scrollbar"
          >
            {disciplinas.disciplina1.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 bg-white rounded-xl shadow-md w-72 h-64 overflow-hidden flex flex-col items-center"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <p className="text-center mt-2 text-lg font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleSiguiente(sliderRef1)}
            className="absolute right-0 z-10 bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-10 h-24 flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      {/* slider 2 */}
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">Disciplina 2</h2>
          <button className="text-blue-600 font-medium hover:underline">
            Ver más
          </button>
        </div>

        <div className="relative w-[80%] flex items-center">
          <button
            onClick={() => handleAnterior(sliderRef2)}
            className="absolute left-0 z-10 bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-10 h-24 flex items-center justify-center"
          >
            ←
          </button>

          <div
            ref={sliderRef2}
            className="flex overflow-x-scroll scroll-smooth gap-6 px-12 no-scrollbar"
          >
            {disciplinas.disciplina2.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 bg-white rounded-xl shadow-md w-72 h-64 overflow-hidden flex flex-col items-center"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <p className="text-center mt-2 text-lg font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleSiguiente(sliderRef2)}
            className="absolute right-0 z-10 bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-10 h-24 flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      {/* slider 3 */}

    </main>
  );
}