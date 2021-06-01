<template>
  <div id="detail" class="detail">
    <detail-navbar @titleClick="titleClick" ref="detailNav"/>
    <scroll class="content" ref="descroll" :probe-type=2 @scroll="contentScroll">
      <detail-swiper :top-image="topImage"/>
      <DetalBaseInfo :goods="goodsInfo"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-img-info :detailInfo="detailInfo" @detailInmageLoad="detailInmageLoad"/>
      <detail-params ref="detailParams" :item-params="itemParams"/>
      <detail-comm-info ref="CommInfo" :comment-info="commentInfo"/>
      <good-list ref="DeGoodList" :goods="recommended"/>
    </scroll>
    <detail-bottom @addCart="addToCart"/>
    <back-top @click.native="backClick()" v-show="isShowBT"></back-top>
<!--    <toast :message="message" :show="show"></toast>-->
  </div>
</template>

<script>
import DetailNavbar from "@/views/detail/childcomponent/DetailNavbar";
import DetailSwiper from "@/views/detail/childcomponent/DetailSwiper";
import DetalBaseInfo from "@/views/detail/childcomponent/DetalBaseInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailShopInfo from "@/views/detail/childcomponent/DetailShopInfo";
import DetailImgInfo from "@/views/detail/childcomponent/DetailImgInfo";
import DetailParams from "@/views/detail/childcomponent/DetailParams";
import DetailCommInfo from "@/views/detail/childcomponent/DetailCommInfo";
import GoodList from "@/components/content/Goods/goodList";
import DetailBottom from "@/views/detail/childcomponent/DetailBottom";
import BackTop from "@/components/common/BackTop/BackTop";
// import Toast from "@/components/common/toast/Toast";

import {debounce} from "@/common/utils";
import {getdetaildata, getRecommend, Goods} from "@/network/detail";
import {itemIxin} from "@/common/mixin";
import {mapActions} from "vuex"


export default {
  name: "Detail",
  components: {
    // Toast,
    BackTop,
    DetailBottom,
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
      isShowBT: false,
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommended: [],
      themeTopYs: [],
      currentIndex: 0,
      getThemeTopY: null,
      // message: '',
      // show: false
    }
  },
  activated() {
    this.$refs.descroll.scrollTo(0, 0, 1)
    this.$refs.detailNav.currentIndex = 0
    this.iid = this.$route.params.iid
    getdetaildata(this.iid).then(res => {
      const data = res.data.result
      this.topImage = data.detailInfo.detailImage[0].list
      this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shopInfo = data.shopInfo
      this.detailInfo = data.detailInfo
      this.itemParams = data.itemParams
      if (data.rate.cRate !== 0) {
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
    ...mapActions(['addCart']),
    addToCart() {
      const product = {}
      product.iid = this.iid
      product.image = this.topImage[0]
      product.title = this.goodsInfo.desc
      product.desc = this.goodsInfo.title
      product.price = this.goodsInfo.lPrice
      product.checked = true
      // this.$store.commit('addCart', product)
      this.addCart(product).then(res => {
        // this.show = true
        // this.message = res
        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // }, 1500)
        this.$toast.show(res,2000)
      })
      // this.$store.dispatch('addCart', product).then(res=>{
      //   console.log(res)
      // })
      // dispatch异步
      // commit同步
      // 添加到购物车成功
    },
    backClick() {
      this.$refs.descroll.scrollTo(0, 0, 500)
    },
    contentScroll(po) {
      this.isShowBT = -po.y > 1000
      const poY = -po.y
      let length = this.themeTopYs.length
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i && (i < length - 1 && poY > this.themeTopYs[i] && poY <
            this.themeTopYs[i + 1]) || (i === length - 1 && poY > this.themeTopYs[i])) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
    },
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
