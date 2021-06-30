<template>
  <div class="header">
    <div class="wrap">
      <div v-if="isBack" class="back" @click="back"><i class="iconfont icon-fanhui1"></i></div>
      <div v-if="!isBack"></div>
      <h3>{{title}}</h3>
      <van-button round type="default" size="small" class="city-btn" @click="cityChange">城市切换</van-button>
    </div>  
  </div>
</template>

<script type="text/ecmascript-6">
// import { MessageBox, Indicator } from 'mint-ui'
export default {
  name: "",
  props: {
    title: {
      type: String,
      default: '页面标题'    
    },
    isBack: {
      type: Boolean,
      default: true  
    } 
  },
  data() {
    return {

    }
  },
  methods: {
    back() {
      this.$router.go(-1);
      // let _url = sessionStorage.getItem('prevPage') || '/'
      // console.log('prevPage: ',_url)
      // this.$router.replace(_url)
      // sessionStorage.setItem('prevPage', '')
    },
    cityChange() {
      this.$router.push({
        name: 'city-change',
        query: {
          cityName: this.title
        }
      })
    }
  }
}
</script>

<style scoped>
  .header{max-width:750px;height:.92rem;line-height: .92rem;font-size: .36rem;color:#fff;text-align: center;position: fixed;width:100%;left:0;top:0;z-index: 200;border:1px solid rgba(0,0,0,0.10);background-color:#fff}  
  .header .back{width:.4rem;padding-right: 4%;height:100%;position: absolute;left: 0;top:0;background-size: .4rem;transition: all .5s;transform-origin: .2rem center;padding-right: 0;padding-left: 4%;background-position: right .11rem center;}
  .header .back i{font-size:.44rem;}
  .header h3{
    font-size: .35rem;
    color: #000;
  }
  .header .city-btn{
    position: absolute;right: 4%;top:.15rem;
    height: .6rem;
    border: 1px solid;
    border-color: rgba(151,151,151,0.20);
    padding: .25rem .2rem;
    font-size: .25rem;
  }
  @media screen and (min-width: 640px) {
    .header{left:50%;transform: translateX(-50%);}
  }
</style>