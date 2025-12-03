import { queryOptions } from "@tanstack/react-query";

export default function getAllPendingGames(){
    return queryOptions({
        queryKey : ['gamesActive'],
        queryFn : fetchAllGames
    })
}

const fetchAllGames =  async () => {
    const response = await fetch(`https://laboratoriodigital-backend.onrender.com/api/games?status=PENDING`)
    return response.json()
}