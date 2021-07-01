<template>
  <div class="body index">
    <div class="con flex-cen">
      <Header :title="name" :isBack="true"></Header>
      <div class="topage">
        <img v-if="!isCheckGift" class="gift" src="@/assets/images/bg/gift_received_icon.png">
        <img v-if="isCheckGift" class="gift" src="@/assets/images/bg/gift_not_received_icon.png">
        <div class="profile" v-if="cityInfo">
          <img :src="cityInfo.titleCover" class="city-title-img">
          <p class="info">{{cityInfo.describe}}</p>
        </div>
        <div class="content" v-if="cityInfo">
          <p class="subtitle">全景扫描</p>
          <div v-for="item in cityInfo.info" :key="item.text">
            <p class="type0" v-if="item.type == 0">{{item.text}}</p>
            <p class="type1" v-if="item.type == 1">{{item.text}}</p>
            <img class="type2" v-if="item.type == 2" :src="item.text">
            <p class="type3" v-if="item.type == 3">(图源：{{item.text}})</p>
          </div>
          <div v-if="cityInfo.eat && cityInfo.eat.length > 0" class="li" @click="goScenicSpot('eat')">
            <img class="icon" src="@/assets/images/bg/eat_icon.png">
            <p>{{cityInfo.eat[0].describe}}</p>
            <img class="in_icon" src="@/assets/images/bg/in.png">
          </div>
          <img v-if="cityInfo.play && cityInfo.play.length > 0" src="@/assets/images/bg/dividing_line.png">
          <div v-if="cityInfo.play && cityInfo.play.length > 0" class="li" @click="goScenicSpot('play')">
            <img class="icon" src="@/assets/images/bg/play_icon.png">
            <p>{{cityInfo.play[0].describe}}</p>
            <img class="in_icon" src="@/assets/images/bg/in.png">
          </div>
          <img v-if="cityInfo.live && cityInfo.live.length > 0" src="@/assets/images/bg/dividing_line.png">
          <div v-if="cityInfo.live && cityInfo.live.length > 0" class="li" @click="goScenicSpot('live')">
            <img class="icon" src="@/assets/images/bg/zhu_icon.png">
            <p>{{cityInfo.live[0].describe}}</p>
            <img class="in_icon" src="@/assets/images/bg/in.png">
          </div>
        </div>
        <img src="@/assets/images/bg/bg_panda.png" class="bottom-bg">
      </div>
    </div>
    <!-- <tab></tab>  -->
  </div>
</template>

<script>
// import Tab from 'components/tab.vue'
import Header from 'components/header.vue'
import cityList from "@/store/modules/cityList";

export default {
  name: 'index',
  data() {
    return {
      name: "城市介绍",
      percentNum: 0,
      areaId: '',
      cityId: '',
      cityList: [],
      cityInfo: {},
      isCheckGift: false,
    }
  },
  mounted() {
    this.name = this.$route.query.cityName;
    this.areaId = this.$route.query.areaId;
    this.cityId = this.$route.query.cityId;
    this.cityList = cityList ? cityList.state.cityList : []
    this.isCheckGift = localStorage.getItem("receivingStatus") ? true : false
    this.init()
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
    goScenicSpot(type) {
      this.$router.push({
        name: 'scenic-spot',
        query: {
          from: type,
          cityName: this.name,
          cityId: this.cityId,
          areaId: this.areaId,
        }
      })
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
  .gift{
    width: 1rem;
    float: right;
    margin: .5rem .3rem .2rem;
  }
  .profile{
    text-align: center;
    clear: both;
  }
  .city-title-img{
    height: 2rem;
  }
  .content{
    margin: .2rem .3rem;
  }
  .subtitle{
    font-size: .33rem;
    color: #4C808A;
    font-weight: bold;
    margin-top: .5rem;
  }
  .info{
    font-size: .33rem;
    font-weight: 300;
    line-height: .5rem;
    margin: .2rem auto;
    width: 55%;
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
  .li{
    margin: .3rem 0 0;
    display: flex;
    align-items: center;
  }
  .li p{
    font-size: .32rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 75%;
    margin-left: 8%;
  }
  .li .icon{
    width: .8rem
  }
  .li .in_icon{
    width: .15rem;
    position: absolute;
    right: .4rem;
  }
  .bottom-bg{
    margin-top: .5rem;
    display: block;
  }
</style>