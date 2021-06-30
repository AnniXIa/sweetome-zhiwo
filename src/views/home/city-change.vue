<template>
  <div class="body index">
    <div class="con flex-cen">
      <Header :title="name" :isBack="true"></Header>
      <div class="topage">
        <div v-for="area in cityList" :key="area.value" class="area-box">
          <p class="area-item">{{area.label}}</p>
          <div class="city-box">
            <div v-for="(city,index) in area.list" :key="city.value" class="city-item"
              :style="(index+1)%3==0 ? 'margin-right:0' : ''"
              @click="handleChangeCity(area, city)">{{city.label}}</div>
          </div>
        </div>
        <img src="@/assets/images/bg/bg_panda.png" class="bottom-bg">
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header.vue'
import cityList from "@/store/modules/cityList";
// let vm = {}
export default {
  name: 'index',
  data() {
    // vm = this;
    return {
      name: "北京",
      percentNum: 0,
      cityList: [],
    }
  },
  methods: { 
    handleChangeCity(area, city) {
      // let _url = localStorage.getItem('prevPage') || 'index'
      // let query = JSON.parse(localStorage.getItem('prevPageQuery'))
      // query.cityName = city.label
      // query.cityId = city.value
      // query.areaId = area.value
      let _url = 'city-info'
      let query = {
        cityName: city.label,
        cityId: city.value,
        areaId: area.value,
      }
      console.log('query: ',query)
      this.$router.push({
        name: _url,
        query: {
          ...query
        }
      })
    }
  },
  components: {
    Header
  },
  mounted() {
    this.name = this.$route.query.cityName
    this.cityList = cityList? cityList.state.cityList : []
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{box-sizing: border-box;}
  .topage {
    width: 100%;
    object-fit: cover;
  }
  .topage .area-box{
    padding: .8rem .3rem 0;
    clear: both;
  }
  .topage .area-box .area-item{
    font-size: .3rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
  }
  .topage .area-box .city-item{
    margin: .3rem 0 0;
    border: 1px solid #DEDEDE;
    border-radius: 2px;
    text-align: center;
    padding: .24rem 0;
    font-size: .24rem;
    float: left;
    width: 30%;
    margin-right: 4%;
  }
  .bottom-bg{
    margin-top: 2rem;
    display: block;
  }
</style>