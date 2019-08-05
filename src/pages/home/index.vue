<template>
  <div class="inner">
    <section class="section0 flex">
      <div class="flex-item">
        <el-card>
          <img src="">
          <div>
            <div class="item">
              账户名：
            </div>
            <div class="item">
              店铺名称：
            </div>
            <div class="item">
              最后登录：
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-item">
        <el-card>
          <div class="item">
            店铺服务评分：
          </div>
          <div class="item">
            店铺商品评分：
          </div>
          <div class="item">
            店铺环境评分：
          </div>
          <div class="item">
            好评率：
          </div>
        </el-card>
      </div>
    </section>
    <section class="section1 flex">
      <div class="flex-item">
        <div class="box">
          <div class="img-wrap"></div>
          <div class="text-wrap">
            <div>今日浏览量</div>
            <div>20000</div>
          </div>
        </div>
      </div>
      <div class="flex-item">
        <div class="box">
          <div class="img-wrap"></div>
          <div class="text-wrap">
            <div>今日浏览量</div>
            <div>20000</div>
          </div>
        </div>
      </div>
      <div class="flex-item">
        <div class="box">
          <div class="img-wrap"></div>
          <div class="text-wrap">
            <div>今日浏览量</div>
            <div>20000</div>
          </div>
        </div>
      </div>
      <div class="flex-item">
        <div class="box">
          <div class="img-wrap"></div>
          <div class="text-wrap">
            <div>今日浏览量</div>
            <div>20000</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section2 flex">
      <div class="flex-item">
        <div class="caption">商品总览</div>
        <div class="box flex">
          <div class="item">
            <div>20000</div>
            <div>已下架</div>
          </div>
          <div class="item">
            <div>20000</div>
            <div>已上架</div>
          </div>
          <div class="item">
            <div>20000</div>
            <div>全部商品</div>
          </div>
        </div>
      </div>
      <div class="flex-item">
        <div class="caption">商品浏览量</div>
        <div class="box flex">
          <div class="item">
            <div>20000</div>
            <div>今日新增</div>
          </div>
          <div class="item">
            <div>20000</div>
            <div>昨日新增</div>
          </div>
          <div class="item">
            <div>20000</div>
            <div>本月新增</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section3 flex">
      <div class="flex-item">
        <div class="caption">新增客户量</div>
        <div class="box flex">
          <div class="item">
            <div>20000</div>
            <div>今日新增</div>
          </div>
          <div class="item">
            <div>20000</div>
            <div>昨日新增</div>
          </div>
          <div class="item">
            <div>20000</div>
            <div>本月新增</div>
          </div>
        </div>
      </div>
      <div class="flex-item">
        <div class="caption">店铺关注量</div>
        <div class="box flex">
          <div class="item">
            <div>20000</div>
            <div>今日新增</div>
          </div>
          <div class="item">
            <div>20000</div>
            <div>昨日新增</div>
          </div>
          <div class="item">
            <div>20000</div>
            <div>本月新增</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section5">
      <div class="caption">系统通知</div>
      <div class="content">
        <div id="chart1" :style="{width: '100%', height: '300px'}"></div>
      </div>
    </section>
    <section class="section6">
      <div class="caption">系统通知</div>
      <div class="content">
        <div id="chart2" :style="{width: '100%', height: '300px'}"></div>
      </div>
    </section>
  </div>
</template>
<script>
let echarts = require('echarts')
export default {
  mounted() {
    this.drawChart1('chart1')
    this.drawChart1('chart2')
  },
  methods: {
    drawChart1: function(id) {
      let chart = echarts.init(document.getElementById(id))
      let option = {
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };

      // 绘制图表
      chart.setOption(option);
    }
  }
}

</script>
<style lang="scss" scoped>
.inner {
  padding-bottom: 100px;
}

section{
  margin-top:20px;
  min-height:100px;
}

.flex-item{
  width:50%;
  padding:0 15px;
}
.box {
  border: 1px solid $borderColor;
  border-radius: 6px;
  padding: 15px;
}


.content {
  padding: 20px;
}

</st yle>
