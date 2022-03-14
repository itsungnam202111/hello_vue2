<template>
  <div class="hello">
    <h3>{{ name }}({{age}}세, {{gender=='true' ? "남자" : "여자"}})</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld2",
  props: {
    name: String,
    age: Number,
    gender: Boolean
  },
};
</script>

