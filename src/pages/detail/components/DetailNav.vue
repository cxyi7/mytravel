<template>
  <div class="nav">
    <router-link to="/" v-show="showAbs">
      <span class="iconfont icon-back" >&#xeb99;</span>
    </router-link>
    <div
    class="banner-nav"
    v-show="!showAbs"
    :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont banner-nav-back" >&#xeb99;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailNav',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScrollEvent () {
      // console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop
      if (top > 40) {
        this.showAbs = false
        let opacity = top / 226
        opacity = opacity >= 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScrollEvent)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScrollEvent)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .nav
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
    .banner-nav
      position fixed
      top 0rem
      width 100%
      text-align center
      font-size 1.6rem
      padding 1.1rem 0
      background $bgColor
      .router-link-active
        text-decoration none
        .banner-nav-back
          color #FFFFFF
          font-size 1.6rem
          float left
          margin-left 1rem
</style>
