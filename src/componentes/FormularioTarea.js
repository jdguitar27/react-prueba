import React, {Component} from 'react';

class FormularioTarea extends Component
{
    constructor(){
        super();
        this.state = {
            titulo: '',
            descripcion: '',
            prioridad: 'Muy Baja'
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.cargarFormulario = this.cargarFormulario.bind(this);
    }

    // cargarFormulario(titulo, descripcion, prioridad)
    // {
    //     this.setState({titulo, descripcion, prioridad});
    // }

    handleInput(e)
    {
        const { name, value} = e.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e)
    {
        e.preventDefault();
        this.props.onAddTarea(this.state);
        this.setState({
            titulo: '',
            descripcion: '',
            prioridad: 'Muy Baja'
        });
    }
    render()
    {
        return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
                <div className="card" style={{minHeight: '305px'}}>
                    <div className="card-header text-center">
                        <h4 className="card-title">Agregar nueva tarea</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input onChange={this.handleInput} value={this.state.titulo} type="text" name="titulo" id="titulo" className="form-control" placeholder="Título"/>
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleInput} value={this.state.descripcion} type="text" name="descripcion" id="descripcion" className="form-control" placeholder="Descripción"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Prioridad</label>
                                <select onChange={this.handleInput} value={this.state.prioridad} name="prioridad" className="form-control" id="exampleFormControlSelect1">
                                    <option>Muy Baja</option>
                                    <option>Baja</option>
                                    <option>Media</option>
                                    <option>Alta</option>
                                    <option>Muy Alta</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormularioTarea;