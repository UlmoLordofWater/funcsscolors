import React from "react";
import ReactDOM from "react-dom";
const App = props => {
    return <NumberOfStudents />;
  };
  
  class NumberOfStudents extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        enrolledStudents: 87,
        addAmount: 0,
        waitListedStudents: 87
      };
    }
  
    increment() {
      this.setState({
        enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount)
    });
    this.setState({ enrolledStudents: this.state.enrolledStudents + 1 });    
    };
    increment() {
       this.setState({
        waitListedStudents: this.state.waitListedStudents + parseInt(this.state.addAmount)
       })
        this.setState({ waitListedStudents: this.state.waitListedStudents + 1})
      };
  
    render() {
      return (
        <div>
          <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
          <button onClick={this.increment.bind(this)}> Add 1 Enrolled Student</button>
          <br></br>
          <h3>Add Multiple Enrolled Students:</h3>
          <input
            type="number"
            onChange={event => this.setState({ addAmount: event.target.value })}
            value={this.state.addAmount}
          />
          <button onClick={this.increment.bind(this)}>Increase Students</button>
          <h1>Waitlisted Students: {this.state.waitListedStudents}</h1>
           
          <button onClick={this.increment.bind(this)}>Add 1 Waitlisted Student</button>
          <br></br>
          <h3>Add Multiple Waitlisted Students:</h3>
           <input
            type="number"
            onChange={event => this.setState({ addAmount: event.target.value })}
            value={this.state.addAmount}
          />
          <button onClick={this.increment.bind(this)}>Increase Students</button>
         
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));