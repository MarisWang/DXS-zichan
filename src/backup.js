import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import history from "../js/history";
import {Layout,Icon, Avatar} from 'antd';
import {message} from "antd";
import Login from "./login";
import Dashboard from './modules/dashboard';
import Asset from './modules/asset';
import Authority from "./modules/IDCAsset";
import Users from './modules/users';
import MenuComponent from "./modules/menu";


message.config({
  top: 20,
  duration: 3,
  maxCount: 1,
});

const {Header, Footer, Sider, Content} = Layout;

const routes = [
  {path: "/", exact: true, main: Dashboard},
  {path: "/dashboard", exact: true, main: Dashboard},
  {path: "/asset", main: Asset},
  {path: "/user", main: Users},
  {path: "/IDCAsset", main: Authority},
  {path: "/menu", main: MenuComponent},
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
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

  handleClick = (key) => {
    history.replace(`/${key}`);
    this.setState({
      current: key
    });
  };

  render() {
    let logined = localStorage.getItem("logined");
    return (
      <div>
        {
          logined ?
            <Layout style={{height: 'auto'}}>
              <Sider style={{width: '260px'}}>
                <div className="logoContent displayflexbetween">
                  <img src={require("../images/logo-SampleOnly.svg")} alt=""/>
                  <Icon type="bars" />
                </div>
                <ul>
                  <li onClick={()=>this.handleClick("dashboard")}><Icon type="dashboard" />仪表盘</li>
                  <li className="user"><Icon type="usergroup-add" />用户管理 <Icon type="right" />
                    <div className="submenu userManage">
                      <a onClick={()=>this.handleClick("user")}>用户</a>
                      <a onClick={()=>this.handleClick("user")}>用户组</a>
                    </div>
                  </li>
                  <li className="asset"><Icon type="medicine-box" />资产管理 <Icon type="right" />
                    <div className="submenu assetManage">
                      <a onClick={()=>this.handleClick("asset")}>资产</a>
                      <a onClick={()=>this.handleClick("asset")}>网域</a>
                      <a onClick={()=>this.handleClick("asset")}>系统用户</a>
                      <a onClick={()=>this.handleClick("asset")}>服务用户</a>
                      <a onClick={()=>this.handleClick("asset")}>管理用户</a>
                      <a onClick={()=>this.handleClick("asset")}>标签管理</a>
                      <a onClick={()=>this.handleClick("asset")}>命令过滤</a>
                      <a onClick={()=>this.handleClick("asset")}>批量任务</a>
                    </div>
                  </li>
                  <li onClick={()=>this.handleClick("IDCAsset")}><Icon type="form" />权限管理 <Icon type="right" /></li>
                  <li onClick={()=>this.handleClick("likedwebs")}><Icon type="ordered-list" />会话管理 <Icon type="right" /></li>
                  <li><Icon type="safety-certificate" />防火墙管理 <Icon type="right" /></li>
                  <li><Icon type="project" />作业中心 <Icon type="right" /></li>
                  <li><Icon type="database" />日志审计 <Icon type="right" /></li>
                  <li className="menu"><Icon type="appstore" />菜单管理 <Icon type="right" />
                    <div className="submenu menuManage">
                      <a onClick={()=>this.handleClick("menu")}>仪表盘</a>
                      <a onClick={()=>this.handleClick("menu")}>导航栏</a>
                    </div>
                  </li>
                  <li><Icon type="setting" />设置</li>
                </ul>
              </Sider>
              <Layout >
                <Header className="displayflexend">
                  <Icon type="global" /> &nbsp; EN &nbsp;<Icon type="caret-down"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Avatar size="small" icon="user"/>&nbsp; Maris &nbsp;<Icon type="caret-down"/>
                </Header>
                <Content style={{height: "auto"}}>
                  {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
                  ))}
                </Content>
                <footer className="footer">Copyright TEACHDOG © 2014-2019</footer>
              </Layout>
            </Layout>
            :
            <Login/>
        }
      </div>
    );
  }
}
