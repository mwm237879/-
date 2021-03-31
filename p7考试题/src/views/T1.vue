<template>
  <div>
    <h1>考试题1、一周任务计划表</h1>
    <ul>
      <li v-for="(item, i) in typelist" :key="i">{{ item }}</li>
    </ul>
    <div class="content">
      <ul @click="tab(0)">
        <li></li>
      </ul>
      <ul @click="tab(1)">
        <li></li>
      </ul>
      <ul @click="tab(2)">
        <li></li>
      </ul>
      <ul @click="tab(3)">
        <li></li>
      </ul>
      <ul @click="tab(4)">
        <li></li>
      </ul>
      <ul @click="tab(5)">
        <li></li>
      </ul>
      <ul @click="tab(6)">
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      typelist:['周一','周二','周三','周四','周五','周六','周日'],
      id:0
    }
  },
  methods:{
    tab(v){
       this.id=v
    }
  }

}
</script>
<style >
.content {
  display: flex;
}
ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  width: 100px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}
.content ul {
  min-width: 100px;
  max-width: 200px;
  height: 50px;
  border: 1px solid #ccc;
}
</style>