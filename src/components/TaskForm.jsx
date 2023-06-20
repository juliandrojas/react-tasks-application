import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label } from "reactstrap";

function TaskForm({ CreateTask }) {
  //Estado de las tareas
  const [title, setTitle] = useState("")
  const handleSubmit = (event) => {
    //Cancelamos la recarga del formulario que hace el navegador
    event.preventDefault();
    //Creamos una constante con la nueva tarea
    const newTask = {
      title: title

    }
    CreateTask(newTask);
  }
  return (
    <>
      <Card>
        <CardHeader>Formulario de inserción de tareas</CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Título de la tarea</Label>
              <Input
                placeholder="Ingresa el título de tu tarea"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Descripción de la tarea</Label>
              <Input
                placeholder="Ingresa la descripción de tu tarea"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </FormGroup>
            <Button color="primary" className="btn btn-block">
              Registrar Tarea
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default TaskForm;
