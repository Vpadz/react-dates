import React from 'react';
import Requirement from './Requirement.jsx';
export default class Requirements extends React.Component {

    componentDidMount() {
      console.log("componente se monto");     
    }

    render() {
        console.log(this.props.requisitos);
        let requirementNodes = this.props.requisitos.map((req,index)=>{
          return <Requirement data={req} key={index}/>
        });

        return (
          <div className="row">
            {requirementNodes}
          </div>);
    }
}


