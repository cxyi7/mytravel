<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont user-icon">&#xe62f;</span>
    </div>
    <div class="header-center">
      <input type="text" placeholder="搜索景点门票" class="header-center-input">
      <span class="iconfont search-icon">&#xe632;</span>
    </div>
    <div class="header-right">
      城市
      <span class="iconfont address-icon">&#xe63f;</span>
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
  .header
    display flex
    height 7.9rem
    line-height 7.9rem
    background $bgColor
    .header-left
      float left
      width 7rem
      height 100%
      text-align center
      .user-icon
        font-size 3rem
    .header-center
      flex 1
      height 100%
      margin-left -2rem
      line-height 7.9rem
      text-align center
      .header-center-input
        width 32rem
        margin 1.4rem 0
        font-size 2rem
        line-height 4.5rem
        outline none
      .search-icon
        position absolute
        right 9.75rem
        font-size 2.5rem
        color #828482
    .header-right
      float right
      width 7rem
      height 100%
      font-size 1.7rem
      .address-icon
        font-size 1.9rem
</style>
