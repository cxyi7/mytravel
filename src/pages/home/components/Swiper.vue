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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      computed: {
        swiper () {
          return this.$refs.mySwiper.swiper
        }
      },
      mounted () {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
      },
      swiperList: [{
        id: '00001',
        imgUrl: 'static/swiper_img/swiper-01.jpg'
      }, {
        id: '00002',
        imgUrl: 'static/swiper_img/swiper-02.jpg'
      }, {
        id: '00003',
        imgUrl: 'static/swiper_img/swiper-03.jpg'
      }, {
        id: '00004',
        imgUrl: 'static/swiper_img/swiper-04.jpg'
      }, {
        id: '00005',
        imgUrl: 'static/swiper_img/swiper-05.jpg'
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
    text-align center
    padding-bottom 32.8125%
    .swiper-img
      width 95%
      margin-top 1rem
      border-radius .7rem
</style>
