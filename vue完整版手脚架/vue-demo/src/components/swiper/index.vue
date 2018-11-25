<template>
    <div>
        <!-- 轮播图 -->
       <mt-swipe :auto="4000" class='swipe'>
            <mt-swipe-item v-for="(item,index) in swipeList" :key='index'>
               <a :href="item.url">
                    <img :src="item.img"/>
               </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
// import swipe from "../../components/swiper/";
export default {
  props: ["swipeList"],
};
</script>

<style>
.swipe {
  height: 200px;
}
</style>