
<template>
  <div class="body index">
    <div class="con flex-cen">
      <img src="../../assets/images/6.jpg" class="bg">
    </div>
  </div>
</template>

<script>
import Tab from 'components/tab.vue'
import Header from 'components/header.vue'

export default {
  name: 'index',
  data() {
    return {
      name: "画面描述",
      percentNum: 0
    }
  },
  methods: { 
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{background:linear-gradient(135deg,#027C60 0%, #A8271E 100%);box-sizing: border-box;}
  .body, .con{height:100%;font-size:.8rem;font-style:italic;color:#fff;} 
  .topage,.bg { width: 100%;height: 100%;object-fit: cover; }
</style>