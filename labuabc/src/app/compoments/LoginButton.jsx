"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "../supabaseClient";

export default function Login(){
   
    const loginWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider : "google",
            options : {
                redirectTo : `${window.location.origin}/auth/callback`
            }
        })
    }

    return(
        <div>
            <Button onClick = {loginWithGoogle}> Login con Google</Button>
        </div>
    )
}