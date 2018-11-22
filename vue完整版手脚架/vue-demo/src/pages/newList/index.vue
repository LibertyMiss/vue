<template>
    <div class="newListContainer">
        <!-- 轮播图 -->
        <ul class="mui-table-view">
            <li v-for="item in newsList" :key='item.id' class="mui-table-view-cell mui-media">
				<router-link :to="'/home/newsInfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h4 class='title'>{{ item.title }}</h4>
						<p class="mui-ellipsis">
                            <span class='ctime'>{{ item.add_time | dataFormat('YYYY-mm-DD') }}</span>
                            <span class='click'>点击:{{ item.click }}次</span>
                        </p>
					</div>
				</router-link>
			</li>
		</ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewList();
  },

  methods: {
    getNewList() {
      this.$http.get("api/getnewsList").then(result => {
        if (result.body.status == 0) {
          this.newsList = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang='less'>
.newListContainer {
  .mui-table-view {
    .mui-media-body {
      .title {
        font-size: 14px;
        font-weight: 700;
      }
      .mui-ellipsis {
        color: #008;
        .click{
            float: right;
            margin-right:20px;
        }
      }
    }
  }
}
</style>
