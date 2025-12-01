"use client";

import {createContext, useContext, useEffect, useState } from "react"
import { supabase } from "./supabaseClient";

const UserContext = createContext()

const UserProvider = ({children}) => {
   
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);

    useEffect(() => {
    // Esto se ejecuta solo en el cliente
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));

        const storedSession = localStorage.getItem("sb-ibcgfvetcvspyhfsejyj-auth-token");
        if (storedSession) setSession(JSON.parse(storedSession));
    }, []);

    const changeUser = (newUser) => {
        setUser(newUser);
        if(newUser){
            localStorage.setItem("user", JSON.stringify(newUser));
        }
        else{
            localStorage.removeItem("user")
        }
    }

    useEffect(() => {
        const {data : listener} = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            if(session){
                fetch("http://localhost:3000/api/users", {
                    method : 'POST',
                    headers : {
                        Authorization: `Bearer ${session.access_token}`,
                        "Content-Type": "application/json",
                    }
                })
                .then(res => res.json())
                .then(data => changeUser(data.data))
                .catch(err => console.error("Error fetch User: ", err))
            } else{
                changeUser(null)
            }
        });

        return () => listener.subscription.unsubscribe()
    }, [])

    return(
        <UserContext.Provider value={{user, setUser, session, setSession}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {useUser , UserProvider}