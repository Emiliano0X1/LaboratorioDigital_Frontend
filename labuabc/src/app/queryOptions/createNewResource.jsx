export const postNewResource = async ({resourceBody, session}) => {

    console.log("Session al momento de hacer el post : ", session)
    
    const response = await fetch("https://laboratoriodigital-backend.onrender.com/api/resources/upload", {
        method: "POST",
        headers : {
            Authorization: `Bearer ${session.access_token}`,
        },
        body: resourceBody
    });

    if (!response.ok) {
        let errorMessage = 'No se pudo crear el recurso';
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
            // Si no se puede parsear el JSON, usar el mensaje por defecto
            errorMessage = `Error ${response.status}: ${response.statusText}`;
        }
        throw new Error(errorMessage);
    }

    return response.json();
}