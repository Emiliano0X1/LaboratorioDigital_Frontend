import { queryOptions } from "@tanstack/react-query";

export default function getAllResourcesByTopic(topic_id){
    return queryOptions({
        queryKey : ['resources', topic_id],
        queryFn : () => fetchResources(topic_id)
    });
}

const fetchResources = async (topic_id) => {
    console.log("Antes de hacer el fetch")
    const response = await fetch(`https://laboratoriodigital-backend.onrender.com/api/resource-topic/by-topic/${topic_id}`);
    //With this library I do not need to check posible error and only get the status
    return response.json();
}