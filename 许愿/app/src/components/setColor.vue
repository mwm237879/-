<template>
  <ul>
    <li
    :class="id==i?'action':''"
    @click="add(item, i)"
      v-for="(item, i) in colors"
      :key="i"
      :style="{
        background: item,
      }"
    ></li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: ['color'],
  data() {
    return {
      colors: ["yellow", "red", "blue", "pink", "green"],
      id:-1
    };
  },
  watch:{
     color:function(v){
         if(v==''){
             this.id=-1
         }
     }
  },
  created() {},
  methods: {
      add(item, i){
         this.id=i
         this.$emit('getColor',item)
      }
  },
};
</script>

<style lang='scss' scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  li {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.action{
    border: 2px solid palevioletred;
}
</style>