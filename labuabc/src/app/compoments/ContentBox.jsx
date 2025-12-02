import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import IsLoading from "./Loading";
import SliderItem from "./SliderItem";
import getAllResourcesByTopic from "../queryOptions/getAllResources";

export default function ResourceCarousel({ topic, topic_id }) {

    const [pageIndex, setPageIndex] = useState(0);
    const RESOURCES_PER_PAGE = 4;

    const { data, isLoading, error } = useQuery(getAllResourcesByTopic(topic_id));

    if (error) {
        console.log("Hubo un error en el sistema", error);
    }

    const resources = data?.data?.data || [];

    const visibleItems = resources.slice(pageIndex, pageIndex + RESOURCES_PER_PAGE);

    const handleNext = () => {
        if (pageIndex + RESOURCES_PER_PAGE < resources.length) {
            setPageIndex(prev => prev + RESOURCES_PER_PAGE);
        }
    };

    const handlePrevious = () => {
        if (pageIndex > 0) {
            setPageIndex(prev => prev - RESOURCES_PER_PAGE);
        }
    };

    return (
        <div className="w-full flex flex-col items-center">

            {isLoading ? (<IsLoading />) : (
                <>
                    <div className="w-[80%] flex justify-between items-center mb-4">
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            {topic}
                        </h2>
                        <button className="text-blue-600 font-medium hover:underline">
                            Ver más
                        </button>
                    </div>

                    <div className="relative w-[80%] flex items-center">

                        <div className="w-full grid grid-cols-4 gap-6 px-12">
                            {visibleItems.length === 0 ? (
                                <p>No hay recursos disponibles.</p>
                            ) : (
                                visibleItems.map((resource) => (
                                    <SliderItem key={resource.resource_id} resource={resource} />
                                ))
                            )}
                        </div>

                    </div>
                </>
            )}
        </div>
    );
}
