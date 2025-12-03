import { queryOptions } from "@tanstack/react-query";

export default function getFileLinkById(file_id){
    return queryOptions({
        queryKey: ["fileLink", file_id],
        queryFn : () => fetchFileById(file_id),
        //enabled : !file_id
    })

}

const fetchFileById = async (file_id) => {
    const response = await fetch(`https://laboratoriodigital-backend.onrender.com/api/files/${file_id}`)
    return response.json()
}