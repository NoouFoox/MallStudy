<template>
  <div id="home">
    <navbar class="home-nav">
      <div class="home-nav" slot="center">首页-购物街</div>
    </navbar>
    <TabControl :titles="['流行','新款','精选']"
                @tabClick="tabClick"
                ref="goodList"
                class="tabControl"
                v-show="isTabFixed"/>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadM">
      <HomeSwiper :banners="banners" @swimgLoad="swimgLoad()"/>
      <NFHomeReView :recommended="recommended"/>
      <feture/>
      <TabControl :titles="['流行','新款','精选']"
                  @tabClick="tabClick" ref="goodList"/>
      <goodList :goods="goods[cuType].list"></goodList>
    </scroll>
    <back-top @click.native="backClick()" v-show="isShowBT"></back-top>
  </div>

</template>

<script>

import Navbar from "@/components/common/navbar/Navbar";
import TabControl from "@/components/content/TabControl/TabControl";
import goodList from "@/components/content/Goods/goodList";

import NFHomeReView from "@/views/Home/childComps/NFHomeReView";
import Feture from "@/views/Home/childComps/Feture";

import HomeSwiper from "./childComps/HomeSwiper";
import {itemIxin} from "@/common/mixin";
import {getHomeData, getHomeGoods} from "@/network/home";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/common/BackTop/BackTop";

export default {
  name: "home",
  data() {
    return {
      isTabFixed: false,
      tabOffTop: 0,
      isShowBT: false,
      recommended: [],
      result: null,
      banners: [],
      saveY: 0,
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      cuType: 'pop'
    }
  },
  mixins: [itemIxin],
  components: {
    BackTop,
    Scroll,
    goodList,
    TabControl,
    Feture,
    NFHomeReView,
    HomeSwiper,
    Navbar,
  },
  created() {
    this.getHomeData();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    // 监听图片加载
    const refresh = this.debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('itemImageLoad', () => {
      this.$refs.scroll.refresh()
      // this.$refs.scroll.finishPullUp()
      refresh()
    })
    // 获取tablist offsettop

  },
  computed: {
    showGoods() {
      return this.goods[this.cuType].list
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh();
    //最好进行刷新
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    debounce(func, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    swimgLoad() {
      this.tabOffTop = this.$refs.goodList.$el.offsetTop
      this.$refs.scroll.finishPullUp()
    },
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.cuType = 'pop'
          break
        case 1:
          this.cuType = 'new'
          break
        case 2:
          this.cuType = 'sell'
          break
        default:
          console.log('???')
      }
/*      this.$refs.goodList.currentIndex = index
      this.$refs.goodListb.currentIndex = index*/
    },
    backClick() {
      // console.log("返回")
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    contentScroll(po) {
      this.isShowBT = -po.y > 1000
      this.isTabFixed = (-po.y) > this.tabOffTop
    },
    loadM() {
      // console.log('上拉');
      this.getHomeGoods(this.cuType)
    },
    /**
     * 网络请求相关
     */
    getHomeData() {
      getHomeData().then(res => {
        this.recommended = res.recommend.list
        this.banners = res.banner.list
      }).catch(err => {
        console.log(err)
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        // pop的前30条数据
        // 经典循环
        // for (let n of res.list){
        //   this.goods[type].list.push(n)
        // }
        //快传
        this.goods[type].list.push(...res.list)
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<!--scoped作用域-->
<style scoped>
#home {
  /*padding-top: 43px;*/
  height: 100vh;
  position: relative;
}

.tabControl {
  position: relative;
  z-index: 9;
}

.home-nav {
  background: var(--color-tint);
  color: white;
  position: relative;
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  z-index: 9;
}

.TabControl {
  /*position: sticky;*/
  /*top: 43px;*/
  z-index: 9;
}

.content {
  /*overflow: hidden;*/
  height: calc(100% - 98px);
  position: absolute;
  top: 43px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}

</style>
