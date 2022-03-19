<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    {{ message }}
    <hr>
    <div v-html="html" style="text-align:left;"></div>
  </div>
</template>

<script>
import html from 'raw-loader!../assets/local.html'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      message : "로컬 html 파일읽어 넣기",
      html : html
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 10px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
