<!--
 * @Author: your name
 * @Date: 2021-06-22 11:28:40
 * @LastEditTime: 2021-06-22 15:36:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-dev【0425】\src\views\home\city-list.vue
-->
<template>
  <div class="body index">
    <div class="con flex-cen">
      <Header :title="name" :isBack="false"></Header>
      <div class="topage" style="margin-top:.85rem">
        <img src="@/assets/images/bg/main_bg.png" class="bg">
        <div class="city-content">
          <div class="city-box" v-for="area in cityList" :key="area.value">
            <!-- <img class="title-img" src="@/assets/images/areaTitle/zhejiang.png"> -->
            <img class="title-img" :src="area.cover">
            <div>
              <div class="item" v-for="(city,index) in area.list" :key="city.value"
                :style="{ backgroundImage: `url(${city.cover})`, marginRight: (index+1)%3==0 ? '0' : '5.6%'}"
                @click="goCityInfo(area, city)">
                <p class="name">{{city.label}}</p>
              </div>
            </div>
          </div>
        </div>
        <img src="@/assets/images/bg/top.png" class="top_icon" @click="backTop">
        <img src="@/assets/images/bg/dolphin_bg.png" style="margin-top:.4rem;display:block">
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header.vue'
import cityList from "@/store/modules/cityList";

export default {
  name: 'index',
  data() {
    return {
      name: "暑期度假游",
      percentNum: 0,
      cityList: [],
    }
  },
  methods: { 
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    goCityInfo(area, city) {
      this.$router.push({
        name: 'city-info',
        query: {
          cityName: city.label,
          cityId: city.value,
          areaId: area.value
        }
      })
    }
  },
  components: {
    Header
  },
  mounted() {
    this.cityList = cityList.state.cityList
    console.log('cityList: ',this.cityList)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{box-sizing: border-box;}
  .body, .con{font-size:.8rem;color:#fff;background: #fff !important;} 
  .topage,.bg { width: 7.5rem;height: 100%;object-fit: cover; }
  .city-content{
    margin: -5.2rem .35rem 0;
  }
  .city-box{
    margin-top: .8rem;
    overflow: hidden;
  }
  .title-img{
    height: 1rem;
    margin-bottom: .5rem;
  }
  .item{
    width: 2rem;
    height: 1.5rem;
    text-align: center;
    position: relative;
    border-radius: .2rem;
    background-repeat: no-repeat;
    background-size: cover;
    float: left;
    margin-bottom: .3rem;
  }
  .name{
    position: absolute;
    bottom: 0;
    padding: .15rem 14%;
    font-size: .28rem;
    width: 72%;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0,0,0,.6));
    border-radius: 0 0 .2rem .2rem;
  }
  .top_icon{
    position: absolute;
    right: .5rem;
    width: .99rem;
    bottom: 6rem;
  }
</style>