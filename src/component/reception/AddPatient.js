

import React from 'react';

class AddPatient extends React.Component{
    constructor(props){
        super(props);
        this.state={ptInfo:[]}
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

handleSubmit(e){
    e.preventDefault();
     const data = new FormData()
     this.setState(state=>({
        ptInfo :state.ptInfo.concate(data)
     }
         
     ))
}


render(){
    return(
        <div className="card" >
            <form   onSubmit={this.handleSubmit}>           
                <div className="form-group">
                <input className="form-control" placeholder="Patient Name" />
                <input className="form-control" placeholder="Last Name"  />
                <select className="form-control"><option>M</option><option>F</option><option>O</option></select>
                <input className="form-control" placeholder="Age" />
                <input className="form-control" placeholder="Phone Number"  />
                <input className="form-control" placeholder="Physycian" />
                </div>
          <button className="btn btn-outline-success" >Auto Save</button>
            </form>
            <div>
                <ul>{this.state.ptInfo.map(dt=>(
                    <li>{dt.name + dt.value}</li>
                ))}</ul>
            </div>
        </div>
    )
}

}
export default AddPatient;