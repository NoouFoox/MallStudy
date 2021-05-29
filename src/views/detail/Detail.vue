<template>
  <div id="detail" class="detail">
    <detail-navbar @titleClick="titleClick"/>
    <scroll class="content" ref="descroll">
      <detail-swiper :top-image="topImage"/>
      <DetalBaseInfo :goods="goodsInfo"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-img-info :detailInfo="detailInfo" @detailInmageLoad="detailInmageLoad"/>
      <detail-params ref="detailParams" :item-params="itemParams"/>
      <detail-comm-info ref="CommInfo" :comment-info="commentInfo"/>
      <good-list ref="DeGoodList" :goods="recommended"/>
    </scroll>
  </div>

</template>

<script>


import DetailNavbar from "@/views/detail/childcomponent/DetailNavbar";

import {debounce} from "@/common/utils";
import {getdetaildata, getRecommend, Goods} from "@/network/detail";
import DetailSwiper from "@/views/detail/childcomponent/DetailSwiper";
import DetalBaseInfo from "@/views/detail/childcomponent/DetalBaseInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailShopInfo from "@/views/detail/childcomponent/DetailShopInfo";
import DetailImgInfo from "@/views/detail/childcomponent/DetailImgInfo";
import DetailParams from "@/views/detail/childcomponent/DetailParams";
import DetailCommInfo from "@/views/detail/childcomponent/DetailCommInfo";
import GoodList from "@/components/content/Goods/goodList";
import {itemIxin} from "@/common/mixin";

export default {
  name: "Detail",
  components: {
    GoodList,
    DetailCommInfo,
    DetailParams,
    DetailImgInfo,
    DetailShopInfo,
    Scroll,
    DetalBaseInfo,
    DetailSwiper,
    DetailNavbar
  },
  mixins: [itemIxin],
  data() {
    return {
      iid: null,
      topImage: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommended: [],
      themeTopYs: [],
      getThemeTopY: null
    }
  },
  activated() {
    this.$refs.descroll.scrollTo(0, 0, 1)
    this.iid = this.$route.params.iid
    getdetaildata(this.iid).then(res => {
      const data = res.data.result
      this.topImage = data.detailInfo.detailImage[0].list
      this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shopInfo = data.shopInfo
      this.detailInfo = data.detailInfo
      this.itemParams = data.itemParams
      if (data.rate.cRate!==0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    getRecommend().then(res => {
      this.recommended = res.data.data.list
    })
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.detailParams.$el.offsetTop)
      this.themeTopYs.push(this.$refs.CommInfo.$el.offsetTop)
      this.themeTopYs.push(this.$refs.DeGoodList.$el.offsetTop)
    })
  },
  methods: {
    detailInmageLoad() {
      this.$refs.descroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.descroll.scrollTo(0, -this.themeTopYs[index], 618)
    }
  }
}
</script>

<style scoped>
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}

.content {
  background-color: #fff;
  height: calc(100% - 44px);
}
</style>
