<template>
  <div
    style="display: flex; width: 100%; justify-content: space-between;"
  >
    <div class="radio-wrapper" v-for="item in data" :key="item.name" @click="callback(item)">
      <div
        :class="['radioContainer', item.select ? 'selected' : 'unselected']"
      >
        <div class="content" />
      </div>
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class RadioGroup extends Vue {
  @Prop({ default: [] }) data;

  callback = (item) => {
    this.$emit('cb', item);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.radio-wrapper {
  display: flex;
  align-items: center;
  color: #333333;
  font-size: 22px;
  .radioContainer {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #333333;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    .content {
      border: 2px solid #333333;
      background: #4a4a46;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      // margin: 5px;
    }

    &.selected {
      .content {
        opacity: 1;
      }
    }

    &.unselected {
      .content {
        opacity: 0;
      }
    }
  }
}
</style>
