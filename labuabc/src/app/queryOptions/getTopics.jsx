import { queryOptions } from "@tanstack/react-query";

export default function getTopics(){
    return queryOptions({
        queryKey : ['topics'],
        queryFn : fetchTopics
    })
}

const fetchTopics = async () => {
    const response = await fetch("http://localhost:3000/api/topics")
    return response.json()
}