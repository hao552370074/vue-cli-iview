<!--  -->
<template>
  <div class="index.vue">
    <Button @click="modal8 = true" type="primary"
      >Disable mask layer closure</Button
    >
    <Modal title="Title" v-model="modal8" :mask-closable="false">
      
    </Modal>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "home",
  components: {},
  data() {
    //这里存放数据
    return {
      modal8: false,
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
