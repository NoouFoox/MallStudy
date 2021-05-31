<template>
  <div class="bottom-bar">
    <div class="part"><input type="checkbox" @click="inputclick" ref="gao"><span class="allcheck">全选</span></div>
    <div class="part">合计:{{sumprice}}</div>
    <div class="part">结算({{length}})</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "CateBottom",
  computed:{
    sumprice(){
      return this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce(((previousValue, item) =>{
        return  previousValue+item.price*item.count
      }),0).toFixed(2)
    },
    length(){
      return this.$store.state.cartList.filter(item=>item.checked).length
    }

  },
  methods:{
    inputclick(){

      if(this.$refs.gao.checked===true){
        for(let i=0;i<this.$store.state.length;i++){
          this.$store.state.cartList[i].checked=true
        }
      }else {
        for(let i=0;i<this.$store.state.length;i++){
          this.$store.state.length.checked=false
        }
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  background-color: #f6f6f6;
  position: relative;
  bottom: 40px;
  display: flex;
  width: 100%;
  line-height: 40px;
  text-align: center;
}
.part{
  flex: 1;
}
.allcheck{
  margin-left: 13px;
}
.part:nth-child(3){
  background-color: skyblue;
}
</style>
