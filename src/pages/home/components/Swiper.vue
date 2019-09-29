<template>
  <div class="wrapper swiper-no-swiping">
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" >
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #ff4500 !important
    height 1.3rem
    width 1.3rem
  .wrapper >>> .swiper-pagination-bullet
    height 1.3rem
    width 1.3rem
    background #999999
    opacity 1
  .wrapper
    overflow hidden
    width 100%
    height 0
    text-align center
    padding-bottom 32.8125%
    .swiper-img
      width 95%
      margin-top 1rem
      border-radius .7rem
</style>
