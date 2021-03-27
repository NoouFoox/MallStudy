<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">首页-购物街</div>
    </navbar>
    <HomeSwiper :banners="banners"/>
    <NFHomeReView :recommended="recommended"/>
    <feture/>
    <TabControl class="TabControl" :titles="['流行','新款','精选']"/>
    <div>
      <li>第1个</li>
      <li>第2个</li>
      <li>第3个</li>
      <li>第4个</li>
      <li>第5个</li>
      <li>第6个</li>
      <li>第7个</li>
      <li>第8个</li>
      <li>第9个</li>
      <li>第10个</li>
      <li>第11个</li>
      <li>第12个</li>
      <li>第13个</li>
      <li>第14个</li>
      <li>第15个</li>
      <li>第16个</li>
      <li>第17个</li>
      <li>第18个</li>
      <li>第19个</li>
      <li>第20个</li>
      <li>第21个</li>
      <li>第22个</li>
      <li>第23个</li>
      <li>第24个</li>
      <li>第25个</li>
      <li>第26个</li>
      <li>第27个</li>
      <li>第28个</li>
      <li>第29个</li>
      <li>第30个</li>
      <li>第31个</li>
      <li>第32个</li>
      <li>第33个</li>
      <li>第34个</li>
      <li>第35个</li>
      <li>第36个</li>
      <li>第37个</li>
      <li>第38个</li>
      <li>第39个</li>
      <li>第40个</li>
      <li>第41个</li>
      <li>第42个</li>
      <li>第43个</li>
      <li>第44个</li>
      <li>第45个</li>
      <li>第46个</li>
      <li>第47个</li>
      <li>第48个</li>
      <li>第49个</li>
      <li>第50个</li>
      <li>第51个</li>
      <li>第52个</li>
      <li>第53个</li>
      <li>第54个</li>
      <li>第55个</li>
      <li>第56个</li>
      <li>第57个</li>
      <li>第58个</li>
      <li>第59个</li>
      <li>第60个</li>
      <li>第61个</li>
      <li>第62个</li>
      <li>第63个</li>
      <li>第64个</li>
      <li>第65个</li>
      <li>第66个</li>
      <li>第67个</li>
      <li>第68个</li>
      <li>第69个</li>
      <li>第70个</li>
      <li>第71个</li>
      <li>第72个</li>
      <li>第73个</li>
      <li>第74个</li>
      <li>第75个</li>
      <li>第76个</li>
      <li>第77个</li>
      <li>第78个</li>
      <li>第79个</li>
      <li>第80个</li>
      <li>第81个</li>
      <li>第82个</li>
      <li>第83个</li>
      <li>第84个</li>
      <li>第85个</li>
      <li>第86个</li>
      <li>第87个</li>
      <li>第88个</li>
      <li>第89个</li>
      <li>第90个</li>
    </div>
  </div>

</template>

<script>

import Navbar from "@/components/common/navbar/Navbar";
import TabControl from "@/components/content/TabControl/TabControl";

import NFHomeReView from "@/views/Home/childComps/NFHomeReView";
import Feture from "@/views/Home/childComps/Feture";

import HomeSwiper from "./childComps/HomeSwiper";

import {getHomeData, getHomeGoods} from "@/network/home";

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
      }
    }
  },
  components: {
    TabControl,
    Feture,
    NFHomeReView,
    HomeSwiper,
    Navbar,
  },
  created() {
    this.getHomeData();
    this.getHomeGoods('pop');
    // this.getHomeGoods('new');
    // this.getHomeGoods('sell');
  },
  methods: {
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
        console.log(this.goods)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 43px;
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
}
</style>
