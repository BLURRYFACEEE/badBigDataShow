<template>
  <div id="viewport">
    <div id="main">
      <div class="base">
        <div class="show">
          <div class="topBarHold">
            <div class="topBar">
              <div class="icon" />
              <a target="_blank" href="//www.baidu.com">百度首页</a>
            </div>
          </div>
          <header class="header">
            <div class="iconAALocation">
              <div class="icon" />
              <div class="location">
                <span class="location-word">切换地区</span>
                <span class="location-arrow" />
              </div>
            </div>
            <div class="others">
              <h5>新型冠状病毒肺炎</h5>
              <h2>疫情实时大数据报告</h2>
              <span>共 8,218,906,183 人次已浏览</span>
            </div>
          </header>
          <section class="content">
            <div class="content-getCountryBar">
              <SwitchBar :tab-arr="topCountryTab" :get-back-property="{'ulBackgroundColor':'#fff','activeType2':true}" /></div>
            <div class="content-badExplain">
              <h4>国内疫情</h4>
              <div class="update-explain">
                <h5>数据更新至 2020.12.08 17:07</h5>
                <div class="dataExplain"><div class="dataExplainIcon" /><span>数据说明</span></div>
              </div>
            </div>
            <div class="content-badData">
              <ul>
                <li>
                  <div class="spanOut">现有确诊<span /></div>
                  <div class="badData-num">1679</div>
                  <div class="badData-change">昨日+18</div>
                </li>
                <li>
                  <div class="spanOut">无症状<span /></div>
                  <div class="badData-num">219</div>
                  <div class="badData-change">昨日+5</div>
                </li>
                <li>
                  <div class="spanOut">现有疑似<span /></div>
                  <div class="badData-num">3</div>
                  <div class="badData-change">昨日+1</div>
                </li>
                <li>
                  <div class="spanOut">现有重症</div>
                  <div class="badData-num">6</div>
                  <div class="badData-change">昨日+0</div>
                </li>
                <li>
                  <div class="spanOut">累计确诊</div>
                  <div class="badData-num">94488</div>
                  <div class="badData-change">昨日+90</div>
                </li>
                <li>
                  <div class="spanOut">境外输入</div>
                  <div class="badData-num">3958</div>
                  <div class="badData-change">昨日+10</div>
                </li>
                <li>
                  <div class="spanOut">累计治愈</div>
                  <div class="badData-num">88056</div>
                  <div class="badData-change">昨日+72</div>
                </li>
                <li>
                  <div class="spanOut">累计死亡</div>
                  <div class="badData-num">4753</div>
                  <div class="badData-change">昨日+0</div>
                </li>
              </ul>
            </div>
            <div class="firstBigMapHold" />
            <div class="bigmap">
              <SwitchBar :tab-arr="firstMapTab" :get-back-property="{'activeType1':true}" @tabDadClick="recSonClickFirst" />
              <div id="firstBigMap-Pic" />
            </div>
            <div class="bigmap">
              <div id="secondBigMap-Pic" />
              <SwitchBar :tab-arr="secondMapTab" :get-back-property="{'activeType3':true}" @tabDadClick="recSonClickSecond" />
            </div>
            <div class="bigmap">
              <div id="thirdBigMap-Pic" />
              <SwitchBar :tab-arr="thirdMapTab" :get-back-property="{'activeType3':true}" @tabDadClick="recSonClickThird" />
            </div>
            <div id="locationDetailTable1">
              <div class="title">
                <ul>
                  <li>疫情地区</li>
                  <li>新增</li>
                  <li>现有</li>
                  <li>累计</li>
                  <li>治愈</li>
                  <li>死亡</li>
                </ul>
              </div>
              <div class="location-num">
                <ul v-for="(item,index) in locationNumTest1" :key="index">
                  <li class="location">{{ item.location }}</li>
                  <li>{{ item.add }}</li>
                  <li>{{ item.now }}</li>
                  <li>{{ item.sum }}</li>
                  <li>{{ item.heal }}</li>
                  <li>{{ item.death }}</li>
                </ul>
                <ul v-for="(item,index) in locationNumTest2" v-show="!listSpreadCheck" :key="index">
                  <li class="location">{{ item.location }}</li>
                  <li>{{ item.add }}</li>
                  <li>{{ item.now }}</li>
                  <li>{{ item.sum }}</li>
                  <li>{{ item.heal }}</li>
                  <li>{{ item.death }}</li>
                </ul>
                <div @click="spreadChange">{{ listSpreadWord }}</div>
              </div>
            </div>
          </section>
          <div class="ass">积极防护，保护自己，戴口罩，勤洗手
            <h4>上百度APP搜索 新型冠状病毒肺炎</h4>
            <h5>了解最新进展及权威预防知识</h5>
          </div>

        </div>
        <footer class="last">
          <span>帮助</span>
          <span>举报</span>
          <span>用户反馈</span>
        </footer>
        <div class="share"></div>
      </div>
    </div>
  </div>
