<template>
  <div class="home">
    <my-input>登录页面</my-input>
    <div>
      <p>昵称:<input type="text" v-model="form.nickName" /></p>
      <p>手机:<input type="text" v-model="form.mobile" /></p>
      <p>密码:<input type="password" v-model="form.pass" /></p>
      <button :disabled="disabled" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import myInput from "@/components/myInput";
export default {
  name: "Home",
  components: {
    myInput,
  },
  data() {
    return {
      form: {
        nickName: "",
        mobile: "",
        pass: "",
      },
      disabled: true,
    };
  },
  watch: {
    form: {
      handler() {
        if (this.form.nickName && this.form.mobile && this.form.pass) {
          this.disabled = false;
        } else {
          this.disabled = true;
        }
      },
      deep: true,
    },
  },
  methods: {
   
    login() {
       const reg=/^1[3|5|7|8|9]\d{9}$/
       if(reg.test(this.form.mobile)==false){
          this.$message.show('请输入正确手机号')
          setTimeout(()=>{
             this.$message.hide()
          },1000)
       }else if(this.form.pass.length<6){
           this.$message.show('请输入正确密码')
            setTimeout(()=>{
             this.$message.hide()
          },1000)
       }else{
         let obj={
           name:this.form.nickName,
           mobile:this.form.mobile,
           pass:this.form.pass
         }
         this.$store.commit('stateChange',obj)
         this.$router.push('/about')
       }
     
    },
  },
};
</script>
<style lang="scss">
.home {
  div {
    padding-top: 50px;
    width: 100%;
    text-align: center;
    button{
    margin-top: 20px;
     padding: 6px 20px;
     background-color: chartreuse;
     border:none;
     border-radius: 10px;
     
    }
    button[disabled]{
      background-color: #ccc;
    }
  }
}
</style>
