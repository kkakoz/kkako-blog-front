<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="main-container">
      <div id="main">
        <!-- <div>{{$store.state.width}}</div> -->
        <router-view/>
      </div>
    </div>
    
  </div>
</template>

<script>

import HeaderMenu from './components/HeaderMenu.vue';
import HelloWorld from './components/HelloWorld.vue';
import NavBar from './views/NavBar.vue';

export default {
  name: 'app',
  components: {
    HeaderMenu,
    HelloWorld,
    NavBar
  },
  data () {
  },
  methods: {
  },
  mounted() {
    window.onresize = () => {
      console.log("width = ")
      console.log("=", document.body.clientWidth)
        this.$store.commit('setWidth', document.body.clientWidth)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

#main-container {
  width:100%;
}

#main {
  /* margin: 10px 20% 0 20%; */
  padding: 0;
  width: 80%;
  margin: 10px auto;
}

#main-container a {
  font-weight: bold;
  color: #2c3e50;
}

#main-container a.router-link-exact-active {
  color: #42b983;
}
</style>
