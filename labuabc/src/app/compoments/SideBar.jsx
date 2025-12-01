"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import ButtonsSideBar from "./buttonsSideBar";
import { useUser } from "../contextUser";


export default function SideBar(){

    const { user } = useUser();

    return (
    <>
        {user && (
        <div className="bg-cyan-900 w-1/5 h-screen">
            <div className="flex justify-center">
            <Avatar className="mt-10 h-30 w-30">
                <AvatarImage src="/images/kenny2.jpg" alt="FotoDePerfil" />
                <AvatarFallback>EG</AvatarFallback>
            </Avatar>
            </div>

            <div className="mt-6 text-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-white">
                {user.name}
            </h4>
            <p className="text-sm text-white">{user.email}</p>
            </div>

            <ButtonsSideBar />
        </div>
        )}
    </>
    );
}
