import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentForm from './Form';
import Requirements from './form_components/Requirements.jsx'

export default class  extends React.Component {

    render() {
        return (
          <div className="row">
            <AppointmentForm/>
          </div>);
    }
}

