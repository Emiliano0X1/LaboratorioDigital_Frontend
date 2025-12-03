
export const assignRole = async({email, role}) => {
    const response = await fetch(`https://laboratoriodigital-backend.onrender.com/api/users/role`, {
        method : 'PATCH',
        headers: {
            "Content-Type": "application/json", // <- esto es clave
        },
        body : JSON.stringify({email, role})
    })

    if(!response.ok){
        throw new Error('Error al cambiar el rol')
    }

    return response.json()
}