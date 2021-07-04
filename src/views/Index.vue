<template>
  <div class="container">
    <!-- <van-field
      readonly
      clickable
      label="城市"
      :value="value"
      placeholder="选择城市"
      @click="showPicker = true"
    /> -->
    <!-- 省份picker-->
    <van-popup v-model="showPROVINCE" round position="bottom">
      <van-picker
        show-toolbar
        :columns="provinceColumnData"
        @cancel="showPROVINCE = false"
        @confirm="provinceConfirm"
      />
    </van-popup>
    <!-- 市picker-->
    <van-popup v-model="showCITY" round position="bottom">
      <van-picker
        show-toolbar
        :columns="cityColumnData"
        @cancel="showCITY = false"
        @confirm="cityConfirm"
      />
    </van-popup>
    <!-- 经销商picker-->
    <van-popup v-model="showDEALERCODE" round position="bottom">
      <van-picker
        show-toolbar
        :columns="dealerColumnData"
        @cancel="showDEALERCODE = false"
        @confirm="dealerConfirm"
      />
    </van-popup>
    <div class="form-container">
      <div class="header-container">预约试驾</div>
      <div class="purpose">
        进一步了解林肯的最新动向和未来活动信息？请留下您的资料，一切轻松掌握。（<span
          class="asterisk"
          >*</span
        >号为必填项目）
      </div>
      <div class="item-container">
        <div style="flex: 1">
          <FormItem title="姓">
            <input type="text" placeholder="姓" v-model="LAST_NAME" />
          </FormItem>
        </div>
        <div style="width: 20px" />
        <div style="flex: 1">
          <FormItem title="名">
            <input type="text" placeholder="名" v-model="FIRST_NAME" />
          </FormItem>
        </div>
      </div>
      <div class="radio-container">
        <RadioGroup :data="radioData" v-on:cb="genderCb" />
      </div>
      <div class="item-container">
        <div style="flex: 1">
          <FormItem title="手机电话">
            <input type="number" placeholder="" v-model="MOBILE" />
          </FormItem>
        </div>
      </div>
      <div class="item-container">
        <div style="flex: 1">
          <FormItem title="所在省份">
            <input
              readonly
              class="pick"
              @click="showPicker('PROVINCE')"
              v-model="PROVINCENAME"
            />
          </FormItem>
        </div>
      </div>
      <div class="item-container">
        <div style="flex: 1">
          <FormItem title="所在城市">
            <input
              readonly
              class="pick"
              @click="showPicker('CITY')"
              v-model="CITYNAME"
            />
          </FormItem>
        </div>
      </div>
      <div class="item-container">
        <div style="flex: 1">
          <FormItem title="经销商">
            <input
              readonly
              class="pick"
              @click="showPicker('DEALER')"
              v-model="DEALERNAME"
            />
          </FormItem>
        </div>
      </div>
      <div class="item-container">
        <div style="flex: 1">
          <FormItem title="购车时间">
            <div class="date-container">
              <RadioGroup :data="dateData" v-on:cb="dateCb" />
            </div>
          </FormItem>
        </div>
      </div>
      <div class="personal-info-container">
        <img
          class="personal-info"
          :src="
            hasAgrees
              ? 'https://guanyuoss.oss-cn-qingdao.aliyuncs.com/prod/app/d0WcU4EguOUQTjLF8yHaZw.png'
              : 'https://guanyuoss.oss-cn-qingdao.aliyuncs.com/prod/app/34I3GFZRFubZksp1UJylSw.png'
          "
          @click="hasAgrees = !hasAgrees"
          alt=""
        />
        我同意 <a href="">《个人信息保护声明》</a>
      </div>
      <div class="agree-container">
        您的个人资料有可能会提交至林肯厂商的授权经销商或汽车之家客服，与您进一步沟通试驾、购车等事宜。
      </div>
      <div @click="submit" class="submit-btn">确认提交</div>
    </div>
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
import { Toast } from 'vant';
import { Component } from 'vue-property-decorator';
import FormItem from '../components/FormItem.vue';
import RadioGroup from '../components/RadioGroup.vue';

@Component({
  components: {
    FormItem,
    RadioGroup,
  },
})
export default class PropsPage extends Vue {
  // 同意个人信息保护声明
  hasAgrees = true;

