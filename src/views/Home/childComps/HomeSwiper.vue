<template>
  <swiper>
    <swiperitem v-for="(item ,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiperitem>
  </swiper>
</template>

<script>
import {swiper, swiperitem} from "@/components/common/swiper/index"

export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type : Array,
      default(){
        return []
      }
    }
  },
  //写错
  components: {
    swiper,
    swiperitem
  }
}
</script>

<style scoped>

</style>
