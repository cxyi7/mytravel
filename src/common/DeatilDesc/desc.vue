<template>
  <div class="desc">
    <div class="float_ border-rightbottom">
      <div class="desc-top" ref="changestyle">4.8分&nbsp;很棒</div>
      <div class="desc-bottom">41条评论</div>
      <span class="iconfont iconfont-back">&#xeb9a;</span>
    </div>
    <div class="float_ border-rightbottom">
      <div class="desc-top" ref="changestyle">景点简介</div>
      <div class="desc-bottom">开放时间，贴士</div>
      <span class="iconfont iconfont-back">&#xeb9a;</span>
    </div>
    <div class="desc-position">
      <span class="iconfont">&#xe63f;</span>
      江西省赣州市章贡区水西镇黄沙村
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailDesc'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .desc
    width 100%
    clear both
    overflow hidden
    .float_
      float left
      width 50%
      text-indent 1.2rem
      position relative
      z-index -1
      .desc-top
        font-size 1.6rem
        margin 1rem 0 .4rem 0
      .desc-bottom
        font-size 1.2rem
        color $lightTextColor
        margin 0 0 1rem 0
      .iconfont-back
        position absolute
        right .5rem
        top 1.8rem
        color $lightTextColor
    .desc-position
      clear both
      text-indent 1.2rem
      font-size 1.6rem
      padding 1rem 0
</style>
