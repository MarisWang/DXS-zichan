import React, {Component} from 'react';
import {message} from "antd";
import history from "../js/history";

export default class  Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: "",
    }
  }

  valueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    let {email, password} = this.state;
    if (email==="admin@qq.com"&&password==="admin") {
      localStorage.setItem("logined",true);
      message.success("Logined");
      setTimeout(()=>{
        history.replace("dashboard");
        window.location.reload();
      },1000);
    }else{
      message.error("Failed")
    }
  };

  render() {
    return (
      <div className="contentBox displayflexcenter">
        <div className="contentInner">
          <h1>Login With Your Account</h1>
          <form>
            <input type="text"
                   name="email"
                   placeholder="Email:admin@qq.com"
                   autoFocus={true}
                   onChange={this.valueChange}/>
            <input type="password"
                   name="password"
                   placeholder="Password:admin"
                   onChange={this.valueChange}/>
            <span className="errorMsg">{this.state.errorMsg}</span>
            <a to={`/login`}>Forget your password?</a>
            <button onClick={(e) => this.handleLoginSubmit(e)}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}