<template>
  <tabbar>
    <tab-bar-item path="/home" act-clolr="#D4237A">
      <img src="../../assets/img/tabbar/cangchucangku.png" slot="item-icon">
      <img src="../../assets/img/tabbar/ontabbar/cangchucangku.png" slot="item-icon-on">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" act-clolr="#D4237A">
      <img src="../../assets/img/tabbar/mail.png" slot="item-icon">
      <img src="../../assets/img/tabbar/ontabbar/mail.png" slot="item-icon-on">
      <div slot="item-text">信息</div>
    </tab-bar-item>
    <tab-bar-item path="/category" act-clolr="#D4237A">
      <img src="../../assets/img/tabbar/qukuai.png" slot="item-icon">
      <img src="../../assets/img/tabbar/ontabbar/qukuai.png" slot="item-icon-on">
      <div slot="item-text">发现</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" act-clolr="#D4237A">
      <img src="../../assets/img/tabbar/user.png" slot="item-icon">
      <img src="../../assets/img/tabbar/ontabbar/user.png" slot="item-icon-on">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tabbar>
</template>

<script>
import Tabbar from "@/components/common/tabbar";
import TabBarItem from "@/components/common/TabBarItem";

export default {
  name: "MainTabBar",
  components: {TabBarItem, Tabbar}
}
</script>

<style scoped>

</style>
