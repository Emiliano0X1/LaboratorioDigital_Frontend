import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import getAllPendingGames from "../queryOptions/getAllPendingGames";
import IsLoading from "../compoments/Loading";
import { useMutation, useQuery } from "@tanstack/react-query";
import { assignStatus } from "../queryOptions/changeGameStatus";

export default function Suggestions() {

  const { data, isLoading, error } = useQuery(getAllPendingGames());

  if (error) {
    console.log("Hubo un error en el sistema", error);
  }

  const handleViewRepo = (game) => {
    if (!game.repo_url) return;
    window.open(game.repo_url);
  };

  const handleViewGame = (game) => {
    if (!game.game_url) return;
    window.open(game.game_url);
  };

  const mutation = useMutation({
          mutationFn : assignStatus,
          onSuccess : () => {
            console.log("Status asignado exitosamente")
          },
  
          onError : (error) => {
            console.error("Hubo un error: " , error.message)
          }
    });
  
      const handleSubmitAccepted = async (game_id) => {
          try{
              mutation.mutate({game_id : game_id, status : 'active'})
  
          } catch(error){
              console.error("Hubo un error en el fetch", error)
          }
      }

      const handleSubmitRejected = async (game_id) => {
          try{
              mutation.mutate({game_id : game_id, status : 'rejected'})
  
          } catch(error){
              console.error("Hubo un error en el fetch", error)
          }
      }

  return (
    <>
      {isLoading && <IsLoading />}

      
      {data?.data?.data.map((request, index) => (
        <div key={index} className="p-4 max-w-md">
          <Card className="p-4 rounded-2xl shadow-sm border">
            <div className="flex items-center justify-between mb-3">
              <CardTitle className="text-xl font-semibold">Solicitud {index}</CardTitle>
              <span className="text-sm text-muted-foreground">Pendiente</span>
            </div>

            {console.log(request.game_id)}

            <CardContent className="space-y-3">

              <div>
                <p className="text-sm font-medium text-muted-foreground">Titulo:</p>
                <p className="text-sm">{request.title}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Descripción:</p>
                <p className="text-sm">{request.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button variant="secondary" className="w-full" onClick={() => handleViewRepo(request)}>
                  Ver repositorio
                </Button>
                <Button variant="secondary" className="w-full" onClick={() => handleViewGame(request)}>
                  Ver juego
                </Button>
              </div>

              <div className="flex gap-2 pt-3">
                <Button className="flex-1" variant="default" onClick = {() => handleSubmitAccepted(request.game_id)}>
                  Aceptar
                </Button>
                <Button className="flex-1" variant="destructive" onClick = {() => handleSubmitRejected(request.game_id)}>
                  Rechazar
                </Button>
              </div>

            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
}
