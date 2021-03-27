<template>
  <div>
    <navbar class="home-nav">
      <div slot="center">首页-购物街</div>
    </navbar>
    <HomeSwiper :banners="banners"/>
  </div>
</template>

<script>

import Navbar from "@/components/common/navbar/Navbar";
import {getHomeDtat} from "@/network/home";
import HomeSwiper from "./childComps/HomeSwiper";
export default {
  name: "home",
  data() {
    return {
      result: null,
      banners: []
    }
  },
  components: {
    HomeSwiper,
    Navbar,
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
