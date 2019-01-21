import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Reception from '../src/component/reception/Reception'
import Account from '../src/component/account/Account'
import Setting from '../src/component/setting/Setting'
import Error from '../src/component/Error'
import Navigation from '../src/component/Navigation'


const user = ({match})=>{
  return (<h1>hello {match.params.username}</h1>)
}

class App extends Component {

constructor(props){
  super(props);
  this.state = {AllTests:[],AllUsers:[],PtInfo:[],color:''}}


  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
      <Switch>
        
        <Route exact path="/" component={Reception} />
        <Route path="/account" component={Account} />
        <Route path="/setting" component={Setting} />
        <Route path="/kya" render={()=>(<h1>yeh kya</h1>) } />
        <Route path="/user/:username" exact strict component={user} />
        <Route component={Error}/>

      </Switch>
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
