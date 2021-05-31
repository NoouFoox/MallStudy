<template>
  <div class="cart">
    <navbar class="nav">
      <div slot="center">购物车({{length}})</div>
    </navbar>
    <scroll class="content" :pull-up-load="true" ref="scroll">
      <cate-list/>
    </scroll>
    <cate-bottom/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CateList from "@/views/category/childComps/CateList";
import Navbar from "@/components/common/navbar/Navbar";
import Scroll from "@/components/common/scroll/Scroll";
import CateBottom from "@/views/category/childComps/CateBottom";
export default {
  name: "Cart",
  components:{
    CateBottom,
    Scroll,
    Navbar,
    CateList,
  },
  computed:{
    ...mapGetters({
      length:'cartLenght',
    })
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  color: var(--color-background);
  font-weight: 700;
}
.content{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.cart{
  height:100vh;
}
</style>
