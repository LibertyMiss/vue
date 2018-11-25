<template>
    <div class="commentContainer">
        <h2>发表评论</h2>
        <hr>
        <textarea placeholder="请输入要评论的内容,最多120字" v-model='textCon'></textarea>
        <mt-button type="primary" size="large"  @click='commentClick'>发表评论</mt-button>
        <div class="commentList">
            <div class="comment-item" v-for="(item,index) in getComments" :key="index">
                <div class="comment-title">第{{index + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dataFormat()}}</div>
                <div class="comment-content">
                 {{item.content=='undefined' ? '此人有点懒' : item.content || '此人有点懒'}}
            </div>
        </div>
        </div>
        <mt-button type="danger" size="large" plain @click='getMore'>更多+</mt-button>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  props: ["id"],
  data() {
    return {
      getComments: [],
      pageIndex: 1,
      textCon: ""
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
          if (result.body.status == 0) {
            this.getComments = this.getComments.concat(result.body.message);
          } else {
            Toast("获取数据失败!请重试!");
          }
        });
    },
    commentClick() {
      if (this.textCon.trim() == "") {
        return Toast("评论内容不能为空");
      }
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.textCon
        })
        .then(result => {
          if (result.body.status == 0) {
            Toast(result.body.message);
            this.getComments = [];
            this.pageIndex = 1;
            this.textCon = "";
            this.getComment();
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComment();
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
        padding: 0 5px;
        font-size: 13px;
        background-color: #ddd;
      }
      .comment-content {
        font-size: 13px;
        text-indent: 2em;
      }
    }
  }
}
</style>
