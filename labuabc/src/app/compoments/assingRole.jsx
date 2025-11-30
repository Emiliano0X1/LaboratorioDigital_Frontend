import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function AssignRole() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Correo del Profesor</FieldLabel>
            <Input id="username" type="text" placeholder="Max Leiter@gmail.com" />
            <FieldDescription>
              Ingrese el correo del usuario
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="role">Rol Asignado</FieldLabel>
            <FieldDescription>
              Ingrese el rol del nuevo participante (Admin o Profesor)
            </FieldDescription>
            <Input id="role" type="text" placeholder="PROFESOR" />
          </Field>

          <Button>Submit</Button>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
