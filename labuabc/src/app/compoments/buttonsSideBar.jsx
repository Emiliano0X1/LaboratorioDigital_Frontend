"use client";
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { usePages } from "../context"
import { useRouter } from "next/navigation";

export default function ButtonsSideBar(){
    const [selectedButton,setSelectedButton] = useState("")

    const {managePages} = usePages();

    const handleSelectColor = (button) => {
        setSelectedButton(button)
        managePages(button)
    }

    const router = useRouter();
    
    const buttons = [
        {label : "DashBoard", value : "rolesView"},
        {label : "Bandeja de Minijuegos", value : "suggestions"},
    ]

    return(
        <div className="mt-18 flex flex-col justify-center items-center">
            {buttons.map((button) => (
                <Button
                    key={button.value}
                    variant={"outline"}
                    className= {`w-full p-6 rounded-r-none 
                        ${selectedButton === button.value ? "bg-slate-300 border-slate-300  hover:bg-slate-300 hover:border-slate-300 text-cyan-900 hover:text-cyan-900" 
                            : "bg-cyan-900 border-cyan-900 hover:bg-cyan-900 hover:border-cyan-900 text-slate-300 hover:text-slate-300"}`}
                    onClick={() => handleSelectColor(button.value)}
                >
                    {button.label}
                </Button>
            ))}
                <div className="mt-24">
                    <Button 
                        variant="outline" 
                        className="w-full p-6 rounded-none bg-cyan-900 border-cyan-900 hover:bg-cyan-900 hover:border-cyan-900 text-slate-300 hover:text-red-400"
                        onClick={() => router.push('/')}
                    >
                    Salir </Button>
                </div>  
            </div>
    )
}