<template>
    <div class="goodsDetailsContainer">
        <!-- 轮播图 -->
        <swipe :swipeList="swipeList"></swipe>
        <!-- 商品购买 -->
        <div class="buy">
          <div class="title"></div>
          <hr>
          <div class="price">
            市场价:<del class="old"></del>  &nbsp; 销售价:<span class="now"></span>
          </div>
          <p>购买数量:
            <input type="button" value="-">
            <input type="text" value="1" class="input">
            <input type="button" value="+">
          </p>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small">加入购物车</mt-button>
        </div>

        <!-- 商品参数 -->
        <div class="buyPrice">
          <h3>商品参数</h3>
          <hr>
          <div class="detail">
            <p>商品货号:</p>
            <p>库存情况: 件</p>
            <p>上架时间</p>
          </div>
        </div>
        <mt-button type="primary" size="large" plain @click="getJieshao(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click=" getComments(id)">商品评论</mt-button>
    </div>
</template>

<script>
import swipe from "../../components/swiper/";
// 导入 数字选择框 组件
// import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      // lunbotu:[],
      swipeList: []
    };
  },
  created() {
    this.getLunbotu();
    this.geiDetailsList();
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.swipeList = result.body.message;
        }
      });
    },
    geiDetailsList() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if(result.body.status == 0){
          console.log(result.body.message);
        }
      })
    },
    getJieshao(id) {
      // 使用编程式跳转
      this.$router.push({name:"goodsTuwen",params:{id}})
    },
    getComments(id) {
      // 使用编程式跳转
      this.$router.push({name:"goodsComments",params:{id}})
    }
  },
  components: {
    swipe
  }
};
</script>

<style lang='less'>
.goodsDetailsContainer {
  .buy {
    .title {
    }
    .price {
    }
    p {
      .input {
        width: 80px;
        text-align: center;
        height: 33px;
        margin:0 -5px;
        background-color: #eee;
        border-radius: 0;
      }
    }
  }
}
</style>
