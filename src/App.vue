<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="반갑습니다. Vue!! 애플리케이션"/>
  <HelloWorld2 name="한사람" age="33" gender="true"/>
  <HelloWorld2 name="두사람" age="18" gender="false"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorld2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
