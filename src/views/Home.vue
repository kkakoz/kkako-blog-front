<template>
  <div class="home">
    <div class="article">
      <img class="leftbox" src="../assets/avatar.webp" height="100%">
      <div class="rightbox">
        <div class="timeh">
          <i class="el-icon-time inlineflex"></i><p class="inlineflex">2021-1-5 11:01</p>
        </div>
      </div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>


<style scoped>
.article {
  opacity: 1;
  padding: auto;
  width: 100%;
  height: 300px;
  position: relative;
  margin: 20px 0 20px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0);
  box-shadow: 0 1px 20px -6px rgb(0 0 0 / 50%);
  transition: box-shadow .3s ease;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.leftbox {
  float: left;
  display: inline-flex;
  height: 300px;
  width: 60%;
}

.rightbox {
  display: inline-flex;
  width: 40%;
}

.timeh {
  margin: 10px 10% 0 10%;
  /* flex-direction: row-reverse; */
  /* justify-content: flex-end; */
  text-align: right;
  width: 100%;
}

.inlineflex {
  display: inline-flex;
}
</style>