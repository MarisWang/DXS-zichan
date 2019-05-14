import React from 'react';
import {Button, Drawer, message, Table, Tabs,Switch} from 'antd';
import {userTableHeader,SubtableHeader} from "./userTableHeader";
import WrappedRegistrationForm from "./createUser";
import {userLists} from "../../../js/jsondata";


const TabPane = Tabs.TabPane;

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: userLists,
      visible: false,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
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

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    let {visible, contacts,loading, selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="wrapper">
        <div className="displayflexend"> {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}<Button type="primary" onClick={this.showDrawer} htmlType={"button"}>Add data</Button></div>
        <br/>
        <Table rowKey={record => record["id"]} rowClassName="editable-row" size={"small"}
               rowSelection={rowSelection}
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
                         <li><span>备注:</span> </li>
                       </ul>
                       <ul style={{width: "30%", textAlign: "left"}}>
                         <li><span>激活中:</span><Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked size={"small"}/></li>
                         <li><span>强制开启MFA:</span><button className="small-button">重置</button></li>
                         <li><span>重置谷歌严重:</span><button className="small-button">发送</button></li>
                         <li><span>添加到用户组:</span><button className="small-button">发送</button></li>
                       </ul>
                     </div>
                   </TabPane>
                 </Tabs>
               }
        />
        <Drawer title="创建用户"
                placement="right"
                width="auto"
                closable={true}
                closeDrawer={this.closeDrawer}
                visible={visible}
                onClose={this.closeDrawer}
                destroyOnClose={true}>
          <WrappedRegistrationForm />
        </Drawer>
      </div>
    )
  }
}
