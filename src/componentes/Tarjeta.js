import React, { Component } from 'react';

class Tarjeta extends Component{

    eliminarTarea(index)
    {
        if(window.confirm('¿Estás seguro de eliminar este elemento?'))
        {
            this.props.onEliminarTareas(this.props.tareas.filter((e, i) => {
                return i !== index;
            }));
        }
    }

    render()
    {
        const tarjetas = this.props.tareas.map((tarea, i) => {
            return(
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i} >
                    <div className="card mt-4 text-center" style={{minHeight: '305px'}}>
                        <div className="card-header">
                            <h5 className="card-title">{tarea.titulo}</h5>
                            <span className="badge badge-pill badge-danger mb-4 d-inline-block">
                                {tarea.prioridad}
                            </span>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{tarea.descripcion}</p>
                        </div>
                        <div className="card-footer">
                            <input onClick={this.eliminarTarea.bind(this, i)} type="button" id="btnEliminar" value="Eliminar" className="btn btn-danger ml-2"/>
                        </div>
                    </div>
                </div>
            );
        });
        return (tarjetas);
    }
}

export default Tarjeta;