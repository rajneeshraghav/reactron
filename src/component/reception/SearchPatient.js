
import React from 'react'

class SearchPatient extends React.PureComponent {
    render(){
        return(<div>
            <form>
                <div className="form-group">
                <input className="from-control" placeholder="Search Patient" />

                </div>
                <button className="btn" >Search</button>
            </form>
        </div>)
    }
}
export default SearchPatient