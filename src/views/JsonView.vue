<template>
  <div class="box">
    <h3 class="title">{{ title }}</h3>
    <p style="text-align: right">{{ json.length }}개</p>
    <hr />
    <ul>
      <li v-for="item of json" :key="item.h">
        <strong>{{ item.h }}({{ item.k }})</strong> : <span style="font-size:10pt;"> {{ item.t }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import json from "../assets/data.json";
export default {
  data() {
    return {
      title: "사자성어(local JsonFile 읽어 출력하기)",
      json,
    };
  },
};
</script>
<style scoped>
div.box {
  padding: 10px;
  margin: 10px;
  text-align: center;
}
h3.title {
  font-weight: bold;
}
ul {
  list-style: disc ;
}
li {
  padding: 3px;
  margin: 2px;
  text-align: left;
}
</style>
