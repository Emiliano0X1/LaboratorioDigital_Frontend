"use client";
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { assignRole } from "../queryOptions/assignNewRole"
import { useState } from "react"

export default function AssignRole() {

    const queryClient = useQueryClient()

    const [email, setEmail] = useState("")
    const [rol, setRol] = useState("")

    const mutation = useMutation({
        mutationFn : assignRole,
        onSuccess : () => {
          queryClient.invalidateQueries({ queryKey: ['teachers'] })
          console.log("Rol asignado exitosamente")
        },

        onError : (error) => {
          console.error("Hubo un error: " , error.message)
        }
    })

    const handleSubmit = async () => {
        try{

            console.log(rol)
            console.log(email)

            if(!rol || !email){
                throw new Error("Hay campos vacios")
            }

            mutation.mutate({email, role : rol})

        } catch(error){
            console.error("Hubo un error en el fetch", error)
        }
    }


  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Correo del Profesor</FieldLabel>
            <Input id="username" type="text" placeholder="Max Leiter@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            <FieldDescription>
              Ingrese el correo del usuario
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="role">Rol Asignado</FieldLabel>
            <FieldDescription>
              Ingrese el rol del nuevo participante (Admin o Profesor)
            </FieldDescription>
            <Input id="role" type="text" placeholder="PROFESOR" onChange={(e) => setRol(e.target.value)}/>
          </Field>

          <Button onClick = {handleSubmit}>Submit</Button>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
