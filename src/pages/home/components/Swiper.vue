<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '00001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d75097876425de8365684f0693b37fd3.jpg'
      }, {
        id: '00002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d75097876425de8365684f0693b37fd3.jpg'
      }]
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
    padding-bottom 32.8125%
    .swiper-img
      width 100%
</style>
