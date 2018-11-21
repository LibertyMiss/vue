<template>
    <div class="commentContainer">
        <h2>发表评论</h2>
        <hr>
        <textarea placeholder="请输入要评论的内容,最多120字"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="commentList">
            <div class="comment-item" v-for="(item,index) in getComments" :key="index">
                <div class="comment-title">第{{index + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dataFormat()}}</div>
                <div class="comment-content">
                 {{item.content || '此人有点懒'}}
            </div>
        </div>
        </div>
        <mt-button type="danger" size="large" plain>发表评论</mt-button>
    </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      getComments: [],
      pageIndex: 1
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
        //   console.log(result.body);
          if (result.body.status == 0) {
            this.getComments = result.body.message;
            // console.log(this.getComments);
          }
        });
    }
  }
};
</script>

<style lang="less">
.commentContainer {
  .commentList {
    .comment-item {
      margin: 5px 0;
      .comment-title {
        padding:0 5px;
        font-size: 13px;
        background-color: #ddd;
      }
      .comment-content {
        font-size: 13px;
      }
    }
  }
}
</style>
