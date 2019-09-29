<template>
  <div class="header">
    <div class="header-center">
      <div class="center-search">
       <span class="iconfont icon-search">&#xe632;</span>
        <div class="icon-desc">搜索景点门票</div>
      </div>
      <div class="center-user">
        <span class="iconfont icon-user">&#xe62f;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .header
    width 100%
    .header-center
      width 95%
      margin 2rem auto
      height 4.4rem
      .center-search
        margin-left 1.5rem
        width 83%
        height 100%
        line-height 4.4rem
        float left
        background #eeeeee
        position relative
        .icon-search
          pabsoultLeft()
          padding 0 1rem
          font-size 2.8rem
          color $lightTextColor
        .icon-desc
          margin-left 4.52rem
          font-size 2rem
          color $lightTextColor
      .center-user
        height 100%
        line-height 4.4rem
        float right
        position relative
        .icon-user
          pabsoultRight()
          padding 0 1rem
          font-size 2.8rem
          color $bgColor
</style>
