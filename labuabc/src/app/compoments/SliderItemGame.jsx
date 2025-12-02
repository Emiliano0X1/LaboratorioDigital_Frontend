"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


export default function SliderItemGames({game}){
    
    if(!game) return null
    console.log(game)

    const handleNavigationToGameLink = () => {
        if(!game.game_url) return
        window.open(`${game.game_url}`, "_blank")
    }

    return(
        <div key={game.game_id} className="shrink-0 bg-white rounded-xl shadow-md w-72 h-80 overflow-hidden flex flex-col items-center">
            <Card
                className="cursor-pointer hover:shadow-lg transition"
                onClick = {() => handleNavigationToGameLink()}
            >
                <CardContent>
                    <Image
                        src={"/EmprendiFoto.jpeg"} //This can be the tumbail of the game
                        alt={"Hola mundo"} //
                        width={300}
                        height={200}
                        className="object-cover w-full h-48"
                    />
                    <h4 className="text-center mt-2 text-lg font-medium">
                        {game.title}
                    </h4>

                    <p className="text-center mt-2 text-lg font-medium">
                        {game.description}
                    </p>

                    <p className="text-center mt-2 text-lg font-medium">
                        {game.created_at}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}


