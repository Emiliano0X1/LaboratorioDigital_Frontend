import { queryOptions } from "@tanstack/react-query";

export default function getAllResources(topic){
    return queryOptions({
        queryKey : ['resources', topic],
        queryFn : () => fetchResources(topic)
    });
}

const fetchResources = async (topic) => {
    const response = await fetch();
    //With this library I do not need to check posible error and only get the status
    return response.json();
}