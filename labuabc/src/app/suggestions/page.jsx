import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Suggestions(){
    return(
        <div className="p-4 max-w-md">
            <Card className="p-4 rounded-2xl shadow-sm border">
                <div className="flex items-center justify-between mb-3">
                <CardTitle className="text-xl font-semibold">Solicitud 1</CardTitle>
                <span className="text-sm text-muted-foreground">Pendiente</span>
                </div>

                <CardContent className="space-y-3">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Descripción:</p>
                    <p className="text-sm">Aquí va la descripción de la solicitud…</p>
                </div>

                <div>
                    <p className="text-sm font-medium text-muted-foreground">Solicitante:</p>
                    <p className="text-sm">Nombre del solicitante</p>
                </div>

                {/* Botones de acciones rápidas */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button variant="secondary" className="w-full">
                    Ver repositorio
                    </Button>
                    <Button variant="secondary" className="w-full">
                    Ver juego
                    </Button>
                </div>

                {/* Botones principales */}
                <div className="flex gap-2 pt-3">
                    <Button className="flex-1" variant="default">
                    Aceptar
                    </Button>
                    <Button className="flex-1" variant="destructive">
                    Rechazar
                    </Button>
                </div>
                </CardContent>
            </Card>
        </div>
    )
}