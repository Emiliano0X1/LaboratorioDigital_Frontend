
export const assignStatus = async({game_id, status}) => {
    const response = await fetch(`https://laboratoriodigital-backend.onrender.com/api/games/7`, {
        method : 'PATCH',
        headers: {
            "Content-Type": "application/json", // <- esto es clave
        },
        body : JSON.stringify({status})
    })

    if(!response.ok){
        throw new Error('Error al cambiar el status del juego')
    }

    return response.json()
}