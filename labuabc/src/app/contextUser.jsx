"use client";

import {createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [session, setSession] = useState(null);

    useEffect(() => {
        const storedSession = localStorage.getItem("sb-ibcgfvetcvspyhfsejyj-auth-token");
        if (storedSession) {
            setSession(JSON.parse(storedSession));
        }
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            if(!session) return;

            try{
                const response = await fetch("http://localhost:3000/api/users",{
                    method : "POST",
                    headers : {
                        Authorization : `Bearer ${session.access_token}`,
                        "Content-Type": "application/json"
                    },
                });

                if(!response.ok){
                    console.error("Ocurrió un error en el fetch");
                    return;
                }

                const data = await response.json()
                localStorage.setItem("user", JSON.stringify(data.data))
                setUser(data.data)

            } catch ( error ){
                console.error('Hubo un error en el fetch del user')
            }
        };

        fetchUser();
        const interval = setInterval(fetchUser, 30000); // cada 30 segundos
        return () => clearInterval(interval);
    }, [session]);

    return(
        <UserContext.Provider value={{user, setUser, setSession}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {useUser , UserProvider}