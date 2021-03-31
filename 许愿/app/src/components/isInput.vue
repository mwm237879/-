<template>
  <div class="inp">
    <input
      type="text"
      @input="content"
      :value="value"
      placeholder="请输入你的愿望"
    />
  </div>
</template>

<script>
export default {
  name: "",
  props: ["value"],
  data() {
    return {};
  },
  created() {},
  methods: {
    content(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang='scss' scoped>
.inp {
  padding-top: 10px;
}

input {
  width: 240px;
  height: 30px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>