</template>
<script>
import '../../utils/echarts/china.js'

// eslint-disable-line
export default {
  name: 'BadShow',
  components: { SwitchBar },
  data() {
    return {
      topCountryTab: ['国内疫情', '国外疫情'],
      firstMapTab: ['现有确诊', '累计确诊'],
      secondMapTab: ['新增确诊分布', '现有无症状分布'],
      thirdMapTab: ['境外输入新增趋势', '境外输入累计趋势', '境外输入省级TOP10'],
      locationNumTest: [
        {
          location: '香港',
          add: 100,
          now: 1267,
          sum: 7075,
          heal: 5696,
          death: 112
        }, {
          location: '台湾',
          add: 2,
          now: 129,
          sum: 718,
          heal: 582,
          death: 7
        }, {
          location: '英国',
          add: 14718,
          now: 1684447,
          sum: 1750241,
          heal: 3761,
          death: 62033
        }, {
          location: '比利时',
          add: 859,
          now: 536807,
          sum: 594572,
          heal: 40258,
          death: 17507
        }
      ],
      locationNumTest1: [],
      locationNumTest2: [],
      listShowCheck: false,
      listSpreadCheck: true,
      listSpreadWord: '展开全部'
    }
  },
  computed: {
    cutloactionNum1() {
      return this.locationNumTest.slice(2)
    },
    cutloactionNum2() {
      return this.locationNumTest.slice(0, 2)
    }
  },
  mounted() {
    this.locationNumTest1 = this.locationNumTest.slice(0, 2)
    this.locationNumTest2 = this.locationNumTest.slice(2)
    console.log(this.locationNumTest)
    console.log(this.locationNumTest.slice(2))
    this.getFirstPic()
    this.getSecondPic()
    this.getThirdPic()
  },
  methods: {
    getFirstPic(index = 0) {
      var myChart = this.$echarts.init(document.getElementById('firstBigMap-Pic'))
      const checkTitle = index === 1 ? '中国疫情图233' : '中国疫情图'
      myChart.setOption({
        title: {
          text: checkTitle,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['中国疫情图']
        },
        visualMap: {
          type: 'piecewise',
          pieces: [
            { min: 1000, max: 1000000, label: '大于等于1000人', color: '#372a28' },
            { min: 500, max: 999, label: '确诊500-999人', color: '#4e160f' },
            { min: 100, max: 499, label: '确诊100-499人', color: '#974236' },
            { min: 10, max: 99, label: '确诊10-99人', color: '#ee7263' },
            { min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7' }
          ],
          color: ['#E0022B', '#E09107', '#A3E00B']
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        roamController: {
          show: true,
          left: 'right',
          mapTypeControl: {
            'china': true
          }
        },
        series: [
          {
            name: '确诊数',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
              show: true,
              color: 'rgb(249, 249, 249)'
            },
            data: [
              {
                name: '北京',
                value: 212
              }, {
                name: '天津',
                value: 60
              }, {
                name: '上海',
                value: 208
              }, {
                name: '重庆',
                value: 337
              }, {
                name: '河北',
                value: 126
              }, {
                name: '河南',
                value: 675
              }, {
                name: '云南',
                value: 117
              }, {
                name: '辽宁',
                value: 74
              }, {
                name: '黑龙江',
                value: 155
              }, {
                name: '湖南',
                value: 593
              }, {
                name: '安徽',
                value: 480
              }, {
                name: '山东',
                value: 270
              }, {
                name: '新疆',
                value: 29
              }, {
                name: '江苏',
                value: 308
              }, {
                name: '浙江',
                value: 829
              }, {
                name: '江西',
                value: 476
              }, {
                name: '湖北',
                value: 13522
              }, {
                name: '广西',
                value: 139
              }, {
                name: '甘肃',
                value: 55
              }, {
                name: '山西',
                value: 74
              }, {
                name: '内蒙古',
                value: 34
              }, {
                name: '陕西',
                value: 142
              }, {
                name: '吉林',
                value: 42
              }, {
                name: '福建',
                value: 179
              }, {
                name: '贵州',
                value: 56
              }, {
                name: '广东',
                value: 797
              }, {
                name: '青海',
                value: 15
              }, {
                name: '西藏',
                value: 1
              }, {
                name: '四川',
                value: 282
              }, {
                name: '宁夏',
                value: 34
              }, {
                name: '海南',
                value: 79
              }, {
                name: '台湾',
                value: 10
              }, {
                name: '香港',
                value: 15
              }, {
                name: '澳门',
                value: 9
              }
            ]
          }
        ]
      })
    },
    getSecondPic(index = 0) {
      var myChart = this.$echarts.init(document.getElementById('secondBigMap-Pic'))
      const checkTitle = index === 1 ? '现有无症状分布' : '新增确诊分布'
      var xAxisData = []
      var data1 = []
      var data2 = []
      var data3 = []
      var data4 = []

      for (var i = 0; i < 10; i++) {
        xAxisData.push('Class' + i)
        data1.push((Math.random() * 2).toFixed(2))
        data2.push(-Math.random().toFixed(2))
        data3.push((Math.random() * 5).toFixed(2))
        data4.push((Math.random() + 0.3).toFixed(2))
      }

      var emphasisStyle = {
        itemStyle: {
          barBorderWidth: 1,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      }
      myChart.setOption({
        title: {
          backgroundColor: '#333',
          text: checkTitle,
          bottom: 0,
          right: 0,
          width: 100,
          textStyle: {
            fontSize: 12,
            color: '#fff'
          }
        },
        backgroundColor: '#eee',
        legend: {
          data: ['bar', 'bar2', 'bar3', 'bar4'],
          left: 10
        },
        // title: '起飞！',
        brush: {
          toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
          xAxisIndex: 0
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {}
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          name: 'X Axis',
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false }
        },
        yAxis: {
          inverse: true,
          splitArea: { show: false }
        },
        grid: {
          left: 100
        },
        visualMap: {
          type: 'continuous',
          dimension: 1,
          text: ['High', 'Low'],
          inverse: true,
          itemHeight: 200,
          calculable: true,
          min: -2,
          max: 6,
          top: 60,
          left: 10,
          inRange: {
            colorLightness: [0.4, 0.8]
          },
          outOfRange: {
            color: '#bbb'
          },
          controller: {
            inRange: {
              color: '#2f4554'
            }
          }
        },
        series: [
          {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data1
          },
          {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data2
          },
          {
            name: 'bar3',
            type: 'bar',
            stack: 'two',
            emphasis: emphasisStyle,
            data: data3
          },
          {
            name: 'bar4',
            type: 'bar',
            stack: 'two',
            emphasis: emphasisStyle,
            data: data4
          }
        ]
      })

      myChart.on('brushSelected', renderBrushed)

      function renderBrushed(params) {
        var brushed = []
        var brushComponent = params.batch[0]

        for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
          var rawIndices = brushComponent.selected[sIdx].dataIndex
          brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '))
        }

        myChart.setOption({
          // title: {
          //   backgroundColor: '#333',
          //   text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
          //   bottom: 0,
          //   right: 0,
          //   width: 100,
          //   textStyle: {
          //     fontSize: 12,
          //     color: '#fff'
          //   }
          // }
        })
      }
    },
    getThirdPic(index = 0) {
      var myChart = this.$echarts.init(document.getElementById('thirdBigMap-Pic'))
      let checkTitle = '境外输入新增趋势'
      if (index === 1) {
        checkTitle = '境外输入累计趋势'
      } else if (index === 2) {
        checkTitle = '境外输入省级TOP10'
      }
      myChart.setOption({
        title: {
          text: checkTitle
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    },
    recSonClickFirst(index) {
      this.getFirstPic(index)
    },
    recSonClickSecond(index) {
      this.getSecondPic(index)
    },
    recSonClickThird(index) {
      this.getThirdPic(index)
    },
    spreadChange() {
      this.listSpreadCheck = !this.listSpreadCheck
      this.listSpreadWord = this.listSpreadCheck ? '展开全部' : '收起全部'
    }
  }
}
import SwitchBar from '@/views/common/switchBar/index'
</script>
<style scoped>
  #firstBigMap-Pic{
    width: 700px;
    height: 500px;
  }
  #secondBigMap-Pic{
    width: 700px;
    height: 500px;
    /*margin-top: 20px;*/
  }
  #thirdBigMap-Pic{
    width: 700px;
    height: 500px;
    /*margin-top: 20px;*/
  }
  .active {
    color: #10aeb5;
    border-bottom: 2px solid #10aeb5;
    font-weight: 900;
  }
  html {
    font-size: 16px !important;
  }
  body {
    font-size: 1rem;
    font-family: Arial;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
  }

  .base {
    background-color: #10aeb5;
  }
  .show {
    width: 768px;
    height: 3000px;
    margin: 0 auto;
    /*background-color: green;*/
    border-radius: .625rem;
  }
  .topBarHold {
    height: 50px;
  }
  .topBar {
    position: absolute;
    left: 0;
    right: 0;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    line-height: 50px;
    align-items: center;
  }
  .icon {
    width: 81px;
    height: 27px;
    background-image: url("https://mms-res.cdn.bcebos.com/voicefe/captain/images/1b9ddd53f65d1b3a4faeca959e15d425c8d85d2f?117*38");
    background-size: 100% 100%;
  }
  .header {
    position: relative;
    background-image: url("https://mms-res.cdn.bcebos.com/mms-res/voicefe/captain/images/79cc66862a95704652df8c41b269afdd.png?size=1434*378");
    background-color: #10aeb5;
    background-size: 695px 189px;
    height: 187px;
    color: white;
  }
  .iconAALocation {
    height: 28px;
    position: absolute;
    top: 17px;
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
  .header .location {
    display: flex;
    width: 90px;
    height: 28px;
    background-color: #e5feff;
    opacity: 0.5;
    line-height: 28px;
    border-radius: 20px;
    padding: 0 12px;
    font-size: 12px;
  }
  .location-word {
    color: black;
    display: inline-block;
    width: 80px;
    height: 28px;
  }
  .location-arrow {
    display: inline-block;
    width: 15px;
    height: 28px;
    background-image: url("https://mms-res.cdn.bcebos.com/mms-res/voicefe/captain/mola/Virus/1.1.287/assets/arrow-expand.62b1a23.svg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    margin-left: 5px;
  }
  .header .others {
    padding: 0 10px;
    position: absolute;
    top: 69px;
  }
  .header .others h2{
    margin-top: 5px;
    font-size: 2rem;
  }
  .header .others span{
    background-color: rgba(9,148,167,.5);
    border-radius: 20px;
    display: inline-block;
    font-size: 0.8rem;
    margin-top: 10px;
    padding: 0 12px;
    /*background-color: #000000;*/
    /*opacity: 0.1;*/
    line-height: 30px;
  }
  .content {
    background-color: white;
    /*height: 2600px;*/
    border-radius: 20px;
    padding: .917rem 1.0625rem 1.875rem;
  }
  .content-getCountryBar {
    /*height: 2.1rem;*/
    /*line-height: 2.1rem;*/
    /*display: flex;*/
    /*justify-content: space-around;*/
  }
  .content-badExplain {
    margin-top: 20px;
  }
  .content-badExplain .update-explain {
    display: flex;
    justify-content: space-between;
    color: grey;
    font-size: .8125rem;
    line-height: .8125rem;
    height: .8125rem;
    vertical-align: center;
  }
  .content-badExplain h4 {
    font-weight: 700;
  }
  .content-badExplain h5 {
    margin-top: 9px;
  }

  .content-badExplain .update-explain .dataExplain {
    display: flex;
    height: .8125rem;
    line-height: .8125rem;
  }
  .content-badExplain .update-explain .dataExplain span {
    display: inline-block;
  }
  .content-badExplain .update-explain .dataExplainIcon {
    display: inline-block;
    width: .8125rem;
    height: .8125rem;
    background-size: 100% 100%;
    background-image: url("//mms-res.cdn.bcebos.com/mms-res/voicefe/captain/mola/Virus/1.1.287/assets/question-mark.f7b4fec.png");
    margin-right: 5px;
  }
  .content-badData {
    outline: 1px solid #bbccdd;
    height: 76px;
    margin-top: 30px;
  }
  .content-badData ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    flex-wrap:wrap;
  }
  .content-badData ul li{
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px 0;
  }
  .content-badData ul li span {
    background-image: url("//mms-res.cdn.bcebos.com/mms-res/voicefe/captain/mola/Virus/1.1.287/assets/question-mark.f7b4fec.png");
    background-size: 100% 100%;
    display: inline-block;
    width: .8125rem;
    height: .8125rem;
  }
  .content-badData ul li .spanOut {
    display: flex;
    font-size: 1rem;
    justify-content: center;
  }
  .badData-num {
    font-size: 1.4rem;
    margin-top: 5px;
  }
  .badData-change {
    font-size: 0.7rem;
  }
  .firstBigMapHold {
    height: 100px;
  }
  .bigmap {
    background: #f8f9fa;
    padding: 1.25rem 1.0625rem 0;
    margin-bottom: 15px;
  }
  #locationDetailTable1 {
    text-align: center;
  }
  #locationDetailTable1 ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  #locationDetailTable1 ul li{
    width: 100%;
    text-align: center;
    background-color: #ecf0f1;
    line-height: 40px;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 5px;
    font-size: 14px;
  }
  #locationDetailTable1 .location {
    background-color: #20a0ff;
    color: #fff;
    font-weight: 700;
  }

  .ass {
    margin-top: 10px;
    background-color: #fff;
    font-weight: 700;
    text-align: center;
    line-height: 50px;
    height: 50px;
    border-radius: 10px;
  }
  .ass h4,h5 {
    color: #d3dce6;
  }
  .last {
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    width: 100%;
    /*margin-left: 80px;*/
  }
  .last span {
    margin-left: 10px;
    font-size: 12px;
    color: #5a5e66;
  }
  .last span:nth-child(1){
    margin-left: 550px;
  }
  .share {
    width: 180px;
    height: 50px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: #20a0ff;
    border-radius: 50px;
  }
</style>
