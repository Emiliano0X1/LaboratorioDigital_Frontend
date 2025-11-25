import Image from "next/image";

export default function SliderItem({resource}){
    
    if(!resource) return null
    console.log(resource)

    return(
        <div
            key={resource.resource_id}
            className="shrink-0 bg-white rounded-xl shadow-md w-72 h-80 overflow-hidden flex flex-col items-center"
        >
            <Image
                src={""} //This is gonna be the thumbail of the PDF (1st Page) So TODO logic to get first IMAGE and show it -- resource.file.thumbail_url
                alt={"Hola mundo"} //
                width={300}
                height={200}
                className="object-cover w-full h-48"
            />
            <h4 className="text-center mt-2 text-lg font-medium">
                {resource.title}
            </h4>

            <p className="text-center mt-2 text-lg font-medium">
                {resource.description}
            </p>

            <p className="text-center mt-2 text-lg font-medium">
                {resource.created_at}
            </p>
        </div>
    )
}