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
              <a class="active">国内疫情</a>
              <a>国外疫情</a>
            </div>
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
            <div id="firstBigMap" />
          </section>
          <footer />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
window.onload = function() {
  alert('123123')
}
</script>
<!--<script src="https://echarts.apache.org/examples/vendors/echarts/echarts.min.js?_v_=1578305236132"></script>-->
<!--<script src="../../utils/echarts/echarts.min.js"></script>-->
<!--<script src="../../utils/echarts/china.js"></script>-->

<script>

</script>
<script>
import '../../utils/echarts/china.js'// eslint-disable-line
export default {

  name: 'BadShow',
  mounted() {
    // $.get('../../utils/echarts/china.json', function (chinaJson) {
    //   echarts.registerMap('china', chinaJson);
    //   var chart = this.$echarts.init(document.getElementById('firstBigMap'));
    //   chart.setOption({
    //     series: [{
    //       type: 'map',
    //       map: 'china'
    //     }]
    //   });
    // });
    // var echarts = require('echarts');
    var myChart = this.$echarts.init(document.getElementById('firstBigMap'))
    myChart.setOption({
      title: {
        text: '中国疫情图',
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
  }
}
</script>
<style scoped>
  #firstBigMap{
    width: 700px;
    height: 500px;
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
    height: 7500px;
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
    height: 1000px;
    border-radius: 20px;
    padding: .917rem 1.0625rem 1.875rem;
  }
  .content-getCountryBar {
    height: 2.1rem;
    line-height: 2.1rem;
    display: flex;
    justify-content: space-around;
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
  .firstBigMap {
    background: #f8f9fa;
    padding: 1.25rem 1.0625rem 0;
  }
</style>
