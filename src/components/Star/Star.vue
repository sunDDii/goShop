<!--  -->
<template>
  <div class="star star-24" :class="'star' + size">
    <span class="star-item" v-for="(item,index) in starClasses" :key="index" :class="item"></span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    score: Number,
    size: Number
  },
  //监听属性 类似于data概念
  computed: {
    starClasses() {
      const { score } = this;
      const scs = [];
      const scoreInteger = Math.floor(score);
      console.log(scoreInteger)
      for (let i = 0; i < scoreInteger; i++) {
        scs.push("on");
      }

      if (score * 10 - scoreInteger * 10 >= 5) {
        scs.push("half");
      }

      while (scs.length < 5) {
          console.log('1111')
        scs.push("off");
      }
       console.log(scs)
      return scs;
    }
  },
  //监控data中的数据变化
  watch: {},

  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //console.log(this.score)
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>
<style lang='stylus' scoped>
// @import url(); 引入公共css类
@import '../../common/stylus/mixins.styl';

.star { // 2x图 3x图
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('images/star48_on');
      }

      &.half {
        bg-image('images/star48_half');
      }

      &.off {
        bg-image('images/star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('images/star36_on');
      }

      &.half {
        bg-image('images/star36_half');
      }

      &.off {
        bg-image('images/star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('images/star24_on');
      }

      &.half {
        bg-image('images/star24_half');
      }

      &.off {
        bg-image('images/star24_off');
      }
    }
  }
}
</style>