import React from 'react';

class Account extends React.Component{
    constructor(props){
        super(props);
        this.state={AccountLoggedIn:false,UserName:''}
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleClient(){
        let user = this.state.UserName;
        console.log(user);
        localStorage.setItem("User",user)
    }
    handleLogin(e){
      e.preventDefault();
      this.setState(state=>({
          AccountLoggedIn:!state.AccountLoggedIn,
          UserName : e.target.value
      }))
handleClient();
    }
    render(){
        return(
    <div>
        <form onSubmit={handleLogin()}>
        <input placeholder="User" />
        <button>Login</button>    
        </form>>
    </div>
     )
    }
    
}
export default Account;