<template>
  <div id="category">
    <navbar class="nav-bar">
      <div slot="center">商品分类</div>
    </navbar>
    <div class="content">
      <scroll class="scroll" :probe-type=3>
        <category-menu :menu-list="categories"
                       @menuItemClick="menuItemClick"/>
      </scroll>
      <category-menu-item ref="item" :categoryData="categoryData"/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import Scroll from "@/components/common/scroll/Scroll";
import CategoryMenu from "@/views/cart/childComps/CategoryMenu";
import {getCategory, getSubCategory} from "@/network/category";
import CategoryMenuItem from "@/views/cart/childComps/CategoryMenuItem";

export default {
  name: "cart",
  components: {CategoryMenuItem, CategoryMenu, Scroll, Navbar},
  data() {
    return {
      categories: [],
      categoryData: [],
      currentIndex: -1,
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getCategory().then((res) => {
        this.categories = res.category.list;
        this.getSubData(0);
      });
    },
    getSubData(index) {
      this.currentIndex = index
      const maitKey = this.categories[index].maitKey;
      getSubCategory(maitKey).then((res) => {
        this.categoryData = res.list;
      });
    },
    menuItemClick(index) {
      this.getSubData(index);
    },

  },
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: var(--color-background);
  font-weight: 700;
}

.scroll {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}

.content {
  display: flex;
}

</style>
