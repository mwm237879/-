<template>
  <div id='inp'>
     <span v-if="$store.state.obj.name">昵称：{{$store.state.obj.name}}</span>
     <slot></slot>
 </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  created() {

  },
  methods:{

  },
 }
</script>

<style lang='scss' scoped>
#inp{
    height: 50px;
    width: 100%;
    line-height: 50px;
    position: relative;
    text-align: center;
    background-color: chartreuse;
    span{
        text-align: left;
        width: 200px;
        position: absolute;
        top: 0;left: 20px;

    }
}
</style>