  // 性别radio

  radioData = [
    {
      name: '先生',
      value: 2,
      select: true,
    },
    {
      name: '女士',
      value: 1,
      select: false,
    },
  ];

  // 性别
  GENDER = 2;

  // 购车时间radio

  dateData = [
    {
      name: '3个月内',
      value: '01',
      select: true,
    },
    {
      name: '4-6个月',
      value: '02',
      select: false,
    },
    {
      name: '7-12个月',
      value: '03',
      select: false,
    },
    // {
    //   name: '一年以上',
    //   value: '04',
    //   select: false,
    // },
  ];

  // 购车时间
  date = '01';

  // 显示省份picker
  showPROVINCE = false;

  // 显示城市picker
  showCITY = false;

  // 显示经销少picker
  showDEALERCODE = false;

  // 姓
  LAST_NAME = '';

  // 名
  FIRST_NAME = '';

  // 手机电话
  MOBILE = '';

  // 省名
  PROVINCENAME = '';

  // 省id
  PROVINCEID = '';

  // 市名
  CITYNAME = '';

  // 市id
  CITYID = '';

  // 经销商名
  DEALERNAME = '';

  // 经销商id
  DEALERID = '';

  // 省市经销商
  columns = [
    {
      text: '北京市',
      id: '900010',
      children: [
        {
          text: '北京市',
          id: '9001',
          children: [
            { text: '北京福瑞林肯中心', id: '18010' },
            { text: '北京奥吉通林肯中心', id: '18020' },
            { text: '北京中庆林达林肯中心', id: '18030' },
            { text: '北京中庆之林林肯中心', id: '18040' },
            { text: '北京奥吉通盛霖林肯中心', id: '18050' },
            { text: '北京运通林肯旗舰店', id: '18060' },
            { text: '北京福瑞北苑林肯中心', id: '18070' },
          ],
        },
      ],
    },
    {
      text: '山东省',
      id: '900120',
      children: [
        {
          text: '淄博市',
          id: '9179',
          children: [{ text: '淄博嘉骋林肯中心', id: '18100' }],
        },
        {
          text: '济宁市',
          id: '9184',
          children: [{ text: '济宁嘉骋林肯中心', id: '18101' }],
        },
      ],
    },
  ];

  // columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'];

  // 省份pickerlist
  get provinceColumnData() {
    return this.columns.map((item) => item.text);
  }

  // 城市pickerlist
  get cityColumnData() {
    console.log(2);
    if (!this.PROVINCENAME) {
      return [];
    }
    return this.columns
      .filter((item) => item.text === this.PROVINCENAME)[0]
      .children.map((item2) => item2.text);
  }

  // 经销商pickerlist
  get dealerColumnData() {
    console.log(3);
    if (!this.CITYNAME) {
      return [];
    }
    return this.columns
      .filter((item) => item.text === this.PROVINCENAME)[0]
      .children.filter((item2) => item2.text === this.CITYNAME)[0]
      .children.map((item2) => item2.text);
  }

  // 性别radio回调
  genderCb(obj) {
    this.GENDER = obj.value;
    console.log(obj);
    this.radioData = this.radioData.map((item) => ({
      ...item,
      select: item.value === obj.value,
    }));
  }

  // 性别radio回调
  dateCb(obj) {
    this.date = obj.value;
    this.dateData = this.dateData.map((item) => ({
      ...item,
      select: item.value === obj.value,
    }));
  }

  // 省份picker确认
  // eslint-disable-next-line class-methods-use-this
  provinceConfirm(value) {
    if (value !== this.PROVINCENAME) {
      this.CITYNAME = '';
      this.DEALERNAME = '';
    }
    this.PROVINCENAME = value;
    this.showPROVINCE = false;
    console.log('省份：', value);
  }

  // 城市picker确认
  cityConfirm(value) {
    if (value !== this.CITYNAME) {
      this.DEALERNAME = '';
    }
    this.CITYNAME = value;
    this.showCITY = false;
    console.log('城市：', value);
  }

  // 城市picker确认
  dealerConfirm(value) {
    this.DEALERNAME = value;
    this.showDEALERCODE = false;
    console.log('经销商：', value);
  }

