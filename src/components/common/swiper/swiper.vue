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
      default: 0.10
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0,
      totalWidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      scrolling: false
    }
  },
  mounted: function () {
    // 1.操作DOM, 在前后添加Slide
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 200)
  },
  methods: {
    startTimer: function () {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval)
    },
    stopTimer: function () {
      window.clearInterval(this.playTimer);
    },
    //滚动到正确位置
    scrollContent: function (currentPosition) {
      //0.设置正在滚动
      this.scrolling = true;
      //1.开始滚动动画
      //错误 " transform "
      this.swiperStyle.transition = ' transform ' + this.animDuration + 'ms';
      //anvas setTransform() 方法重置变换矩阵
      this.setTransform(currentPosition)
      //3判断滚动位置
      this.checkPosition();
      //4滚动完成
      this.scrolling = false
    },
// 检验正确位置
    checkPosition: function () {
      window.setTimeout(() => {
        // 1.校验正确的位置
        //transaction->transition√
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth)
        }

        // 2.结束后回调
        this.$emit("transitionEnd", this.currentIndex - 1)
      }, this.animDuration)
    },

    //设置滚动位置
    setTransform: function (position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },
    //操作DOM在dom前后添加slide
    handleDom: function () {
      let swiperEl = document.querySelector('.swiper');
      //获取所有指定类名的元素
      let slidesEls = swiperEl.getElementsByClassName('slide')
      //保存个数
      this.slideCount = slidesEls.length;
      //大于1在前后分别添加slide
      if (this.slideCount > 1) {
        // cloneNode()复制
        let cloneFirst = slidesEls[0].cloneNode(true)
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
        // insertBefore()向列表中插入一个项目 把一个列表项从一个列表移动到另一个中
        swiperEl.insertBefore(cloneLast, slidesEls[0])
        //后加节点
        swiperEl.appendChild(cloneFirst)
        this.totalWidth = swiperEl.offsetWidth;
        //缺少
        this.swiperStyle=swiperEl.style;
      }

      //显示第一个
      this.setTransform(-this.totalWidth)
    },

    // 拖动事件处理
    touchStart: function (e) {
      if (this.scrolling) return
      // 停止计时器
      // this.startTimer()
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },

    touchMove: function (e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth
      let moveDistance = this.distance + currentPosition;
      //设置当前位置
      this.setTransform(moveDistance)
    },

    touchEnd: function () {
      // abs获取绝对值
      // 获取移动距离
      let currentMove = Math.abs(this.distance)
      // 判断最终距离
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex++
      }
      // 移动到正确位置
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 定时器重开
      this.startTimer();
    },

    // 控制上下个
    previous: function () {
      this.changeItem(-1);
    },
    next: function () {
      this.changeItem(1);
    },
    changeItem: function (num) {
      this.stopTimer();
      this.currentIndex += num
      this.scrollContent(-this.currentIndex * this.totalWidth)
      this.startTimer();
    }
  }
}

</script>

<style scoped>
#hy-swiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indi-item.active {
  background-color: rgba(212, 62, 46, 1.0);
}
</style>
