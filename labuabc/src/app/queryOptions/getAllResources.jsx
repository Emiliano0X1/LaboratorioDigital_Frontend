import { queryOptions } from "@tanstack/react-query";

export default function getAllResources(){
    return queryOptions({
        queryKey : ['resources'],
        queryFn : fetchResources
    });
}

const fetchResources = async () => {
    console.log("Antes de hacer el fetch")
    const response = await fetch(`http://localhost:3000/api/resources`);
    //With this library I do not need to check posible error and only get the status
    return response.json();
}