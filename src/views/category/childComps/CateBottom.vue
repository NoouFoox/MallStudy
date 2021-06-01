<template>
  <div class="bottom-bar">
    <div class="part"><input checked="checked" type="checkbox" @click="inputclick" ref="gao"><span class="allcheck">全选</span></div>
    <div class="part">合计:{{ sumprice }}</div>
    <div class="part yesjs">结算({{ length }})</div>
    <div></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
// import {mapState} from 'vuex'
export default {
  name: "CateBottom",
  mounted() {
  },
  computed: {
    //放在计算属性里面
    ...mapGetters(['cartList', 'cartLenght']),
    // ...mapState(['cartList','cartLenght']),
    sumprice() {
      // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
      return this.cartList.filter(item => {
        return item.checked
      }).reduce(((previousValue, item) => {
        return previousValue + item.price * item.count
      }), 0).toFixed(2)
    },
    length() {
      return this.cartList.filter(item => item.checked).length
    }
  },
  methods: {
    inputclick() {
      if (this.$refs.gao.checked === true) {
        for (let i of this.cartList) {
          i.checked = true
        }
      } else {
        for (let i of this.cartList) {
          i.checked = false
        }
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #f6f6f6;
  position: relative;
  bottom: 40px;
  display: flex;
  width: 100%;
  line-height: 40px;
  text-align: center;
}

.part {
  flex: 1;
}

.allcheck {
  margin-left: 13px;
}

.yesjs {
  background-color: skyblue;
}
</style>
