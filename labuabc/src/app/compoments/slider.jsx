"use client";
import { useRef } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import getAllResources from "../queryOptions/getAllResources";
import IsLoading from "./Loading";

export default function SliderBooks({topic}){
    const sliderRef1 = useRef(null);

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

    const {data, isLoading, error} = useQuery(getAllResources()); //This is how i get the info from the database

    if(error){
        alert('Hubo un error en el servidor')
    }

    return(
        <div className="w-full flex flex-col items-center">
            {isLoading ? ( <IsLoading /> ) : ( 
                <>
                    <div className="w-[80%] flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-semibold">{topic}</h2>
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
                        {data.map((item) => (
                        <div
                            key={item.id}
                            className="shrink-0 bg-white rounded-xl shadow-md w-72 h-64 overflow-hidden flex flex-col items-center"
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
              </>
            )}
        </div>
    )
}