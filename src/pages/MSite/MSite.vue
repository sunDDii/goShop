<!--  -->
<template>
  <div class="msite">
    <!--首页头部-->
    <header-top :title="address.name">
       <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>   
       <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>         
    </header-top>
    <!--首页导航-->
    <nav class="msite_nav">
      <div  v-swiper:mySwiper="swiperOption" v-if="categorysArr.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(item,index) in item" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl +item.image_url" />
              </div>
              <span>{{item.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <img v-else src="./images/msite_back.svg" alt="back">
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shop-list ></shop-list>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
  import HeaderTop from "@/components/HeaderTop/HeaderTop";
  import ShopList from "@/components/ShopList/ShopList"
    
export default {
  data() {
    return {
        swiperOption: {
        loop: true,
        // 如果需要分页器
          pagination:{
            el:'.swiper-pagination',
            clickable:true,
          },//这样写小圆点就有了
        }, 
        baseImageUrl:'https://fuss10.elemecdn.com'  
    };
  },
  components:{
      HeaderTop,
      ShopList
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState(['address','categorys']),
    categorysArr(){//一维数组生成二维数组
      const {categorys} = this
      const arr =[];
      let minArr = [];
      categorys.forEach(element => {
        if(minArr.length===8){
          minArr = []
        }       
        if(minArr.length===0){
          arr.push(minArr)
        }
        minArr.push(element)
      });
      return arr
  
    }
  },
  //监控data中的数据变化
  watch: {},

  methods: {
    //创建swiper对象
    ...mapActions(['getCategorys'])
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getCategorys();
  //  this.getShops();
    this.$store.dispatch('getShops')
  // console.log(this.$store.state.shops)
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
@import '../../common/stylus/mixins.styl';

&.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>