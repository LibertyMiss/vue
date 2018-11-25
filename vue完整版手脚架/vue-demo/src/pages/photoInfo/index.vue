<template>
    <div class="photoContainer">
      <h3 class='title'>{{getPhotoList.title}}</h3>
      <p class="subtitle">
        <span class='time'>发表时间：{{getPhotoList.add_time | dataFormat}}</span>
        <span class='click'>点击：{{getPhotoList.click}}次</span>
      </p>

      <hr>

      <!-- 缩略图区域 -->
      <div class="thumbs">
        <img class="preview-img" v-for="(item,index) in photo" :src="item.src" :key="item.src" height="100" w @click="$preview.open(index, photo)">
      </div>

      <!-- 图片内容区域 -->
      <div class="content" v-html="getPhotoList.content                                                                                                                                         "></div>
      <comment :id="id"></comment>
    </div>
</template>

<script>
import comment from "../../components/comment/";
export default {
  data() {
    return {
      id: this.$route.params.id,
      getPhotoList: [],
      photo: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getPhoto();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status == 0) {
          this.getPhotoList = result.body.message[0];
          // console.log(result.body);
        }
      });
    },
    getPhoto() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        // console.log();
        if (result.body.status == 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          this.photo = result.body.message;
          let arr = [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903860674&di=05fb2ed7c0a1a83203b032af0413739c&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fexp%2Fw%3D480%2Fsign%3D0a7618073112b31bc76ccc21b6193674%2Fa1ec08fa513d269720158c1d5dfbb2fb4216d8a8.jpg',"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903556689&di=62628a65469f1e4102b537135a5915b8&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2Fb03533fa828ba61e570c5bc94d34970a314e5972.jpg",
            "http://img3.imgtn.bdimg.com/it/u=3360690558,3623061169&fm=11&gp=0.jpg",
            "http://pic8.nipic.com/20100719/3320946_123936081858_2.jpg",
            "http://wx2.sinaimg.cn/large/006nLajtly1fk65lrevkqj30dw0dwadz.jpg",
            "http://wx4.sinaimg.cn/large/006WfoFPly1fq0jo9svnaj30dw0dwdhv.jpg",
            "http://pic.58pic.com/58pic/15/35/43/94e58PICdzr_1024.jpg"
          ];

          for (let i = 0; i <= this.photo.length; i++) {
            this.photo[i].src = arr[i];
          }
        }
      });
    }
  },
  components: {
    comment,
  }
};
</script>
<style lang='less'>
.photoContainer {
  .title {
    font-size: 14px;
    text-align: center;
    color: rgb(0, 170, 255);
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
  }
}
</style>
