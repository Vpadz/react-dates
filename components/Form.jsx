import React from 'react';
import Requirements from './form_components/Requirements';

const test =[ {
                'type':0,
                'type_name': 'pasaporte',
                'requisitos': ['copia de la cedula','foto carnet','1500bsf' ]
            },
            {
                'type':1,
                'type_name': 'cedula',
                'requisitos': ['partida de nacimiento (copia y original)']
            },
            {
                'type':2,
                'type_name': 'cadivi',
                'requisitos': ['copia de la cedula','tarjeta de credito','pasaporte']
            },
            {
                'type':3,
                'type_name': 'licencia',
                'requisitos': ['copia de la cedula','certidicado de salud','2000bsf']
            }

        ];

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AppointmentForm';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          data: test,
          current: 0
        }
    }
    handleSubmit(e){
      e.preventDefault();
      let fecha = document.getElementById('date').value;
      let full_name = document.getElementById('full_name').value;
      let email = document.getElementById('email').value;
      let select = document.getElementById('select').value;
      console.log(fecha, full_name , email, select);
    }
    handleSelect(e){
      console.log(e.target.value);
      this.setState({current: e.target.value});
      this.forceUpdate();
    }
    render() {
       // let requisitos = this.state.data[this.state.current].requisitos;
        return (
          <div>
          <form action="Get">
            <div className="datos row">

              <div className="form-group col-md-4">
                <label>Nombre Completo</label>
                <input type="text" name="full_name" id="full_name" placeholder="Nombre"/>
              </div>

              <div className="form-group col-md-4">
                <label>Email</label>
                <input type="email" name="email" id="email" placeholder="Nombre"/>
              </div>

              <div className="form-group col-md-4">
                <label>Fecha</label>
                <input type="date" name="date" id="date" placeholder="Nombre"/>
              </div>
              <div className="col-md-4 col-md-offset-4">
                <select id="select" onChange={this.handleSelect.bind(this)}>
                  <option value="0" defaultValue>{this.state.data[0].type_name}</option>
                  <option value="1">{this.state.data[1].type_name}</option>
                  <option value="2">{this.state.data[2].type_name}</option>
                  <option value="3">{this.state.data[3].type_name}</option>
                </select>
              </div>  
            </div>
              <Requirements requisitos={this.state.data[this.state.current].requisitos}/> 
            <input type="submit" onClick={this.handleSubmit}/>
          </form>
          </div>);
    }
}

export default AppointmentForm;
