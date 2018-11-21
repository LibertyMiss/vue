<template>
    <div id="homeContainer">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000" class='swipe'>
            <mt-swipe-item v-for="(item,index) in swipeList" :key='index'>
               <a :href="item.url">
                    <img :src="item.img"/>
               </a>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to='/home/newList'>
                        <img src="../../images/menu1.png" alt="">
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a>
                        <img src="../../images/menu2.png" alt="">
                        <div class="mui-media-body">图片分享</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a>
                        <img src="../../images/menu3.png" alt="">
                        <div class="mui-media-body">商品购买</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a>
                        <img src="../../images/menu4.png" alt="">
                        <div class="mui-media-body">留言反馈</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a>
                        <img src="../../images/menu5.png" alt="">
                        <div class="mui-media-body">视频专区</div>
                    </a>
                    </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a>
                        <img src="../../images/menu6.png" alt="">
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>
        </ul>        
    </div>
</template>
<script>
export default {
  data() {
    return {
      swipeList: []
    };                                                        
  },
  created() {
    this.getImgData();
  },
  methods: {
    getImgData() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status == 0) {
          this.swipeList = result.body.message;
          console.log(this.swipeList);
        }
      });
    }
  }
};
</script>
<style lang='less'>
#homeContainer {
  .swipe{
    height: 200px;
  }
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: skyblue;
    }
    &:nth-child(2) {
      background-color: pink;
    }
    &:nth-child(3) {
      background-color: purple;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
    }
  }

  //六宫格样式
  .mui-grid-view {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
      border: none;
      img {
        width: 60px;
        height: 60px;
      }
      .mui-media-body {
        font-size: 13px;
      }
    }
  }
}
</style>