  // 显示picker
  showPicker(type) {
    switch (type) {
      case 'PROVINCE':
        this.showPROVINCE = true;
        break;
      case 'CITY':
        if (!this.PROVINCENAME) {
          Toast('请选择所在省份');
          return;
        }
        this.showCITY = true;
        break;
      default:
        if (!this.PROVINCENAME) {
          Toast('请选择所在省份');
          return;
        }
        if (!this.CITYNAME) {
          Toast('请选择所在城市');
          return;
        }
        this.showDEALERCODE = true;
    }
  }

  pickerValueToId(...args) {
    let count = 0;
    const resultObj = [];
    // eslint-disable-next-line consistent-return
    const func = (arr) => {
      const obj = arr.filter((item) => item.text === args[count])[0];
      console.log('obj', obj);
      resultObj.push(obj.id);
      count += 1;
      if (count < 3) {
        func(obj.children);
      }
    };
    func(this.columns);
    return resultObj;
  }

  // 提交用户线索
  submit() {
    console.log(this.pickerValueToId('北京市', '北京市', '北京福瑞林肯中心'));
    if (!this.LAST_NAME) {
      Toast('请填写您的姓氏');
      return;
    }
    if (!this.FIRST_NAME) {
      Toast('请填写您的名字');
      return;
    }
    if (!this.MOBILE) {
      Toast('请填写您的手机电话');
      return;
    }
    if (!/^1[3456789]\d{9}$/.test(this.MOBILE)) {
      Toast('请填写正确的手机电话');
      return;
    }
    if (!this.PROVINCENAME) {
      Toast('请选择您的所在省份');
      return;
    }
    if (!this.CITYNAME) {
      Toast('请选择您的所在城市');
      return;
    }
    if (!this.DEALERNAME) {
      Toast('请选择经销商');
      return;
    }
    if (!this.hasAgrees) {
      Toast('请同意信息保护声明');
      return;
    }
    const pickerIdAry = this.pickerValueToId(
      this.PROVINCENAME,
      this.CITYNAME,
      this.DEALERNAME,
    );
    const payload = {
      LAST_NAME: this.LAST_NAME,
      FIRST_NAME: this.FIRST_NAME,
      GENDER: this.GENDER,
      MOBILE: this.MOBILE,
      PROVINCE: pickerIdAry[0],
      CITY: pickerIdAry[1],
      DEALER_CODE: pickerIdAry[2],
      EXPECT_ORDER_DATE_TYPE: this.date,
    };
    console.log('payload', payload);
  }
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
  font-weight: bold;

  .asterisk {
    color: #cc8e62;
  }

  .bg-img {
    width: 100%;
  }

  .form-container {
    width: 620px;
    // height: 958px;
    background: #ffffff;
    position: absolute;
    // top: 541px;
    top: 490px;
    left: 50%;
    transform: translate(-50%, 0);

    .header-container {
      height: 83px;
      text-align: center;
      font-size: 32px;
      line-height: 83px;
      background: #133451;
      color: #ffffff;
      font-weight: bold;
    }

    .radio-container {
      margin: 15px 110px 0px 110px;
    }

    .item-container {
      display: flex;
      margin: 0px 20px;

      input {
        display: flex;
        height: 47px;
        width: 95%;
        color: #333333;
        font-size: 24px;
        border: none;
        &::placeholder {
          padding-left: 40px;
        }
        &:disabled {
          background: #ffffff !important;
        }
        &.pick {
          caret-color: transparent;
        }
      }
    }

    .date-container {
      height: 47px;
      margin: 0px 22px;
      display: flex;
      align-items: center;
    }

    .personal-info-container {
      margin: 20px 20px 0px 20px;
      height: 32px;
      display: flex;
      align-items: center;
      font-size: 24px;

      .personal-info {
        height: 60px;
        width: 60px;
      }

      a {
        text-decoration: underline;
        color: #bb6f31;
      }
    }

    .agree-container {
      margin: 20px 20px 0px 20px;
      color: #5f5f5f;
      font-size: 24px;
    }

    .purpose {
      margin: 20px 10px 0px 10px;
      color: #5f5f5f;
      font-size: 24px;
      text-align: center;
    }

    .submit-btn {
      margin: 28px 20px 36px 20px;
      background: #bb6f31;
      height: 72px;
      color: #ffffff;
      font-size: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
