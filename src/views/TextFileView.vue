<template>
  <div class="box">
    <h3 class="title">{{ title }}</h3>
    <p style="text-align: right">{{ hanja.length }}개</p>
    <hr />
    <ul>
      <li v-for="item of hanja" :key="item">
        <strong>{{ item.split("|")[1] }}</strong> <br />
        <span style="font-size: 9pt">{{ item.split("|")[3] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// 설치 : npm install raw-loader --save-dev
import txt from "raw-loader!../assets/chunja.txt";
export default {
  data() {
    const hanja = txt.split("\n");
    return {
      title: "천자문 읽기(local TextFile 읽어 출력하기)",
      hanja,
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
  list-style: none;
}
li {
  text-align: center;
  float: left;
  border: 1px solid gray;
  padding: 10px;
  font-size: 15pt;
  width: 200px;
  border-radius: 10px;
  margin: 5px;
}
</style>