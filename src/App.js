import React, { Component } from 'react';
import Navigation from './componentes/Navigation';
import Tarjeta from './componentes/Tarjeta';
import FormularioTarea from './componentes/FormularioTarea';
import {tareas} from './tareas.json';

class App extends Component {
  
    constructor(){
        super();
        this.state = {tareas}
        this.handleAddTarea = this.handleAddTarea.bind(this);
        this.handleEliminarTarea = this.handleEliminarTarea.bind(this);
    }

    handleEditarTarea(tareasEditadas)
    {
        this.setState({
            tareas: tareasEditadas
        });
    }

    handleEliminarTarea(tareasFiltradas)
    {
        this.setState({
            tareas: tareasFiltradas
        });
    }

    handleAddTarea(tarea)
    {
        this.setState({
            tareas : [...this.state.tareas, tarea]
        });
    }

    render() 
    {
        return (
            <div className="App">
                <Navigation nTareas={this.state.tareas.length}/>
                <div id="divContenedor" className="container-fluid my-5 px-0 px-sm-3 px-md-4 px-lg-5">
                    <div className="row mx-0">
                        <FormularioTarea onEditarTareas={this.handleEditarTarea} onAddTarea={this.handleAddTarea} />
                        <Tarjeta onEliminarTareas={this.handleEliminarTarea} tareas={this.state.tareas}/>
                    </div>     
                </div>
            </div>
        );
    }
}

export default App;
