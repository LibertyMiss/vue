<template>
    <div class="goodsListContainer">
      <div class="goodsList" v-for="(item,index) in goodList" :key="index" @click="goDetail(item.id)">
        <img src="http://pic.58pic.com/58pic/15/35/43/94e58PICdzr_1024.jpg">
        <div class="title">{{item.title}}</div>
        <div class="info">
          <div class="price">
            <span class='now'>￥{{item.market_price}}</span>
            <del class="old">￥{{item.sell_price}}</del>
          </div>
          <div class="sell">
            <span>热卖中</span>
            <span>剩{{item.stock_quantity}}件</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 1,
      goodList: [],
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    getGoods() {
      this.$http.get("api/getgoods?pageindex=" + this.pageSize).then(result => {
        if (result.body.status == 0) {
          console.log(result.body.message);
          this.goodList = result.body.message;
        }
      });
    },
    goDetail(id) {
      // 路由导航
      // this.$router.push("/home/goodsinfo/" + id);
      this.$router.push({name:'goodsinfo',params:{id}})
    },
  }
};
</script>

<style lang="less">
.goodsListContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goodsList {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    min-height: 250px;
    img {
      width: 100%;
    }
    .title {
      font-size: 13px;
      margin: 3px;
    }
    .price {
      .now {
        margin-right:10px;
        font-size:16px;
      }
      .old {
        color: red;
        font-weight: 700;
        font-size:13px;
      }
    }
    .sell{
      display:flex;
      justify-content: space-between;
      font-size: 13px;
    }
  }
}
</style>
