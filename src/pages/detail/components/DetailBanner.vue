<template>
  <div>
    <div class="banner" @click="showImg">
      <img src="static/detail/details-01.jpg" alt="" class="img-centent">
      <router-link to="/">
        <span class="iconfont icon-back">&#xeb99;</span>
      </router-link>
      <div class="banner-desc">
        <div class="banner-number">
          <span class="iconfont">&#xe71b;</span>
          10</div>
        <div class="banner-title">通天岩(AAAA景区)</div>
      </div>
      <div class="banner-bottom"></div>
    </div>
    <detail-gallery
    :imgUrl="imgUrl"
    v-show="imgShow"
    @change="handleShowImg"
    ></detail-gallery>
  </div>
</template>

<script>
import DetailGallery from 'common/Gallery/gallery'
import axios from 'axios'
export default {
  name: 'DetailBanner',
  components: {
    DetailGallery
  },
  data () {
    return {
      imgShow: false,
      imgUrl: []
    }
  },
  methods: {
    showImg () {
      this.imgShow = true
    },
    handleShowImg () {
      this.imgShow = false
    },
    getImgInfo () {
      axios.get('/api/detail.json')
        .then(this.handleGetImgInfoSucc)
    },
    handleGetImgInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgUrl = data.imgUrl
      }
    }
  },
  watch: {
    imgShow () {
      this.getImgInfo()
    }
  },
  deactivated () {
    this.imgShow = false
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .img-centent
      width 100%
    .icon-back
      position absolute
      left 1rem
      top 1rem
      width 3rem
      height 3rem
      line-height 3rem
      text-align center
      border-radius 50%
      font-size 1.6rem
      color #FFFFFF
      background rgba(0, 0, 0, .8)
    .banner-desc
      position absolute
      bottom 1.5rem
      left 1.5rem
      color #FFFFFF
      font-size 1.8rem
      .banner-number
        background rgba(0, 0, 0, .8)
        text-align center
        width 6rem
        font-size 1.4rem
        border-radius 1rem
        margin-bottom .5rem
    .banner-bottom
      position absolute
      bottom 0
      left 0
      right 0
      height 1.3rem
      background linear-gradient(to bottom,#ddd0,rgba(0, 0, 0, .9))
</style>
