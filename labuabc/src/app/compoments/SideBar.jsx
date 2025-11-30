"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import ButtonsSideBar from "./buttonsSideBar";


export default function SideBar({name,email}){
    return(
        <div className="bg-cyan-900 w-1/5 h-screen">
            <div className="flex justify-center">
                <Avatar className="mt-10 h-30 w-30">
                    <AvatarImage src="/images/kenny2.jpg" alt="FotoDePerfil"></AvatarImage>
                    <AvatarFallback>EG</AvatarFallback>
                </Avatar>
            </div>

            <div className="mt-6 text-center">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-white">{name}</h4>
                <p className="text-sm text-white">{email}</p>
            </div>

            <ButtonsSideBar></ButtonsSideBar>

        </div>
    )
}
