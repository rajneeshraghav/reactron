import React from 'react'
import AddPatient from '../reception/AddPatient'
 import SearchPatient from '../reception/SearchPatient'

class Reception extends React.Component{
    constructor(props){
        super(props)
    }

render(){
return(
    <div>
    <SearchPatient />     
    <AddPatient />
    </div>
)}
}

export default Reception;