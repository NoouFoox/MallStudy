<template>
  <div id="detail">
    <detail-navbar></detail-navbar>
    <detail-swiper :top-image="topImage"/>
  </div>
</template>

<script>


import DetailNavbar from "@/views/detail/childcomponent/detailNavbar";


import {getdetaildata} from "@/network/detail";
import DetailSwiper from "@/views/detail/childcomponent/DetailSwiper";

export default {
  name: "Detail",
  components: {DetailSwiper, DetailNavbar},
  data() {
    return {
      iid: null,
      topImage:[]
    }
  },
  activated() {
    this.iid = this.$route.params.iid
    getdetaildata(this.iid).then(res => {
      console.log(res.data.result)
      this.topImage=res.data.result.detailInfo.detailImage[0].list
    })
  }
}
</script>

<style scoped>

</style>
