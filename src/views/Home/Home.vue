<template>
  <div>
    <navbar class="home-nav">
      <div slot="center">首页-购物街</div>
    </navbar>
    <HomeSwiper :banners="banners"/>
    <NFHomeReView :recommended="recommended"/>
  </div>
</template>

<script>

import Navbar from "@/components/common/navbar/Navbar";
import {getHomeDtat} from "@/network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import NFHomeReView from "@/views/Home/childComps/NFHomeReView";
export default {
  name: "home",
  data() {
    return {
      recommended:[],
      result: null,
      banners: []
    }
  },
  components: {
    NFHomeReView,
    HomeSwiper,
    Navbar,
  },
  created() {
    getHomeDtat().then(res => {
      this.recommended = res.recommend.list
      console.log(this.recommended)
      this.banners = res.banner.list
    })
  }
}
</script>

<style scoped>
.home-nav {
  background: #FF699C;
  color: white;
}
</style>
