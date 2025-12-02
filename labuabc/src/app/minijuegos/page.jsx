"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ResourceCarousel from "../compoments/ContentBox";
import Login from "../compoments/LoginButton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUser } from "../contextUser";

export default function Minigames(){

    const router = useRouter()
    const { user } = useUser()
    console.log("user :" ,user)

    const handlePanelNav = () => {
        router.push('/panelAdmin')
    }

    const handleMinijuegoNav = () => {
        router.push('/formsMinijuego')
    }

    return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-10 flex flex-col space-y-14 animate-fadeIn">
        <div className="flex justify-between items-center bg-white/70 backdrop-blur-md shadow-sm border-b py-4 px-10 rounded-xl mx-10">
            <div className="flex flex-row items-center gap-4">
            <h1 className="text-xl font-semibold text-gray-800">Bienvenido {user?.name}</h1>
            <Login></Login>
        </div>

        {user?.role === 'PROFESOR' && (
        <div>
            <Button variant="outline" className="shadow hover:scale-[1.03] transition" onClick={handleMinijuegoNav}>Crear un nuevo Minijuego</Button>
        </div>
        )}

        {user?.role === 'ADMIN' && (
        <div>
            <Button variant="outline" className="shadow hover:scale-[1.03] transition" onClick={handlePanelNav}>Panel de Control</Button>
        </div>
        )}
        </div>
        
        <ResourceCarousel topic="Minijuegos" topic_id={13}></ResourceCarousel>
            
        </main>
    );
}