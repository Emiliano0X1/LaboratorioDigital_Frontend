"use client";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import IsLoading from "./Loading";
import SliderItem from "./SliderItem";
import getAllResourcesByTopic from "../queryOptions/getAllResources";

export default function SliderBooks({topic, topic_id}){
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

    const {data, isLoading, error} = useQuery(getAllResourcesByTopic(topic_id)); //This is how i get the info from the database
    if(error){
        console.log("Hubo un error en el sistema", error)
    }

    return(
        <div className="w-full flex flex-col items-center">
            {isLoading ? ( <IsLoading /> ) : ( 
                <>
                    <div className="w-[80%] flex justify-between items-center mb-4">
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{topic}</h2>
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
                        {console.log("Data before renderizing : ", data.data)}
                        {data.data.data.map((resource) => (
                            <SliderItem key={resource.resource_id} resource={resource}></SliderItem>
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