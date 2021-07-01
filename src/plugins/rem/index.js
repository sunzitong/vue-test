import Vue from 'vue';

// 计算出放大后的字体
// const scaledFontSize = parseFloat(
//   window.getComputedStyle($dom, null).getPropertyValue('font-size'),
// );
// 计算原字体和放大后字体的比例
// const scaleFactor = 100 / scaledFontSize;
const baseSize = 100;

const $dom = document.createElement('div');
// $dom.style.fontSize = '100px';
$dom.style.fontSize = `${baseSize}px`;
document.body.appendChild($dom);
function setRem(vue, rem) {
  rem = rem || baseSize;
  const scale = document.documentElement.clientWidth / 800;
  if (!scale) return;
  // 计算的fontsize
  // const calcPX = rem * scale * scaleFactor;
  const calcPX = rem * scale;
  document.documentElement.style.fontSize = calcPX + 'px';
  // if (document.documentElement.clientWidth > 750) {
  //   document.documentElement.style.width = '750px';
  //   document.documentElement.style.margin = 'auto';
  // } else {
  //   document.documentElement.style.width = '';
  //   document.documentElement.style.margin = '';
  // }
  // 真实fontsize
  const realPX = parseFloat(
    window.getComputedStyle(document.documentElement).fontSize,
  );
  /**
   * 存储rootpx
   */
  vue.rpx = vue.prototype.$rpx = realPX;
  console.log(
    '计算大小:',
    calcPX,
    '实际大小:',
    realPX,
    '缩放比例:',
    // scaleFactor,
  );
}

const Plugin = {
  install(vue, options) {
    const px = options.px;
    /**
     * 存储rem值
     */
    vue.rem = vue.prototype.$rem = px;
    setRem(vue, px);
    setTimeout(() => {
      setRem(vue, px);
    }, 1000);
    window.addEventListener('resize', () => {
      setRem(vue, px);
    });
  },
};

Vue.use(Plugin, { px: baseSize });

export default Plugin;
