import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import {assetReport} from "../../../js/jsondata";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.datamap();
  }

  /**循环数据**/
  datamap = () => {
    assetReport.map((item) => {
      if (item.display) {
        if (item.type === "pie") {
          this.createPieCharts(`main${item.id}`,item.data,item.color);
        } else {
          this.createBarCharts(`main${item.id}`,item.data, item.dimensions,item.color)
        }
      }
    })
  };
  /**生成饼图**/
  createPieCharts = (id, data,color) => {
    let divEle = document.createElement("div");
    divEle.setAttribute("id", id);
    divEle.setAttribute("class", "pieCharts");
    divEle.style.width = "450px";
    divEle.style.height = "360px";
    let chartPieContent = document.getElementById("chartPieContent");
    chartPieContent.appendChild(divEle);
    let myChart = echarts.init(document.getElementById(id));
    myChart.setOption({
      legend: {
        textStyle:{
          color:"#c3c3c3"
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
      },
      color:color,
      series: [
        {
          type: 'pie',
          hoverAnimation: false,
          data: data
        }
      ]
    });
  };
  /**生成柱图**/
  createBarCharts = (id,data, dimensions,color) => {
    let divEle = document.createElement("div");
    divEle.setAttribute("id", id);
    divEle.setAttribute("class", "barCharts");
    divEle.style.width = "90%";
    divEle.style.height = "350px";
    let chartPieContent = document.getElementById("chartBarContent");
    chartPieContent.appendChild(divEle);
    let myChart = echarts.init(document.getElementById(id));
    myChart.setOption({
      legend: {
        textStyle:{
          color:"#c3c3c3"
        }
      },
      dataset: {
        dimensions: dimensions,
        source: data
      },
      // color: this.genColor(dimensions.length),
      color: color,
      xAxis: {
        type: 'category',
        axisLabel: {
          textStyle: {
            color: '#c3c3c3',
            fontSize:'12'
          },
        },
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: '#c3c3c3',
            fontSize:'12'
          },
        },
      },
      series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'},
      ]
    });
  };
  /**随机生成颜色**/
  // genColor = (count) => {
  //   let colorArr = [];
  //   for (let i=0;i<count;i++){
  //       let color =  '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
  //     colorArr.push(color)
  //   }
  //   return colorArr;
  // };

  render() {
    return (
      <div className="wrapper">
        <h3 style={{textAlign: "left", borderBottom: "1px solid rgb(202, 202, 202)", paddingBottom: "15px"}}>Liked
          Websites</h3>
        <br/>
        <div className="displayflexstart" id="chartPieContent">
        </div>
        <div className="displayflexbetween" id="chartBarContent">
        </div>
      </div>
    );
  }
}
