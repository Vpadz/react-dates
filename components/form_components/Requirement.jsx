import React from 'react';

export default class Requirement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          checked: false
        };
    }
    componentDidMount() {
        console.log('Req Montado')  
    }
    handleCheck(e){
      //console.log(e.target.checked);
      this.setState({checked: e.target.checked});
      //console.log(this.state.checked);
    }
    render() {
   //   console.log(this.state.checked);
        return (
          <div className="col-md-12 form-control form-group text-center">
            <label style={this.state.checked ? {textDecoration: 'line-through'}:{textDecoration: 'none'}}>{this.props.data}</label>
            <input type="checkbox" onClick={this.handleCheck.bind(this)}/>
          </div>);
    }
}
