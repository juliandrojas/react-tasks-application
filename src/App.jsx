import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Col, Row } from 'reactstrap';
import Title from './components/Title';
import { useState, useEffect } from "react";
import { tasks as data } from "./tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data)
  }, [])
  //Función para crear tareas
  function CreateTask(task) {
    /* Copiamos todos los elementos del arreglo de tareas 
    y añadimos el nuevo registro sin alterar el arreglo */
    setTasks([...task, task])
  }
  return (
    <>
    <Title />
    <Row className='container'>
      <Col md={6}>
        <TaskForm CreateTask = {CreateTask} />
      </Col>
      <Col md={6}>
        <TaskList task={ data } />
      </Col>
    </Row>
    </>
    
  )
}

export default App