export const userLists = [
  {
    id: 1,
    name: "Administrator",
    username: "admin",
    role: "超级管理员",
    usergroup: "Default",
    usersource: "Local",
    valid: true
  },
  {id: 2, name: "dony", username: "dony", role: "组长", usergroup: "", usersource: "Local", valid: true},
  {id: 3, name: "jeff", username: "jeff", role: "超级管理员", usergroup: "", usersource: "Local", valid: false},
  {id: 4, name: "maris", username: "maris", role: "超级管理员", usergroup: "", usersource: "Local", valid: true},
  {id: 5, name: "oldseven", username: "oldseven", role: "组长", usergroup: "", usersource: "Local", valid: true},
  {id: 6, name: "test", username: "test", role: "超级管理员", usergroup: "", usersource: "Local", valid: false},
  {id: 7, name: "test2019", username: "test2019", role: "用户", usergroup: "", usersource: "Local", valid: true},
  {
    id: 8,
    name: "Administrator",
    username: "Administrator",
    role: "超级管理员",
    usergroup: "",
    usersource: "Local",
    valid: false
  },
];

export const assetReport = [
  {
    id: 1,
    type: "pie",
    display: false,
    color: ["#DB6AD4", "#35CC2F", "#FF9873", "#6395EC", "#87CEFA"],
    data: [
      {value: 5, name: '虚拟机'},
      {value: 14, name: '租用'},
      {value: 56, name: '网络设备'},
      {value: 107, name: '云机'},
      {value: 383, name: '物理机'}]
  },
  {
    id: 2,
    type: "pie",
    display: true,
    color: ["#DB6AD4", "#35CC2F", "#FF9873", "#6395EC", "#87CEFA"],
    data: [
      {value: 5, name: '虚拟机'},
      {value: 14, name: '租用'},
      {value: 56, name: '网络设备'},
      {value: 107, name: '云机'},
      {value: 383, name: '物理机'}]
  },

  {
    id: 3,
    type: "pie",
    display: true,
    color: ["#DB6AD4", "#35CC2F", "#FF9873", "#6395EC", "#87CEFA"],
    data: [
      {value: 5, name: '虚拟机'},
      {value: 14, name: '租用'},
      {value: 56, name: '网络设备'},
      {value: 107, name: '云机'},
      {value: 383, name: '物理机'}]
  },
  {
    id: 4,
    type: "pie",
    display: true,
    color: ["#DB6AD4", "#35CC2F", "#FF9873", "#6395EC", "#87CEFA"],
    data: [
      {value: 5, name: '虚拟机'},
      {value: 14, name: '租用'},
      {value: 56, name: '网络设备'},
      {value: 107, name: '云机'},
      {value: 383, name: '物理机'}]
  },
  {
    id: 5,
    type: "pie",
    display: false,
    color: ["#DB6AD4", "#35CC2F", "#FF9873", "#6395EC", "#87CEFA"],
    data: [
      {value: 5, name: '虚拟机'},
      {value: 14, name: '租用'},
      {value: 56, name: '网络设备'},
      {value: 107, name: '云机'},
      {value: 383, name: '物理机'}]
  },
  {
    id: 6,
    type: "bar",
    display: true,
    color: ["#FFDB5C", "#FF9F7F", "#FB7293"],
    dimensions: ['product', 'data1', 'data2', 'data3'],
    data: [
      {product: '1月', 'data1': 43.3, 'data2': 85.8, 'data3': 93.7},
      {product: '2月', 'data1': 83.1, 'data2': 73.4, 'data3': 55.1},
      {product: '3月', 'data1': 86.4, 'data2': 65.2, 'data3': 82.5},
      {product: '4月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '5月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '6月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '7月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '8月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '9月', 'data1': 43.3, 'data2': 85.8, 'data3': 93.7},
      {product: '10月', 'data1': 43.3, 'data2': 85.8, 'data3': 93.7},
      {product: '11月', 'data1': 83.1, 'data2': 73.4, 'data3': 55.1},
      {product: '12月', 'data1': 86.4, 'data2': 65.2, 'data3': 82.5}
    ]
  },
  {
    id: 7,
    type: "bar",
    display: true,
    color: ["#37A2DA", "#32C5E9", "#9FE6B8"],
    dimensions: ['product', 'data1', 'data2', 'data3'],
    data: [
      {product: '1月', 'data1': 43.3, 'data2': 85.8, 'data3': 93.7},
      {product: '2月', 'data1': 83.1, 'data2': 73.4, 'data3': 55.1},
      {product: '3月', 'data1': 86.4, 'data2': 65.2, 'data3': 82.5},
      {product: '4月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '5月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '6月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '7月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '8月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '9月', 'data1': 43.3, 'data2': 85.8, 'data3': 93.7},
      {product: '10月', 'data1': 43.3, 'data2': 85.8, 'data3': 93.7},
      {product: '11月', 'data1': 83.1, 'data2': 73.4, 'data3': 55.1},
      {product: '12月', 'data1': 86.4, 'data2': 65.2, 'data3': 82.5}
    ]
  },
  {
    id: 8,
    type: "bar",
    display: true,
    color: ["#DB6AD4", "#E7BCF3", "#FF9873",],
    dimensions: ['product', 'data1', 'data2', 'data3'],
    data: [
      {product: '1月', 'data1': 43.3, 'data2': 85.8, 'data3': 93.7},
      {product: '2月', 'data1': 83.1, 'data2': 73.4, 'data3': 55.1},
      {product: '3月', 'data1': 86.4, 'data2': 65.2, 'data3': 82.5},
      {product: '4月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '5月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '6月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '7月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '8月', 'data1': 72.4, 'data2': 53.9, 'data3': 39.1},
      {product: '9月', 'data1': 43.3, 'data2': 85.8, 'data3': 93.7},
      {product: '10月', 'data1': 43.3, 'data2': 85.8, 'data3': 93.7},
      {product: '11月', 'data1': 83.1, 'data2': 73.4, 'data3': 55.1},
      {product: '12月', 'data1': 86.4, 'data2': 65.2, 'data3': 82.5}
    ]
  }
];

export const navigators = [
  {name: "用户管理", type: "usergroup-add",
    submenu: [
      {subname: "用户", params: "user"},
      {subname: "用户管理", params: "usergroup"},
    ]
  },
  {
    name: "主机", type: "medicine-box",
    submenu: [
      {subname: "主机管理", params: "host"},
      {subname: "已使用", params: "host"},
      {subname: "申请列表", params: "host"}
    ]
  },
  {
    name: "IDC资产管理", type: "form",
    submenu: [
      {subname: "机房", params: "asset"},
      {subname: "机柜", params: "asset"},
      {subname: "服务器", params: "asset"},
      {subname: "云服务器", params: "asset"},
      {subname: "网络设备", params: "asset"},
      {subname: "下架列表", params: "asset"},
      {subname: "产品列表", params: "asset"},
      {subname: "交接列表", params: "asset"},
      {subname: "产品报表", params: "asset"},
    ]
  },
  {
    name: "采购信息", type: "ordered-list",
    submenu: [
      {subname: "供应商", params: "purchasing"},
      {subname: "订单", params: "purchasing"},
      {subname: "租用", params: "purchasing"},
      {subname: "续费", params: "purchasing"},
    ]
  },
  {
    name: "历史订单", type: "safety-certificate",
    submenu: [
      {subname: "历史操作", params: "history"},
      {subname: "历史查询", params: "history"}
    ]
  },
  {
    name: "菜单管理", type: "project",
    submenu: [
      {subname: "导航栏", params: "menu"},
      {subname: "报表管理", params: "menu"},
    ]
  }
];

export const userStatistics = [
  {id: 1, title: "Total number of users", img: require("../images/icon-userz.svg"), total: 1286},
  {id: 2, title: "Total number of hosts", img: require("../images/icon-TotHost.svg"), total: 420},
  {id: 3, title: "Online user(s)", img: require("../images/icon-onlineuser.svg"), total: 7},
  {id: 4, title: "Online Conversations", img: require("../images/icon-OnlineConvo.svg"), total: 6315}
];

export const visiterStatistics = [
  {
    id: 1,
    title: "Host",
    img: require("../images/icon-Top10Assets.svg"),
    top: "Top 10",
    name: "Assets of the",
    desc: "Logins and the last record"
  },
  {
    id: 2,
    title: "Logins",
    img: require("../images/icon-Top10Logins.svg"),
    top: "Top 10",
    name: "Logins of the",
    desc: "Last 10 logins record"
  },
  {
    id: 3,
    title: "Users",
    img: require("../images/icon-Top10User.svg"),
    top: "Top 10",
    name: "Users of the",
    desc: "User logins and last login record"
  },
];

export const treeData = [
  {
    id: "1",
    title: "159.138.51.151",
    text: "test",
    children: [
      {
        id: "1.1", title: "159.138.51.152", text: "test",
        children: [
          {
            id: "1.1.1", title: "159.138.51.152", text: "test", children: [
              {id: "1.1.1.1", title: "159.138.51.153", text: "test"}
            ]
          },
          {
            id: "1.1.2", title: "159.138.51.152", text: "test", children: [
              {id: "1.1.2.1", title: "159.138.51.153", text: "test"}
            ]
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "159.138.51.151",
    text: "test",
    children: [
      {
        id: "2.1", title: "159.138.51.152", text: "test",
        children: [
          {
            id: "2.1.1", title: "159.138.51.152", text: "test", children: [
              {id: "2.1.1.1", title: "159.138.51.153", text: "test"}
            ]
          },
          {
            id: "2.1.2", title: "159.138.51.152", text: "test", children: [
              {id: "2.1.2.1", title: "159.138.51.153", text: "test"}
            ]
          }
        ]
      }
    ]
  }
];