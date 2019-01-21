import React from 'react';
import BillTableHeader from '../src/BillTableHeader'
import BillTableRow from '../src/BillTableRow'

function AddBill(props){
    
    return(
      <div className="span4 card">
          <table className="table"><tbody>
          <BillTableHeader />
          <BillTableRow AllTests={props.AllTests}  />
          </tbody></table></div>
        )}


export default AddBill;