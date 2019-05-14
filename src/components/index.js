import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import history from "../js/history";
import {Icon, Avatar} from 'antd';
import {message} from "antd";
import {navigators} from "../js/jsondata";
import Login from "./login";
import routes from "./routes"


message.config({
  top: 20,
  duration: 3,
  maxCount: 1,
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      sidebarwidth: "220px",
      layoutwidth: "calc(100vw - 230px)",
      current: "dashboard",
    };
  }

  componentDidMount() {
    let query = window.location.pathname;
    let pathname = query.split("/")[1];
    if (pathname) {
      this.setState({
        current: pathname
      });
    }
  }

  collapsed = () => {
    let {collapsed} = this.state;
    if (collapsed) {
      this.setState({
        collapsed: !collapsed,
        sidebarwidth: "220px",
        layoutwidth: "calc(100vw - 230px)",
      })
    } else {
      this.setState({
        collapsed: !collapsed,
        sidebarwidth: "60px",
        layoutwidth: "calc(100vw - 70px)",
      })
    }
  };
  handleClick = (key) => {
    history.replace(`/${key}`);
    this.setState({
      current: key
    });
  };

  render() {
    let logined = localStorage.getItem("logined");
    let {collapsed, sidebarwidth, layoutwidth} = this.state;
    return (
      <div>
        {
          logined ?
            <div className="mainContent displayflexbetween">
              <div className="sidebar" style={{width: sidebarwidth}}>
                <div className="logoContent displayflexbetween">
                  {collapsed ? null :
                    <span style={{fontSize: "20px"}}>
                      <div className='App-logo-spin'>
                        <img className='App-logo' src={require("../images/deomo-logo.png")} alt="YUNA" style={{width: "60px"}}/>
                        <img src={require("../images/title.png")} alt="" style={{width: "60px"}}/>
                      </div>
                    </span>}
                  <Icon type="bars" onClick={this.collapsed}/>
                </div>
                <ul>
                  {
                    navigators.map((item, index) =>
                      item.submenu ?
                        <li className="menulist" key={index}><Icon type={item.type}/>
                          {collapsed ? null : item.name}
                          {collapsed ? null : <Icon type="right"/>}
                          <div className="submenu">
                            {
                              item.submenu.map((obj, i) =>
                                <a key={`sub${i}`} onClick={() => this.handleClick(obj.params)}>{obj.subname}</a>
                              )
                            }
                          </div>
                        </li>
                        :
                        <li key={index} onClick={() => this.handleClick(item.params)}>
                          <Icon type={item.type}/>{collapsed ? "" : item.name}
                        </li>
                    )
                  }
                </ul>
              </div>
              <div className="layout" style={{width: layoutwidth}}>
                <header className="layout-header displayflexend">
                  <Icon type="global"/> &nbsp; EN &nbsp;<Icon type="caret-down"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Avatar size="small" icon="user"/>&nbsp; Maris &nbsp;<Icon type="caret-down"/>
                </header>
                <section className="layout-content">
                  {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
                  ))}
                </section>
                <footer className="layout-footer">Copyright TEACHDOG © 2014-2019</footer>
              </div>
            </div>
            :
            <Login/>
        }
      </div>
    );
  }
}
