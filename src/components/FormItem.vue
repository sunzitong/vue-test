<template>
  <div>
    <div class="title-container">
      {{ title }}
      <span class="asterisk">*</span>
    </div>
    <div class="content-container">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({ default: '' }) title;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.asterisk {
  color: #cc8e62;
  margin-left: 10px;
}
.title-container {
  margin: 8px 0px 5px;
  display: flex;
  font-size: 24px;
  color: #333333;
  align-items: center;
}

.content-container {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
}
</style>
