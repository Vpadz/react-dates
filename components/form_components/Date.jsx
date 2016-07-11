import React from 'react';

class DateSelect extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DateSelect';
    }
    handleDatePick(e){
      console.log(e.target.value);
    }
    render() {
        return ( 
          <div className="col-md-4">
            <input type="date" placeholder="Nombre..." onMouseLeave={this.handleDatePick}/>
          </div>);
    }
}

export default DateSelect;
