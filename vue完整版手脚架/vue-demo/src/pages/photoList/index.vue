<template>
    <div class="photoContainer">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class= "{'mui-control-item':true, 'mui-active':item.id == 0}" v-for="item in getPhotoList" :key='item.id' @click="getListDetail(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>                                                                                                            
        <ul class="photo-list">
            <router-link v-for="item in getList" :key='item.id' :to="'/home/photoListDetails/' + item.id" tag='li'>
                <img v-lazy:src="item.img_url">
                <div class="info">
                <h1 class="info-title">{{item.title}}</h1>
                <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
// 导入mui的js文件,初始化导航滑动组件
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      getPhotoList: [],
      getList: []
    };
  },
  created() {
    this.getPhotos();
    this.getListDetail(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getPhotos() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status == 0) {
          this.getPhotoList = result.body.message;
          this.getPhotoList.unshift({
            id: 0,
            title: "全部"
          });
        }
      });
    },
    getListDetail(listId) {
      this.$http.get("api/getimages/" + listId).then(result => {
        if (result.body.status == 0) {
          this.getList = result.body.message;
          console.log(result.body.message);
        }
      });
    }
  }
};
</script>
<style lang='less'>
* {
  touch-action: pan-y;
}
.photo-list {
  list-style: none;
  padding: 10px;
  margin: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      background-color: rgba(0, 0, 0, 0.2);
      text-align: left;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>

