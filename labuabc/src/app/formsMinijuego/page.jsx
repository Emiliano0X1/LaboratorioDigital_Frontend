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
    const nombreGameRef = useRef(null);
    const descripcionGameRef = useRef(null);
    const repoRef = useRef(null);
    const githubPageRefRef = useRef(null);
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
            if (nombreGameRef.current) nombreGameRef.current.value = "";
            if (descripcionGameRef.current) descripcionGameRef.current.value = "";
            if (githubPageRef.current) githubPageRef.current.value = "";
            if (repoRef.current) repoRef.current.value = "";
            setSelectedTopics([]);
            
            // Limpiar mensaje de éxito después de 5 segundos
            setTimeout(() => {
                setSuccessMessage("");
            }, 5000);
        },
        onError: (error) => {
            setErrorMessage("No se pudo crear el minijuego. Por favor, intenta de nuevo.");
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
            if (!nombreGameRef.current?.value.trim()) {
                setErrorMessage("Por favor ingresa un nombre para el minijuego");
                return;
            }

            if (!descripcionGameRef.current?.value.trim()) {
                setErrorMessage("Por favor ingresa una descripción");
                return;
            }

            if (!githubPageRef.current?.value.trim()) {
                setErrorMessage("Por favor ingresa el link de Github Pages");
                return;
            }

            if (!repoRef.current?.value.trim()) {
                setErrorMessage("Por favor ingresa el link del repositorio");
                return;
            }
            

            const formData = new FormData();
            formData.append('title', nombreGameRef.current.value.trim());
            formData.append('description', descripcionGameRef.current.value.trim());
            formData.append('repoLink', repoRef.current.value.trim());
            formData.append('gitpageLink', githubPageRef.current.value.trim());
            formData.append('status', 'ENVIADO');
            formData.append('user_id', user.user_id);

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
                        <CardTitle className="text-2xl">Crear Nuevo Minijuego</CardTitle>
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
                                    <Label htmlFor="nombre">Nombre del Minijuego*</Label>
                                    <Input
                                        id="nombre"
                                        type="text"
                                        ref={nombreGameRef}
                                        placeholder="Ingresa el nombre del minijuego"
                                        required
                                    />
                                </div>

                                {/* Descripción */}
                                <div className="space-y-2">
                                    <Label htmlFor="descripcion">Descripción*</Label>
                                    <Input
                                        id="descripcion"
                                        type="text"
                                        ref={descripcionGameRef}
                                        placeholder="Ingresa una descripción"
                                        required
                                    />
                                </div>

                                {/* Link del repositorio */}
                                <div className="space-y-2">
                                    <Label htmlFor="repoLink">Link del repositorio*</Label>
                                    <Input
                                        id="repoLink"
                                        type="text"
                                        ref={repoRef}
                                        placeholder="Ingresa un link al repositorio"
                                        required
                                    />
                                </div>

                                {/* Link del Github Pages */}
                                <div className="space-y-2">
                                    <Label htmlFor="githubPageLink">Link del Github Pages*</Label>
                                    <Input
                                        id="githubPageLink"
                                        type="text"
                                        ref={githubPageRefRef}
                                        placeholder="Ingresa un link al Github Pages"
                                        required
                                    />
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
