import {Icon, message, Popconfirm, Tooltip} from "antd";
import React from "react";

/**处理删除**/
const handleDelete = async (record) => {
  console.log(record.id);
  message.success("删除成功！");
};

/**sort event**/
const tableSortFun = (a, b, str) => {
  if (!isNaN(a[str])) {
    return parseFloat(a[str]) - parseFloat(b[str]);
  } else {
    return a[str].localeCompare(b[str])
  }
};

export const userTableHeader =  [
  {
    title: '#', dataIndex: '', key: 'key', width: '20px', render: (text, record, index) => {
      return (index + 1)
    }
  },
  {title: '名称', dataIndex: 'name', width: "200px"},
  {title: '用户名', dataIndex: 'username', sorter: (a, b) => tableSortFun(a,b,"username")},
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
    title: '激活中', dataIndex: 'valid',width: "60px", render: (text) => {
      return text ? <Icon type="check" style={{color: "green"}}/> : <Icon type="close" style={{color: "red"}}/>
    }
  },
  {
    title: '操作', width: "120px", dataIndex: 'operation', render: (text, record) => {
      return (
        <div>
          <Popconfirm title="Sure to delete?" onConfirm={() =>handleDelete(record)}>
            <Icon type="delete" style={{color:"#b00a20"}}/>
          </Popconfirm>
          &nbsp;&nbsp;&nbsp;
          <Tooltip title="更新">
            <Icon type="reload" style={{color:"#05892a"}}/>
          </Tooltip>
        </div>
      );
    },
  },
];

export const SubtableHeader =  [
  {
    title: '#', dataIndex: '', key: 'key', width: '20px', render: (text, record, index) => {
      return (index + 1)
    }
  },
  {title: '主机名', dataIndex: 'name', width: "200px"},
  {title: 'IP', dataIndex: 'username', sorter: (a, b) => this.tableSortFun(a,b,"username")},
  {title: '激活中', dataIndex: 'role',
    filters: [
      { text: '超级管理员', value: '超级管理员' },
      { text: '组长', value: '组长' },
      { text: '用户', value: '用户' },
    ],
    onFilter: (value, record) => record.role.indexOf(value) === 0,
    sorter: (a, b) => this.tableSortFun(a,b,"role")
  },
  {title: '系统用户', dataIndex: 'usergroup'}
];