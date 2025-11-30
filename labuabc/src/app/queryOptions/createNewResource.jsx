
export const postNewResource = async (resourceBody) => {
    const response = await fetch("http://localhost:3000/api/resources/upload",{
        method : "POST",
        body : resourceBody
    })

    if(!response.ok){
        throw new Error('Error al guardar el libro')
    }

    return response.json()
}