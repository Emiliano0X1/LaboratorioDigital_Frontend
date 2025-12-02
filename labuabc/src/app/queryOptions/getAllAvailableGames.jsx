import { queryOptions } from "@tanstack/react-query";

export default function getAllActiveGames(){
    return queryOptions({
        queryKey : ['gamesActive'],
        queryFn : fetchAllGames
    })
}

const fetchAllGames =  async () => {
    const response = await fetch(`http://localhost:3000/api/games?status=active`)
    return response.json()
}