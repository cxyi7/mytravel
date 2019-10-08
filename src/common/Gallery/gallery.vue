<template>
  <div class="gallery" @click="handleShow">
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(page,index) of imgUrl" :key="index">
          <img :src="page" alt="" class="img-centent">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    imgUrl: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        autoplay: false,
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleShow () {
      this.$emit('change')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery >>> .swiper-pagination-fraction
    position absolute
    color #FFFFFF
    bottom -5rem
  .gallery >>> .swiper-container
    overflow inherit
  .gallery
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background #000000
    .wrapper
      .img-centent
        width 100%
</style>
