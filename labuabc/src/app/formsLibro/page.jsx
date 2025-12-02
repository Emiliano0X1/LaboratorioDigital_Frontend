"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { postNewResource } from "../queryOptions/createNewResource";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getTopics from "../queryOptions/getTopics";
import IsLoading from "../compoments/Loading";
import { useUser } from "../contextUser";

export default function Forms() {
    const nombreRef = useRef(null);
    const descripcionRef = useRef(null);
    const archivoRef = useRef(null);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const { user } = useUser();
    const { data, isLoading, error } = useQuery(getTopics());

    if (error) {
        console.log("Hubo un error en el sistema", error);
    }

    const mutation = useMutation({
        mutationFn: postNewResource,
        onSuccess: (data) => {
            setSuccessMessage("¡Recurso creado exitosamente!");
            setErrorMessage("");
            // Limpiar el formulario
            if (nombreRef.current) nombreRef.current.value = "";
            if (descripcionRef.current) descripcionRef.current.value = "";
            if (archivoRef.current) archivoRef.current.value = "";
            setSelectedTopics([]);
            
            // Limpiar mensaje de éxito después de 5 segundos
            setTimeout(() => {
                setSuccessMessage("");
            }, 5000);
        },
        onError: (error) => {
            setErrorMessage("No se pudo crear el recurso. Por favor, intenta de nuevo.");
            setSuccessMessage("");
            console.error("Hubo un error: ", error.message);
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        try {
            // Validaciones
            if (!nombreRef.current?.value.trim()) {
                setErrorMessage("Por favor ingresa un nombre para el recurso");
                return;
            }

            if (!descripcionRef.current?.value.trim()) {
                setErrorMessage("Por favor ingresa una descripción");
                return;
            }

            const file = archivoRef.current?.files[0];
            if (!file) {
                setErrorMessage("Por favor sube un archivo válido");
                return;
            }

            if (selectedTopics.length === 0) {
                setErrorMessage("Selecciona al menos un tema para el recurso");
                return;
            }

            if (!user?.user_id) {
                setErrorMessage("No se pudo obtener la información del usuario. Por favor, inicia sesión nuevamente.");
                return;
            }

            const formData = new FormData();
            formData.append('title', nombreRef.current.value.trim());
            formData.append('description', descripcionRef.current.value.trim());
            formData.append('status', 'ENVIADO');
            formData.append('user_id', user.user_id);
            formData.append('file', file);
            formData.append('topic_ids', JSON.stringify(selectedTopics));

            mutation.mutate(formData);
        } catch (error) {
            setErrorMessage("Ocurrió un error inesperado. Por favor, intenta de nuevo.");
            console.error("Hubo un error en el formulario", error);
        }
    };

    const handleToggle = (id) => {
        setSelectedTopics(prev => 
            prev.includes(id) 
                ? prev.filter(item => item !== id) 
                : [...prev, id]
        );
    };

    const topics = data?.data?.data || [];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-10 px-4">
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Crear Nuevo Recurso</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <IsLoading />
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Mensaje de éxito */}
                                {successMessage && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                                        {successMessage}
                                    </div>
                                )}

                                {/* Mensaje de error */}
                                {errorMessage && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Nombre del recurso */}
                                <div className="space-y-2">
                                    <Label htmlFor="nombre">Nombre del recurso *</Label>
                                    <Input
                                        id="nombre"
                                        type="text"
                                        ref={nombreRef}
                                        placeholder="Ingresa el nombre del recurso"
                                        required
                                    />
                                </div>

                                {/* Descripción */}
                                <div className="space-y-2">
                                    <Label htmlFor="descripcion">Descripción *</Label>
                                    <Input
                                        id="descripcion"
                                        type="text"
                                        ref={descripcionRef}
                                        placeholder="Ingresa una descripción"
                                        required
                                    />
                                </div>

                                {/* Subir archivo */}
                                <div className="space-y-2">
                                    <Label htmlFor="archivo">Subir archivo *</Label>
                                    <Input
                                        id="archivo"
                                        type="file"
                                        ref={archivoRef}
                                        accept=".pdf"
                                        required
                                    />
                                    <p className="text-sm text-gray-500">Solo archivos PDF</p>
                                </div>

                                {/* Temas */}
                                <div className="space-y-2">
                                    <Label>Temáticas *</Label>
                                    {error ? (
                                        <p className="text-sm text-red-600">
                                            Error al cargar los temas. Por favor, recarga la página.
                                        </p>
                                    ) : topics.length === 0 ? (
                                        <p className="text-sm text-gray-500">No hay temas disponibles.</p>
                                    ) : (
                                        <div className="space-y-2 max-h-48 overflow-y-auto border rounded-lg p-4">
                                            {topics.map((topic) => (
                                                <div className="flex items-center gap-3" key={topic.topic_id}>
                                                    <Checkbox
                                                        id={`topic-${topic.topic_id}`}
                                                        checked={selectedTopics.includes(topic.topic_id)}
                                                        onCheckedChange={() => handleToggle(topic.topic_id)}
                                                    />
                                                    <Label 
                                                        htmlFor={`topic-${topic.topic_id}`}
                                                        className="cursor-pointer"
                                                    >
                                                        {topic.name}
                                                    </Label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Botón de envío */}
                                <Button 
                                    type="submit" 
                                    className="w-full"
                                    disabled={mutation.isPending}
                                >
                                    {mutation.isPending ? "Enviando..." : "Enviar Recurso"}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
