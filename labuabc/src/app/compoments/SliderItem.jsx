"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import getFileLinkById from "../queryOptions/getFileLinkById";
import { useQuery } from "@tanstack/react-query";


export default function SliderItem({resource}){
    
    if(!resource) return null
    console.log(resource)

    const {data, error} = useQuery(getFileLinkById(resource.file_id)); //This is how i get the info from the database
    if(error){
        console.log("Hubo un error en el sistema", error)
    }

    const handleNavigationToFileLink = () => {
        if(data.message) return 
        window.open(`${data.linkSupabase.publicURL}`, "_blank")
    }

    return(
        <div key={resource.resource_id} className="shrink-0 bg-white rounded-xl shadow-md w-72 h-80 overflow-hidden flex flex-col items-center">
            <Card
                className="cursor-pointer hover:shadow-lg transition"
                onClick = {() => handleNavigationToFileLink()}
            >
                <CardContent>
                    <Image
                        src={"/shinji.png"} //This is gonna be the thumbail of the PDF (1st Page) So TODO logic to get first IMAGE and show it -- resource.file.thumbail_url
                        alt={"Hola mundo"} //
                        width={300}
                        height={200}
                        className="object-cover w-full h-48"
                    />
                    <h4 className="text-center mt-2 text-base font-semibold line-clamp-2">
                        {resource.title}
                    </h4>

                    <p className="text-center mt-2 text-sm text-gray-600 line-clamp-2">
                        {resource.description}
                    </p>

                    <p className="text-center mt-2 text-sm text-gray-500">
                        {new Date (resource.created_at).toLocaleDateString("es-MX")}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}


