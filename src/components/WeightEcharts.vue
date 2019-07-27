<template>
  <div>
    <div id="myChart" :style="{width: '10rem', height: '10rem'}"></div>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入折线图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  mounted() {
    this.drawLine();
  },

  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "体重变化" },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "bar",
            smooth: true
          }
        ]
      });
    }
  }
};
</script>
