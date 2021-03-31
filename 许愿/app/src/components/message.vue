<template>
  <div id='message' v-if="show">
     <div>{{msg}}</div>
 </div>
</template>

<script>
export default {
  name: '',
  props:{
     show:Boolean,
     msg:String
  },
 
 }
</script>

<style lang='scss' scoped>
#message{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #000000, $alpha: 0);
    div{
       width: 100px;
       height: 100px;
       line-height: 50px;
       text-align: center;
       padding: 20px;
       font-size: 20px;
       color: #fff;
       background-color: rgba($color: #000000, $alpha: 0.3);
    }
}
</style>