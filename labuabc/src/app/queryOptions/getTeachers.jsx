import { queryOptions } from "@tanstack/react-query";

export default function getAllTeachers(){
    return queryOptions({
        queryKey : ['teachers'],
        queryFn : fetchTeacher
    })
}

const fetchTeacher = async() => {
    const response = await fetch("http://localhost:3000/api/users/teachers")
    return response.json()
}