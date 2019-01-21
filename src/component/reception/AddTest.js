

import React from 'react';

class AddTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {testName:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(e){
      this.setState({testName:e.target.value})
  }
  handleSubmit(e){
      e.preventDefault();
      this.props.Store(this.state.testName);
  }
   render(){
    return(
        <div className="span4 card">
        <div className="card-body">
        <form onSubmit={ this.handleSubmit}>
            <div className="form-group">
            <input placeholder="Test Name" className="form-control" onChange={this.handleChange} />
            </div>
                <button className="btn btn-outline-primary">Add Test</button>
           
                
            </form>
        </div>
            
            <p>{this.state.testName}</p>
        </div>
    )
   }
  
}
export default AddTest;