"use client";

import { useRouter } from "next/navigation";

export default function LoginButton(){

    const router = useRouter();

    /* TODO - Not working yet
    const handleLoginButton = () => {
        window.location.href = "http://localhost:3000/api/users/login";
    }

    */

    return(
        <div className="flex p-3 items-start bg-black rounded text-amber-50 self-start ml-10">
            <button>Iniciar session con Google</button>
        </div>
    )
}