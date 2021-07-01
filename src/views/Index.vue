<template>
  <div class="container">
    <!-- <van-field
      readonly
      clickable
      label="城市"
      :value="value"
      placeholder="选择城市"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
      />
    </van-popup> -->
    <div class="form-container"></div>
    <img
      class="bg-img"
      src="https://guanyuoss.oss-cn-qingdao.aliyuncs.com/prod/app/Wc2uphHkl4zjgR1hjgxwfg.png"
      alt=""
    />
    <img
      class="bg-img"
      src="https://guanyuoss.oss-cn-qingdao.aliyuncs.com/prod/app/J1AqSIECSFYkOB-3hxtJsg.png"
      alt=""
    />
    <img
      class="bg-img"
      src="https://guanyuoss.oss-cn-qingdao.aliyuncs.com/prod/app/wUFfJFMXgafHAN78I8UYmA.png"
      alt=""
    />
    <img
      class="bg-img"
      src="https://guanyuoss.oss-cn-qingdao.aliyuncs.com/prod/app/cID43nMlP3sTIDVSIAD5Sg.png"
      alt=""
    />
    <img
      class="bg-img"
      src="https://guanyuoss.oss-cn-qingdao.aliyuncs.com/prod/app/HnumNcuu_AGWF387JSzQPQ.png"
      alt=""
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class PropsPage extends Vue {
  showPicker = false;

  columns = [
    { text: '杭州', disabled: true },
    { text: '宁波' },
    { text: '温州' },
  ];
}
</script>
<style lang="less" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background: #ffffff;
  position: relative;

  .bg-img {
    width: 100%;
  }

  .form-container {
    width: 620px;
    height: 958px;
    background: #ffffff;
    position: absolute;
    top: 541px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
