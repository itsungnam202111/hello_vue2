<template>
  <div>
      <h3>{{ message }}</h3>
      <div class="h2 mb-0">
        <b-button style="margin-right:5px;" variant="primary" id="btn1">경고창</b-button>
        <b-button style="margin-right:5px;" variant="secondary" id="btn2">색상변경</b-button>
        <b-button style="margin-right:5px;" variant="danger"  id="btn3">눌러봐</b-button>
        <b-button style="margin-right:5px;" v-b-tooltip.hover title="Tooltip content">Hover Me</b-button>
        <hr>
        <!-- 아이콘사용 -->
        <BootstrapIcon icon="bar-chart-fill" /> <br>
        <BootstrapIcon icon="bar-chart-fill" flip-h variant="danger"/> <br>
        <BootstrapIcon icon="bar-chart-fill" flip-v/> <br>
        <BootstrapIcon icon="arrow-up"/> <br>
        <BootstrapIcon icon="exclamation-triangle-fill" variant="success" size="5x" animation="spin-reverse"/> <br>
        <BootstrapIcon icon="exclamation-circle-fill" variant="success"></BootstrapIcon>
        <BootstrapIcon icon="exclamation-circle-fill" variant="warning"></BootstrapIcon>
        <BootstrapIcon icon="exclamation-circle-fill" variant="danger"></BootstrapIcon>
        <BootstrapIcon icon="exclamation-circle-fill" variant="info"></BootstrapIcon>
        <BootstrapIcon icon="exclamation-circle-fill" variant="primary"></BootstrapIcon>
        <BootstrapIcon icon="exclamation-circle-fill" variant="secondary"></BootstrapIcon>
        <BootstrapIcon icon="exclamation-circle-fill" variant="dark"></BootstrapIcon>
      </div>
  </div>
</template>

<script>
// jquery를 사용하는 파일에 import 후 사용
import $ from 'jquery';

export default {
  data() {
    return {
        message : "Hello Bootstrap!!!"      
    };
  },
  mounted() { // 여기에서 Jquery를 사용함
    const className = ['btn-primary','btn-secondary','btn-success','btn-warning','btn-danger','btn-info','btn-dark']
    let   index = 1;
    $('#btn1').click(function() {
        alert('hi');
    });
    $('#btn2').click(function() {
        $(this).removeClass(className[index]);
        index = ++index%className.length;
        $(this).addClass(className[index]);
    });
    $('#btn3').click(function() {
        $(this).html('눌림')
    });
  }
};
</script>
<style scoped>
  
</style>