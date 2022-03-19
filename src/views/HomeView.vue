<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="나의 첫번째 Vue.js App"/>
    
  </div>
</template>

<script>
// jquery를 사용하는 파일에 import 후 사용
// import $ from 'jquery';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
}
</script>
