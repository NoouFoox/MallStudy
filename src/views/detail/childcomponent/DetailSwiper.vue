<template>
  <div>
    <swiper class="swipers">
      <Swiperitem v-for="(item,index) in topImage.slice(0,5)"
                  :key="index">
        <img :src="item" alt="">
      </Swiperitem>
    </swiper>
  </div>
</template>

<script>

import Swiper from "@/components/common/swiper/swiper";
import Swiperitem from "@/components/common/swiper/swiperItem";

export default {
  name: "DetailSwiper",
  components: {Swiperitem, Swiper},
  props: {
    topImage: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swipers{
  height: 300px;
  overflow: hidden;
}
</style>
