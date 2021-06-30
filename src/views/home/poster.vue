<!--
 * @Author: your name
 * @Date: 2021-06-22 11:56:56
 * @LastEditTime: 2021-06-22 12:21:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-dev【0425】\src\views\home\poster.vue
-->
<template>
  <div class="body index">
    <div class="con flex-cen">
      <!-- <Header :title="name" ></Header> -->
      <router-link to="/prize" class="topage">
        <img src="../../assets/images/5.jpg" class="bg">
      </router-link>
    </div>
    <!-- <tab></tab>  -->
  </div>
</template>

<script>
import Tab from 'components/tab.vue'
import Header from 'components/header.vue'

export default {
  name: 'index',
  data() {
    return {
      name: "海报结果页",
      percentNum: 0
    }
  },
  methods: { 
  },
  components: {
    Tab,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{background:linear-gradient(135deg,#027C60 0%, #A8271E 100%);box-sizing: border-box;}
  .body, .con{height:100%;font-size:.8rem;font-style:italic;color:#fff;} 
  .topage,.bg { width: 100%;height: 100%;object-fit: cover; }
</style>