import { Table } from "reactstrap";
function TaskList(props) {
  
    //Comprobamos si existen las tareas
    if (!props.tasks || props.tasks.length === 0) return <h1>Aún no hay tareas</h1>
    return (
      <div className="container">
        <Table bordered striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {props.tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );    
            }
export default TaskList;
