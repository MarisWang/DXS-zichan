import React from 'react';
import {Button, Drawer, Form, Input, message, Table, Tabs,Switch} from 'antd';
import {userTableHeader,SubtableHeader} from "./userTableHeader";
import {userLists} from "../../../js/jsondata";

const TabPane = Tabs.TabPane;

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: userLists,
      visible: false,
    };
  }
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
    });
  };
  /**添加作品数据**/
  onAddDataClick = async () => {
    let valid = true;
    if (valid) {
      let result = ["createContact"];
      if (result.success) {
        await this.closeDrawer();
        message.success("添加反馈信息成功！");
      } else {
        message.error(result.message)
      }
    }
  };
  showTotal=(total)=>{
    return `Total ${total} items`;
  };
  tabChangeCallback=(key)=>{
    console.log(key);
  };

  render() {
    let {visible, contacts} = this.state;
    return (
      <div className="wrapper">
        <div className="displayflexend"><Button type="primary" onClick={this.showDrawer} htmlType={"button"}>Add data</Button></div>
        <br/>
        <Table rowKey={record => record["id"]} rowClassName="editable-row" size={"small"}
               pagination={{showSizeChanger:true,showQuickJumper:true,total:contacts.length, showTotal:this.showTotal}}
               bordered dataSource={contacts}
               columns={userTableHeader}
               expandedRowRender={record =>
                 <Tabs defaultActiveKey="1" onChange={this.tabChangeCallback()}>
                   <TabPane tab="用户详情" key="1">
                     <div className="displayflexstart">
                       <ul style={{width: "30%", textAlign: "left"}}>
                         <li><span>邮箱地址：</span>admin@jumpserver.org</li>
                         <li><span>MFA认证:</span>禁用</li>
                         <li><span>失效日期:</span>2020-01-10 08:00:00</li>
                         <li><span>创建者:</span>System</li>
                       </ul>
                       <ul style={{width: "30%", textAlign: "left"}}>
                         <li><span>创建日期:</span>2017-12-12 16:13:20</li>
                         <li><span>最后登录:</span>2019-05-9 09:35:11</li>
                         <li><span>最后更新密码:</span>2018-12-21 10:59:09</li>
                         <li><span>备注:</span>Administrator is the super user of system</li>
                       </ul>
                       <ul style={{width: "30%", textAlign: "left"}}>
                         <li><span>强制启用MFA:</span><Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked size={"small"}/></li>
                         <li><span>重置MFA:</span><button className="small-button">重置</button></li>
                         <li><span>发送重置密码邮件:</span><button className="small-button">发送</button></li>
                         <li><span>发送重置密钥邮件:</span><button className="small-button">发送</button></li>
                       </ul>
                     </div>
                   </TabPane>
                   <TabPane tab="资产授权" key="2">
                     <Table rowKey={record => record["id"]} size={"small"}
                            pagination={{showSizeChanger:true,showQuickJumper:true,total:contacts.length, showTotal:this.showTotal}}
                            bordered
                            dataSource={[]}
                            columns={SubtableHeader}
                     />
                   </TabPane>
                 </Tabs>
               }
        />
        <Drawer title="添加联系方式" placement="right" closable={false} closeDrawer={this.closeDrawer}
                visible={visible} destroyOnClose={true}>
          <Form className="login-form">
            User Name：<Input className="itemsName"/>
            User Mobile：<Input className="itemsMobile"/>
            User Email：<Input className="itemsEmail"/>
            Sbuject：<Input className="itemsSbuject"/>
            Message：<Input className="itemsMessage"/>
            <br/><br/>
            <Button type="primary" onClick={() => this.onAddDataClick()} htmlType={"button"}>Add data</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary" onClick={() => this.closeDrawer()} htmlType={"button"}>Cancel</Button>
          </Form>
        </Drawer>
      </div>
    )
  }
}
