<template>
  <div>
    <navbar class="home-nav">
      <div slot="center">首页-购物街</div>
    </navbar>
    <swiper>
      <swiperitem v-for="(item ,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiperitem>
    </swiper>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import {getHomeDtat} from "@/network/home";
import {swiper, swiperitem} from "@/components/common/swiper"
export default {
  name: "home",
  data() {
    return {
      result: null,
      banners: []
    }
  },
  components: {
    Navbar,
    swiper,
    swiperitem
  },
  created() {
    getHomeDtat().then(res => {
      console.log(res.banner.list)
      this.result = res
      this.banners = res.banner.list
    })
  }
}
</script>

<style scoped>
.home-nav {
  background: #3170a7;
  color: white;
}
</style>
