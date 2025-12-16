import { queryOptions } from "@tanstack/react-query";

const fetchTeacher = async() => {
    const response = await fetch("https://laboratoriodigital-backend.onrender.com/api/users/teachers")
    return response.json()
}

export const getAllTeachers = queryOptions({
        queryKey : ['teachers'],
        queryFn : fetchTeacher,
})
