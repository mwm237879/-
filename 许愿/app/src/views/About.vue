<template>
  <div id="dream">
    <my-input>许愿墙</my-input>
    <isInput @input="getContent" v-model="obj.text"></isInput>
    <setColor @getColor="getColor" :color="obj.color"></setColor>
    <button @click="add" :disabled="disabled">{{ msg }}</button>
    <div class="box">
      <div
        @click="change(item, i)"
        v-for="(item, i) in list"
        :key="i"
        :style="{
          background: item.color,
          left: item.posX,
          top: item.posY,
        }"
        @touchstart="touchstart(i, $event)"
        @touchmove="touchmove(i, $event)"
        @touchend="touchend"
        class="dream-item"
      >
        <i @click.stop="del(i)">X</i>
        {{ item.dream }}
      </div>
    </div>
  </div>
</template>
<script>
import setColor from "@/components/setColor";
import isInput from "@/components/isInput";
import myInput from "@/components/myInput";
export default {
  name: "",
  components: {
    myInput,
    isInput,
    setColor,
  },
  data() {
    return {
      obj: {
        text: "",
        color: "",
      },
      msg: "再想想",
      disabled: true,
      list: [],
      isChange: false,
      changeI: -1,
    };
  },
  created() {
    this.list = JSON.parse(localStorage.getItem("list")) || [];
  },
  watch: {
    obj: {
      handler() {
        if (this.obj.text && this.obj.color) {
          this.disabled = false;
          if (this.isChange) {
            this.msg = "修改";
          } else {
            this.msg = "许愿";
          }
        } else {
          this.disabled = true;
           this.msg="再想想"
        }
      },
      deep: true,
    },
  },
  methods: {
    getContent(v) {
      this.obj.text = v;
    },
    getColor(v) {
      this.obj.color = v;
    },
    add() {
      if (this.isChange) {
        this.list[this.changeI].color = this.obj.color;
        this.list[this.changeI].dream = this.obj.text;
       
      } else {
        let data = {
          dream: this.obj.text,
          color: this.obj.color,
          posX: Math.random() * 224 + "px",
          posY: Math.random() * 417 + "px",
        };
        if (this.list.length < 5) {
          this.list.push(data);
          console.log(this.list);
          localStorage.setItem("list", JSON.stringify(this.list));
        } else {
          this.$message.show("最多添加5条");
          setTimeout(() => {
            this.$message.hide();
          }, 1000);
        }
      }
      this.obj.text = "";
      this.obj.color = "";
    },
    touchstart(i, e) {
      this.posX = e.touches[0].pageX - parseFloat(this.list[i].posX);
      this.posY = e.touches[0].pageY - parseFloat(this.list[i].posY);
    },
    touchmove(i, e) {
      let left = e.touches[0].pageX - this.posX;
      let top = e.touches[0].pageY - this.posY;
      this.list[i].posX = left + "px";
      this.list[i].posY = top + "px";
    },
    touchend() {
      localStorage.setItem("list", JSON.stringify(this.list));
    },
    del(i) {
      this.list.splice(i, 1);
      localStorage.setItem("list", JSON.stringify(this.list));
    },
    change(item, i) {
      this.obj.text = item.dream;
      this.obj.color = item.color;
      this.isChange = true;
      this.changeI = i;
    },
  },
};
</script>

<style lang='scss' scoped>
#dream {
  text-align: center;
  width: 100%;
  height: 100%;
}
button {
  padding: 6px 20px;
  font-style: 20px;
  color: #fff;
  background-color: chartreuse;
  outline: none;
  border: none;
  border-radius: 10px;
}
button[disabled] {
  background-color: #ccc;
}
.box {
  width: 100%;
  height: calc(100% - 171px);
  position: relative;
  div {
    width: 100px;
    height: 100px;
    line-height: 100px;
    position: absolute;
    i {
      border: 1px solid #ccc;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      line-height: 20px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
