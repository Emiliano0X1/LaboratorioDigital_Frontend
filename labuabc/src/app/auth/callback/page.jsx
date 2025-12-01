"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useUser } from "@/app/contextUser";

export default function Callback(){
    const router = useRouter()

    useEffect(() => {
        const handleSession = async () => {
            const {data : {session}} = await supabase.auth.getSession()

            if(!session){
                return router.push('/')
            }
            
            router.push("/biblioteca")
        }

        handleSession()
    }, [])

    return (
        <p>Thinking about the Evas ...</p>
    )
}