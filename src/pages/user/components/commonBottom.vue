<template>
  <div class="commonbottom">
    <div class="sure">{{this.commnway}}</div>
    <div class="desc">
      {{this.commnway + '即同意去哪儿'}}
      <a href="javascript(0);">用户服务协议</a>和
      <a href="javascript(0);">隐私政策</a>
    </div>
    <div class="bottom">
      <div class="bottom-other border-bottom">电脑版</div>
      <div class="bottom-other border-bottom">关于我们</div>
    </div>
    <div class="note">Qunar京ICP备05021087</div>
  </div>
</template>

<script>
export default {
  name: 'CommonBottom',
  props: {
    commnway: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .commonbottom
    width 100%
    .sure
      width 96%
      margin 0 auto
      font-size 1.8rem
      padding 1.5rem 0
      text-align center
      background $bgColor
      color #FFFFFF
      border-radius .3rem
    .desc
      width 100%
      font-size 1.2rem
      color $lightTextColor
      margin-top 3rem
      text-align center
      a
        color $lightTextColor
    .note
      clear both
      color $lightTextColor
      -ms-user-select none
      -moz-user-select none
      -webkit-user-select none
      font-size 1.2rem
      text-align center
      padding-top 1.5rem
    .bottom
      width 100%
      .bottom-other
        width 50%
        float left
        text-align center
        font-size 1.6rem
        color $bgColor
        padding-bottom 2rem
        margin-top 30rem
</style>
