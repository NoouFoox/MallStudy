<template>
  <swiper>
    <swiperitem v-for="(item ,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiperitem>
  </swiper>
</template>

<script>
import {swiper, swiperitem} from "@/components/common/swiper"

export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  //写错
  components: {
    swiper,
    swiperitem
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('swimgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>
