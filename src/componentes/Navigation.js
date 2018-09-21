import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-darkest justify-content-center">
                <a className="navbar-brand" href=""><h3>Tareas</h3></a>
                <h5 className="badge-light badge-pill">{this.props.nTareas}</h5>
            </nav>
        );
    }
}

export default Navigation;