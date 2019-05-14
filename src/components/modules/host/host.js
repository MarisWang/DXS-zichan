import React from 'react';
import {Tree, Button, Drawer, Form, Input, message, Popconfirm, Table, Icon, Tooltip, Popover, Switch} from 'antd';
import {userLists, treeData} from "../../../js/jsondata";

const DirectoryTree = Tree.DirectoryTree;
const {TreeNode} = Tree;

export default class Host extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      editvisible: false,
      viewtree: false,
      templates: userLists,
      selectedIP: "159.138.51.151",
      treeData: treeData
    };
    this.columns = [
      {
        title: '#', dataIndex: '', key: 'key', width: '20px', render: (text, record, index) => {
          return (index + 1)
        }
      },
      {title: '名称', dataIndex: 'name', width: "200px"},
      {title: '用户名', dataIndex: 'username', sorter: (a, b) => this.tableSortFun(a, b, "username")},
      {
        title: '角色', dataIndex: 'role',
        filters: [
          {text: '超级管理员', value: '超级管理员'},
          {text: '组长', value: '组长'},
          {text: '用户', value: '用户'},
        ],
        onFilter: (value, record) => record.role.indexOf(value) === 0,
        sorter: (a, b) => this.tableSortFun(a, b, "role")
      },
      {title: '用户组', dataIndex: 'usergroup'},
      {title: '用户来源', dataIndex: 'usersource'},
      {
        title: '有效', dataIndex: 'valid', width: "60px", render: (text) => {
          return text ? <Icon type="check" style={{color: "green"}}/> : <Icon type="close" style={{color: "red"}}/>
        }
      },
      {
        title: '操作', width: "120px", dataIndex: 'operation', render: (text, record) => {
          return (
            <div>
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record)}>
                <Icon type="delete" style={{color: "#b00a20"}}/>
              </Popconfirm>
              &nbsp;&nbsp;&nbsp;
              <Tooltip title="更新">
                <Icon type="reload" style={{color: "#05892a"}}/>
              </Tooltip>
            </div>
          );
        },
      },
    ]
  }

  /**删除指定数据**/
  handleDelete = async (record) => {
    let deletetemplate = ["deletetemplate"];
    if (deletetemplate.success) {
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
    let {fileList} = this.state;
    if (fileList.length > 0) {
      let createTempltes = ["createTempltes"];
      if (createTempltes.success) {
        await this.closeDrawer();
        message.success("添加模板成功！");
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
      fileList: [],
      previewVisible: false,
      editvisible: false,
      collectionType: "",
      editTemplate: {},
      avatarPreview: "",
    });
  };
  /**修改数据**/
  edit = (record) => {
    this.setState({
      editvisible: true,
      editTemplate: record,
      avatarPreview: record["img"]
    });
  };
  /**sort event**/
  tableSortFun = (a, b, str) => {
    if (!isNaN(a[str])) {
      return parseFloat(a[str]) - parseFloat(b[str]);
    } else {
      return a[str].localeCompare(b[str])
    }
  };
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    this.setState({
      selectedIP: selectedKeys,
      viewtree:!this.state.viewtree
    })
  };
  /**添加子元素**/
  onLoadData = treeNode => new Promise((resolve) => {
    setTimeout(() => {
      if (treeNode.props.children) {
        treeNode.props.dataRef.children.push({title: 'Child Node', id: `${treeNode.props.eventKey}-0`})
      } else {
        treeNode.props.dataRef.children = [
          {title: 'Child Node', id: `${treeNode.props.eventKey}-0`},
        ];
      }
      this.setState({
        treeData: [...this.state.treeData],
      });
      resolve();
    }, 1000);
  });
  /**渲染树形图**/
  renderTreeNodes = data => data.map((item) => {
    const content = (
      <div>
        <p><Icon type="plus-square" theme="filled"/>新建节点</p>
        <p><Icon type="edit" theme="filled"/>重命名</p>
        <p><Icon type="delete" theme="filled"/>删除节点</p>
        <p className="hr-line"><Icon type="copy" theme="filled" />添加资产到节点</p>
        <p><Icon type="close-square" theme="filled" />移动资产到节点</p>
        <p className="hr-line"><Icon type="interation" theme="filled" />更新节点资产硬件信息</p>
        <p><Icon type="delete" theme="filled"/>测试节点资产可连接性</p>
        <p className="hr-line"><Icon type="api" theme="filled" />刷新所有节点资产数量</p>
        <p className="hr-line"><Icon type="read" theme="filled" />显示所有子节点资产</p>
      </div>
    );
    if (item.children) {
      return (
        <TreeNode title={<span>{item.title}
          <Popover content={content} placement="rightTop">
            <Icon type="tool" theme="filled"/>
          </Popover>
        </span>} key={item.id} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} dataRef={item} key={item.id}/>;
  });
  /**右击事件**/
  onRightClick = (info) => {
    console.log('right click', info);
    this.onLoadData(info.node);
  };
  /**树形图开关**/
  switchViewTree = () => {
    this.setState({
      viewtree:!this.state.viewtree
    })
  };

  render() {
    const {templates, visible, selectedIP, treeData, viewtree} = this.state;
    return (
      <div className="wrapper">
        <div className="displayflexbetween">
          <div className="viewTree">
            <Button type="primary" htmlType={"button"} onClick={this.switchViewTree}>View Tree</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{color: "#e3e3e3", fontSize: "18px"}}>{selectedIP}</span>
            {viewtree ?
              <DirectoryTree
                defaultExpandAll
                defaultSelectedKeys={["151"]}
                onRightClick={this.onRightClick}
                onSelect={this.onSelect}>
                {this.renderTreeNodes(treeData)}
              </DirectoryTree>
              : ""
            }
          </div>
          <Button type="primary" onClick={this.showAddDataDrawer} htmlType={"button"}>Add data</Button>
        </div>
        <br/>

        <Table rowKey={record => record["id"]} size={"small"} pagination={{defaultPageSize: 10}}
               bordered dataSource={templates} columns={this.columns}
               expandedRowRender={record =>
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
               }/>
        <Drawer title="编辑" placement="right" closable={false} closeDrawer={this.closeDrawer}
                visible={visible} destroyOnClose={true}>
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

























