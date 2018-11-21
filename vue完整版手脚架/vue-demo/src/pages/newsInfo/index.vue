<template>
    <div class="newsInfoContainer">
        <div class="title">{{ getDetail.title }}</div>
        <div class="subtitle">
            <span class="ctime">发表时间: {{ getDetail.add_time | dataFormat('YYYY-mm-DD') }}</span>
            <span class="click">点击: {{ getDetail.click }}次</span>
        </div>
        <hr>
        <div class="content" v-html="getDetail.content"></div>
        <comment :id="id"></comment>
    </div>
</template>
<script>
import comment from "../../components/comment/";
export default {
  data() {
    return {
      id: this.$route.params.id,
      getDetail: []
    };
  },
  created() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        // console.log(result.body);
        this.getDetail = result.body.message[0];
        // console.log(this.getDetail);
      });
    }
  },
  components:{
      comment,
  },  
};
</script>
<style lang='less'>
.newsInfoContainer {
  .title {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: #00c;
    margin: 5px 8px;
  }
  .subtitle {
    font-size: 16px;
    margin: 0 5px;
    color:purple;
    .click {
      float: right;
    }
  }
  .content {
    margin: 5px 5px;
    img{
        width: 100%;
    }
  }
}
</style>
