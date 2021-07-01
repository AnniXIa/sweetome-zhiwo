<!--
 * @Author: your name
 * @Date: 2021-06-22 11:56:27
 * @LastEditTime: 2021-06-22 12:34:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-dev【0425】\src\views\home\scenic-spot.vue
-->

<template>
  <div class="body index">
    <div class="con flex-cen">
      <Header :title="name" :isBack="true"></Header>
      <div class="topage">
        <div class="content" v-for="info in cityInfo[from]" :key="info.text">
          <div class="content-head">
            <img class="type-icon" :src="typeIcon">
            <p class="subtitle" v-html="info.describe"></p>
          </div>
          <div v-for="item in info.info" :key="item.text">
            <p class="type0" v-if="item.type == 0">{{item.text}}</p>
            <p class="type1" v-if="item.type == 1">{{item.text}}</p>
            <img class="type2" :src="item.text" v-if="item.type == 2">
            <p class="type3" v-if="item.type == 3">(图源：{{item.text}})</p>
            <p class="type4" v-if="item.type == 4">{{item.text}}</p>
          </div>
            <!-- username="gh_e6053f8edd2c" :path="`views/booking/unit-type-detail?hotelId=${info.hotelId}`" -->
          <wx-open-launch-weapp
            v-if="isWeChat() && from == 'live' && info.hotelId"
            id="launch-btn"
            :name="`goHotel${info.hotelId}`"
            username="gh_e981b023f3f7"
            path="pages/login/login.html"
            default
            @ready="handlReady"
            @launch="handleLaunchFn"
            @error="handleErrorFn">
            <!-- <script type="text/wxtag-template">
              <button class="handle-btn">预订</button>
            </script> -->
            <template>
              <button class="handle-btn">预订</button>
            </template>
          </wx-open-launch-weapp>
          <div class="handle-box" v-if="!isWeChat() && from == 'live' && info.qrCodeImg">
            <img class="handle-img" :src="info.qrCodeImg">
            <p>截图微信识别二维码进入预订</p>
          </div>
        </div>
        <img src="@/assets/images/bg/play_bg.png" class="bottom-bg">
      </div>
    </div>
    <!-- <tab></tab>  -->
  </div>
</template>

<script>
// import Tab from 'components/tab.vue'
import Header from 'components/header.vue'
import cityList from "@/store/modules/cityList";
import wx from 'weixin-js-sdk'

export default {
  name: 'index',
  data() {
    return {
      from: '',
      typeIcon: '',
      name: "城市介绍",
      percentNum: 0,
      areaId: '',
      cityId: '',
      cityList: [],
      cityInfo: {},
    }
  },
  created() {
    var btn = document.getElementById('launch-btn');
    btn.addEventListener('launch', function (e) {
        alert('success', e);
    });
    btn.addEventListener('error', function (e) {
        alert('fail', e.detail);
    });
    wx.ready((res) => {
      console.log('res: ',res)

      // wx.config({
      //   debug: true,
      //   appId: 'wxfcd5ffc1d91c93bd',
      //   timestamp: config.timestamp,
      //   nonceStr: config.nonceStr,
      //   signature: config.signature,
      //   jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'translateVoice', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice','onVoicePlayEnd', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice', 'chooseImage', 'getLocalImgData', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard'],
      //   openTagList:['wx-open-launch-weapp', 'wx-open-launch-app']
      // })
    })
  },
  mounted() {
    document.scroll = 0
    this.name = this.$route.query.cityName;
    this.from = this.$route.query.from;
    this.areaId = this.$route.query.areaId;
    this.cityId = this.$route.query.cityId;
    this.cityList = cityList.state.cityList
    if (this.from == 'eat') {
      this.typeIcon = require('@/assets/images/bg/eat_icon.png')
    } else if (this.from == 'play') {
      this.typeIcon = require('@/assets/images/bg/play_icon.png')
    } else if (this.from == 'live') {
      this.typeIcon = require('@/assets/images/bg/zhu_icon.png')
    }
    this.init()
    setTimeout(() => {

    var btn = document.getElementById('launch-btn');
		btn.addEventListener('launch', function(e) {
			alert('success', e);
		});
		btn.addEventListener('error', function(e) {
			alert(JSON.stringify(e.detail))
		});
    },1000)
    
  },
  methods: {
    init() {
      this.cityList.forEach(e => {
        if (this.areaId == e.value) {
          let cityItem = e.list.filter(v => v.value == this.cityId)
          console.log(cityItem)
          this.cityInfo = cityItem[0]
        }
      })
    },
    handlReady(e) {
      console.log('ready: ',e)
    },
    handleLaunchFn(e) {
      alert('success!!!! ',e)
    },
    handleErrorFn(e){
      console.log('fail', e.detail);
    },
    goAppletsRoomDetail(hotelId) {
      console.log(hotelId)
    },
    isWeChat() {
      //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
      var ua = window.navigator.userAgent.toLowerCase();
      //通过正则表达式匹配ua中是否含有MicroMessenger字符串
      if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
      }else{
        return false;
      }
    }
  },
  components: {
    // Tab,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body, .con{font-size:.8rem;color:#4C808A;}
  .topage{
    width: 100%;
  }
  .type-icon{
    width: 1rem;
  }
  .content{
    margin: .2rem;
  }
  .content-head{
    text-align: center;
    margin: 1rem auto 0;
    width: 65%;
  }
  .subtitle{
    font-size: .33rem;
    color: #4C808A;
    font-weight: bold;
    margin-top: .2rem;
    margin-bottom: .5rem;
    line-height: .45rem;
  }
  .info{
    font-size: .33rem;
    font-weight: 300;
    line-height: .4rem;
    margin: .2rem 0;
  }
  .type0{
    font-size: .28rem;
    font-weight: bold;
    line-height: .45rem;
    margin: .4rem 0;
  }
  .type1{
    font-size: .28rem;
    font-weight: 300;
    line-height: .45rem;
    margin: .4rem 0;
  }
  .type2{
    margin: 0 auto .2rem;
    display: inherit;
  }
  .type3{
    font-size: .23rem;
    text-align: center;
    margin-bottom: .6rem
  }
  .type4{
    margin: .1rem 0;
    font-size: .22rem;
    font-weight: 300;
    line-height: .28rem;
  }
  .li{
    margin: .3rem 0 0;
  }
  .li p{
    font-size: .35rem;
  }
  .li .icon{
    width: 1rem
  }
  .handle-btn{
    width: 94%;
    border-radius: 1rem;
    background: #1CB2EC;
    color: #fff;
    text-align: center;
    padding: .3rem 0;
    margin: .6rem auto 1rem;
    font-size: .28rem;
    font-weight: bold;
  }
  .handle-box{
    width: 60%;
    margin: .6rem auto 1rem;
    text-align: center;
  }
  .handle-box img{
    width: 100%;
  }
  .handle-box p{
    margin-top: .4rem;
    font-size: .24rem;
    color: #000;
  }
  .bottom-bg{
    margin-top: .8rem;
    display:block;
  }
  #launch-btn{
    width: 100%;
    height: 2rem;
    display: block;
    text-align: center;
  }
</style>