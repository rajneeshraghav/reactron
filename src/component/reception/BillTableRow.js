import React from 'react'

class BillTableRow extends React.Component {
    constructor(props){
        super(props)
    this.state = {}
    }
    
    render(){
        return(
<React.Fragment>
    {this.props.AllTests.map((test,index)=>(
 <tr key={test.testId} >
<td>{index+1}</td>
<td>{test.testName}</td>
 </tr>
    ))}
   
</React.Fragment>
        )
    }
}
export default BillTableRow;