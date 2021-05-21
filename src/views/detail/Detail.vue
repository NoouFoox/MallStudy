<template>
  <div id="detail">
    <detail-navbar></detail-navbar>
    <detail-swiper :top-image="topImage"/>
    <DetalBaseInfo :goods="goodsInfo"></DetalBaseInfo>
  </div>

</template>

<script>


import DetailNavbar from "@/views/detail/childcomponent/detailNavbar";


import {getdetaildata, Goods} from "@/network/detail";
import DetailSwiper from "@/views/detail/childcomponent/DetailSwiper";
import DetalBaseInfo from "@/views/detail/childcomponent/DetalBaseInfo";

export default {
  name: "Detail",
  components: {DetalBaseInfo, DetailSwiper, DetailNavbar},
  data() {
    return {
      iid: null,
      topImage:[],
      goodsInfo:{}
    }
  },
  activated() {
    this.iid = this.$route.params.iid
    getdetaildata(this.iid).then(res => {
      const data=res.data.result
      this.topImage=data.detailInfo.detailImage[0].list
      // 创建商品对象
      this.goodsInfo=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    })
  }
}
</script>

<style scoped>

</style>
