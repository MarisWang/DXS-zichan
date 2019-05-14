import React from 'react';
import {Button, Drawer, Form, Icon, Input, message, Popconfirm, Table, Tag} from 'antd';
import {userLists} from "../../../js/jsondata";

export default class Authority extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      templates:userLists,
      userlists: [],
      templatelist: [],
      editTemplate:[],
      userid: "",
      webid: "",
    };
    this.columns = [
      {
        title: '#', dataIndex: '', key: 'key', width: '20px', render: (text, record, index) => {
          return (index + 1)
        }
      },
      {title: '名称', dataIndex: 'name', width: "200px"},
      {title: '用户名', dataIndex: 'username', sorter: (a, b) => this.tableSortFun(a,b,"name")},
      {title: '角色', dataIndex: 'role',
        filters: [
          { text: '超级管理员', value: '超级管理员' },
          { text: '组长', value: '组长' },
          { text: '用户', value: '用户' },
        ],
        onFilter: (value, record) => record.role.indexOf(value) === 0,
        sorter: (a, b) => this.tableSortFun(a,b,"role")
      },
      {title: '用户组', dataIndex: 'usergroup'},
      {title: '用户来源', dataIndex: 'usersource'},
      {
        title: '有效', dataIndex: 'valid',width: "60px", render: (text) => {
          if (text) {
            return <Icon type="check" style={{color:"green"}}/>
          } else {
            return <Icon type="close" style={{color:"red"}}/>
          }
        }
      },
      {
        title: '操作', width: "120px", dataIndex: 'operation', render: (text, record) => {
          return (
            <div>
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record)}>
                <Tag color="red" >删除</Tag>
              </Popconfirm>
              <Tag color="green" >更新</Tag>
            </div>
          );
        },
      },
    ]
  }
  /**删除指定数据**/
  handleDelete = async (record) => {
    let result = ["deleteBuyTemplate"];
    if (result.success) {
      await this.fetchUserTemplate();
      message.success("删除成功！");
    }
  };
  /**显示添加弹出框**/
  showAddDataDrawer = () => {
    this.showDrawer();
    this.setState({
      title: "添加作品",
    });
  };
  /**添加作品数据**/
  onAddDataClick = async () => {
    let {userid,webid} = this.state;
    if (userid !=="" && webid !=="") {
      let result = ["createBuyTemplate"];
      if (result.success) {
        await this.fetchUserTemplate();
        await this.closeDrawer();
        message.success("添加作品成功！");
      }
    } else {
      message.warning("You dont have images")
    }
  };
  /**显示添加边框**/
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  /**隐藏添加弹出窗口**/
  closeDrawer = () => {
    this.setState({
      visible: false,
      editvisible: false,
      userlists: [],
      userid: "",
      templatelist: [],
      edittemplate: {},
    });
  };
  /**下拉菜单改变事件**/

  render() {
    const { templates} = this.state;
    return (
      <div className="wrapper">
        <h3 style={{textAlign: "left", borderBottom: "1px solid rgb(202, 202, 202)", paddingBottom: "15px"}}>Templates</h3>
        <div className="displayflexend"><Button type="primary" onClick={this.showAddDataDrawer} htmlType={"button"}>Add data</Button></div>
        <br/>
        <Table rowKey={record => record["id"]} size={"small"} pagination={{defaultPageSize: 10}}
               bordered dataSource={templates} columns={this.columns}
               rowClassName="editable-row"
               expandedRowRender={record =>
                 <div className="displayflexstart">
                   <ul style={{width: "450px", textAlign: "left"}}>
                     <li><span>Creator:</span>{record.creator}</li>
                     <li><span>Desc:</span>{record.desc}</li>
                     <li><span>Theme:</span>{record["theme"]}</li>
                   </ul>
                   <ul style={{width: "450px", textAlign: "left"}}>
                     <li><span>Link To:</span><a href={record["linkweb"]} target="_blank"
                                                 rel="noopener noreferrer">{record["linkweb"]}</a></li>
                     <li><span>Tags:</span>{record["tags"]}</li>
                     <li><span>Sources:</span>{record["sources"]}</li>
                   </ul>
                 </div>
               }/>
        <Drawer title={this.state.title} placement="right" closable={false} closeDrawer={this.closeDrawer}
                visible={this.state.visible} destroyOnClose={true}>
          <Form className="login-form">
            Templates name：<Input className="templateName"/>
            Tags：<Input className="templateTags"/>
            Desc：<Input className="templateDesc"/>
            Link To：<Input className="templateLink"/>
            Creator：<Input className="creator"/>
            Price：<Input className="price"/>
            Sales：<Input className="sales"/>
            Rating：<Input className="rating"/>
            Theme：<Input className="theme"/>
            Sources：<Input className="source"/>
            <br/>
            <br/>
            <Button type="primary" onClick={() => this.onAddDataClick()} htmlType={"button"}>Add data</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary" onClick={() => this.closeDrawer()} htmlType={"button"}>Cancel</Button>
          </Form>
        </Drawer>
      </div>
    );
  }
}
