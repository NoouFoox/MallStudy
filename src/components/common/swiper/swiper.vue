<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item,index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}"
             :key="index">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0,//元素个数
      totalWidth: 0,//swiper的宽度
      swiperStyle: {}, //swiper样式
      currentIndex: 1,//当前的index
      scrolling: false//是否滚动
    }
  },
  //初始化完后操作mounted
  mounted: function () {
    //1.操作DOm在前后添加slide
    setTimeout(() => {
      this.handleDom()
      //开启定时器
      this.startTimer()
    }, 100)
  },
  methods: {
    //定时器操作
    startTimer: function () {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scroolContent(-this.currentIndex * this.totalWidth);
      }, this.interval)
    },
    stopTimer: function () {
      window.clearInterval(this.playTimer)
    },
    // 滚动到正确位置
    scroolContent: function (currentPosition) {
      //0.设置正在滚动
      this.scrolling -= true;
      //1.开始滚动动画
      this.swiperStyle.transaction = 'transform' + this.animDuration + 'ms';
      //anvas setTransform() 方法重置变换矩阵
      this.setTransform(currentPosition)
      //3判断滚动位置
      this.checkPosition();
      //4滚动完成
      this.scrolling = false
    },
    checkPosition: function () {
      window.setTimeout(() => {
        this.swiperStyle.transaction = '0ms';
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
        //结束后回调
        this.$emit("transitionEnd",this.currentIndex-1)
      })
    }
  }

}
</script>

<style scoped>

</style>
