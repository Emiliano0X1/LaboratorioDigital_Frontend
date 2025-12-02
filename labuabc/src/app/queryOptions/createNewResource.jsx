export const postNewResource = async (resourceBody) => {
    const response = await fetch("http://localhost:3000/api/resources/upload", {
        method: "POST",
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