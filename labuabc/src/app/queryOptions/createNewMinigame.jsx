
export const postNewGame = async (gameBody) => {
    const response = await fetch("https://laboratoriodigital-backend.onrender.com/api/games", {
        method : 'POST',
        headers: { 
            Authorization: `Bearer ${session.access_token}`,
            "Content-Type": "application/json" 
        },
        body : JSON.stringify(gameBody)
    })

    if(!response.ok){
         let errorMessage = 'No se pudo crear el minijuego';
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
            // Si no se puede parsear el JSON, usar el mensaje por defecto
            errorMessage = `Error ${response.status}: ${response.statusText}`;
        }
        throw new Error(errorMessage);
    }

    return response.json()
}