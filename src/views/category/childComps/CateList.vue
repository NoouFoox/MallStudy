<template>
  <div>
    <div class='cart-item' v-for='(item, index) in list' :key='index'>
      <div class='cart-select'>
        <!--        处理发送-->
        <check-button :iaActive="item.checked" @click.native="checkClick(item)"/>
      </div>
      <div class='cart-image'>
        <img :src="item.image" alt="">
      </div>
      <div class='cart-info'>
        <div class='title'>{{ item.title }}</div>
        <div class='desc'>商品描述：{{ item.desc }}</div>
        <div class='price'>
          <span>￥ {{ item.price }}</span>
          <div class='count'>
            <button class='add' @click='addClick(item)'>+</button>
            <span class="countNum">x{{ item.count }}</span>
            <button class='sub' @click='subClick(item)'>-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
import CheckButton from "@/views/category/childComps/CheckButton";

export default {
  name: "CateList",
  components: {CheckButton},
  computed: {
    // ...mapGetters({
    //   list: 'cartList'
    // }),
    ...mapState({
      list: 'cartList'
    })
  },
  data(){
    return{
      buttonis:false
    }
  },
  methods: {
    checkClick(item) {
      item.checked = !item.checked
      // 对勾功能依赖此Bug勿删
      item.count +=1
      item.count-=1
    },
    addClick(item) {
      item.count += 1
    },
    subClick(item) {
      if (item.count > 1) {
        item.count -= 1
      } else {
        console.log('不能再减少了')
      }
    },
  }
}
</script>

<style scoped>

.cart-list {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}

.count {
  margin: 4px;
  color: black;
}

.count > span {
  margin: 3px;
}

.cart-item {
  display: flex;
  /* 元素位于容器的中心 */
  align-items: center;
  padding: 10px 8px;
  border-bottom: 3px solid rgba(100, 100, 100, .1);

}

.cart-image {
  margin: 0 8px;
}

.cart-image img {
  width: 70px;
  height: 90px;
  border-radius: 8px;
}

.cart-info {
  overflow: hidden;
}

.cart-info .title {
  color: #333;
  margin-bottom: 20px;
  font-size: 16px;

}

.cart-info .desc {
  font-size: 12px;
  margin-bottom: 20px;

}

.title, .desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.price {
  display: flex;
  justify-content: space-between;
}

.price span {
  color: rgba(250, 131, 51, 0.842);
}

.count button {
  margin: 0 5px;
  width: 20px;
  height: 20px;
  line-height: 10px;
  color: var(--color-high-text);
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 5px;
  text-align: center;
  vertical-align: middle;
}

.count span {
  color: var(--color-high-text);
}
</style>


<style scoped>
.cart-list {
  height: calc(100vh - 44px - 49px - 40px);

  overflow: hidden;
}

.cart-item {
  display: flex;
  /* 元素位于容器的中心 */
  align-items: center;
  padding: 10px 8px;
  border-bottom: 3px solid rgba(100, 100, 100, .1);

}

.cart-image {
  margin: 0 8px;
}

.cart-image img {
  width: 70px;
  height: 90px;
  border-radius: 8px;
}

.cart-info {
  overflow: hidden;
}

.cart-info .title {
  color: #333;
  margin-bottom: 20px;
  font-size: 16px;

}

.cart-info .desc {
  font-size: 12px;
  margin-bottom: 20px;

}

.title, .desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.price {
  display: flex;
  justify-content: space-between;
}

.price span {
  color: rgba(250, 131, 51, 0.842);
}

.count button {
  margin: 0 5px;
  width: 20px;
  height: 20px;
  line-height: 10px;
  color: var(--color-high-text);
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 5px;
  text-align: center;
  vertical-align: middle;
}

.count span {
  color: var(--color-high-text);
}
</style>
