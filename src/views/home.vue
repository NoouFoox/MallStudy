<template>
  <div>
    <navbar class="home-nav">
      <div slot="center">首页-购物街</div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import {getHomeDtat} from "@/network/home";

export default {
  name: "home",
  data() {
    return {
      result: null,
      banners:[]
    }
  },
  components: {Navbar},
  created() {
    getHomeDtat().then(res => {
      // console.log(res)
      this.result=res
      this.banners=res.list
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
