<!--
 * @Author: your name
 * @Date: 2021-05-05 20:44:46
 * @LastEditTime: 2021-06-22 12:35:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-dev【0425】\src\App.vue
-->
<template>
  <div id="app">
    <!-- 路由视图 -->
    <transition :name="transitionName" class="router-view"><router-view /></transition>
    <!-- 背景音乐 -->
    <my-audio ref="audio" v-if="PROJECT_CONFIG.is_background_music.is_open"></my-audio>
    <!-- 加载页 -->
    <!-- <loading-page v-if="PROJECT_CONFIG.is_loading_page" :pageLoadingOk="pageLoadingOk" @loadingOk="loadingOk" ></loading-page> -->
    <!-- @curPro="curPro" -->
  </div>
</template>
 
<script>
import myAudio from 'base/audio'
// import VConsole from 'vconsole'
import LoadingPage from 'base/loading-page.vue'
import { PROJECT_CONFIG } from 'api/project.config'
import { setDataArrive } from "api/api.config"
// if (PROJECT_CONFIG.vConsole.is_open) { 
//   const vConsole = new VConsole()
//   console.log(vConsole)
// }
export default {
  name: 'app',
  data() {
    return {
      pageLoadingOk: false,
      transitionName: 'right-left'
    }
  },
  created() {
    console.log('9999---')
    this.PROJECT_CONFIG = PROJECT_CONFIG//页面配置信息
  },
  mounted() {
    if (this.PROJECT_CONFIG.is_page_locking) { this.pageLocking() }//锁定页面
    // 测试代码 模拟加载完毕
    setTimeout(()=>{
      console.log('00000---')
      this.pageLoadingOk = true
    },500)
    // 测试代码 模拟加载完毕
  },
  methods: {
    //loading加载
    loadingOk() {
      console.log("【加载完成】")
      this.pageLoadingOk = true
    },
    //页面下拉锁定(效果同于在最外层#app盒子上添加@touchmove.prevent事件)
    pageLocking() {
      // document.getElementById('app').addEventListener('touchmove', e => { e.preventDefault() /*e.stopPropagation();*/ }, { passive: true })
      // document.getElementById('app').addEventListener(
      //   'TouchEvent',
      //   e => {e.preventDefault()},
      //   { passive: true }
      // );
    }
  },
  watch: {
    '$route'(to, from) {
      console.log("从from", from)
      console.log("到to", to)
      window.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      if (!from.name && this.PROJECT_CONFIG.refresh_back_to_home.is_open) this.$router.replace(this.PROJECT_CONFIG.refresh_back_to_home.home_url)
      let _tabbar = ['/', '/about']//tabBar导航页
      let _secondLevel = ['/city-info', '/scenic-spot', '/poste']//二级页面
      let _setData = ['/', '/poster']//数据统计页：首页、结果页 
      
      if (_tabbar.includes(from.path) && _tabbar.includes(to.path)) {
        this.transitionName = ''
      } else if (_tabbar.includes(from.path) || (_secondLevel.includes(from.path) && !_tabbar.includes(to.path))) {
        this.transitionName = 'right-left' 
      } else if (_tabbar.includes(to.path) || (_secondLevel.includes(to.path) && !_tabbar.includes(from.path))) {
        this.transitionName = 'left-right'
      }
      //数据统计
      if (PROJECT_CONFIG.is_data_statistics && _setData.includes(to.path)) setDataArrive({ status: _setData.findIndex(item => item == to.path) + 1 }).then(() => { console.log("【数据统计--抵达页成功】") })
    }
  },
  components: {
    myAudio,
    LoadingPage
  }
}
</script>

<style>
  @import 'assets/css/font-icon.css';
  /* padding-top: .92rem; */
  .body{min-height:100vh;box-sizing: border-box;}
  .con-box{min-height:calc(100vh - .92rem);display: flex;flex-direction: column;justify-content: center;align-items: center;}
  .item-list dd{border:1px solid #333;padding:.2rem .3rem;margin:.5rem 0;text-align: center;}
  .router-view{transition: all .5s cubic-bezier(.55,0,.1,1);position: absolute;left:0;top:0;width: 100%;min-height:100vh;}
  .router-view.on{transition: none;}
  /* .router-view{position: absolute;left:0;top:0;width: 100vw;min-height:100vh;} */
  .right-left-enter,.left-right-leave-to{transform: translateX(100%);opacity: 0;}
  .right-left-leave-to,.left-right-enter{transform: translateX(-100%);opacity: 0;}
  .bottom-top-enter,.top-bottom-leave-to{transform: translateY(100%) scale(1);opacity: 0;}
  .bottom-top-leave-to,.top-bottom-enter{transform: translateY(-100%) scale(.8);opacity: 0;}
  .scale-big-enter,.scale-small-leave-to{transform: scale(.5);opacity: 0;}
  .scale-big-leave-to,.scale-small-enter{transform: scale(1);opacity: 0;}
  .full-screen{width:100%;height:calc(100vh - .92rem);}
</style>
