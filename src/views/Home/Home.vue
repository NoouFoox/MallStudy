<template>
  <div id="home">
    <navbar class="home-nav">
      <div class="home-nav" slot="center">首页-购物街</div>
    </navbar>
    <scroll class="content">
      <HomeSwiper :banners="banners"/>
      <NFHomeReView :recommended="recommended"/>
      <feture/>
      <TabControl class="TabControl" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
      <!--    <goodList :goods="goods[cuType].list"></goodList>-->
      <good-list :goods="showGoods"/>
    </scroll>
  </div>

</template>

<script>

import Navbar from "@/components/common/navbar/Navbar";
import TabControl from "@/components/content/TabControl/TabControl";
import goodList from "@/components/content/Goos/goodList";

import NFHomeReView from "@/views/Home/childComps/NFHomeReView";
import Feture from "@/views/Home/childComps/Feture";

import HomeSwiper from "./childComps/HomeSwiper";

import {getHomeData, getHomeGoods} from "@/network/home";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "home",
  data() {
    return {
      recommended: [],
      result: null,
      banners: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      cuType: 'pop'
    }
  },
  components: {
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
  computed: {
    showGoods() {
      return this.goods[this.cuType].list
    }
  },
  methods: {
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
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background: #FF699C;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.TabControl {
  position: sticky;
  top: 43px;
  z-index: 9;
}

.content {
  /*overflow: hidden;*/
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
