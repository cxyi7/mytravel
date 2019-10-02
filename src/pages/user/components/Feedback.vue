<template>
  <div class="feedback">
    <div class="empty"></div>
    <div class="icon-feedback border-topbottom" v-for="(item,index) of feedback"
    :key="index" ref="showColor">
      <span class="icon-outside">
        <span class="iconfont icon-img" v-html="item.iconImg"></span>
      </span>
      {{item.desc}}
      <span class="iconfont icon-go">&#xeb9a;</span>
    </div>
    <div class="icon-bottom">
      <div class="icon-bottom-desc">Qunar京ICP备05021087</div>
      <div class="icon-bottom-change">电脑版</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFeedback',
  data () {
    return {
      'feedback': [{
        'iconImg': '&#xebad;',
        'desc': '意见反馈'
      }, {
        'iconImg': '&#xebb1;',
        'desc': '关于去哪儿网'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .border-bottom
    &:before
      border-color #999
    &:after
      border-color #999
  .feedback
    width 100%
    .empty
      height 1rem
      background #EEEEEE
    .icon-feedback
      width 100%
      font-size 1.6rem
      .icon-outside
        display inline-block
        height 3rem
        width 3rem
        background #90a4ae
        border-radius 1.2rem
        margin 1rem
        text-align center
        line-height 3rem
        .icon-img
          color #FFFFFF
          font-size 1.8rem
      .icon-go
        float right
        line-height 5rem
        margin-right 1rem
        font-weight lighter
        color #99999957
    .icon-bottom
      height 9rem
      width 100%
      background #EEEEEE
      text-align center
      position relative
      .icon-bottom-desc
        display inline-block
        margin-top 6em
        color $lightTextColor
        -ms-user-select none
        -moz-user-select none
        -webkit-user-select none
      .icon-bottom-change
        position absolute
        right 3rem
        top 6rem
        color $bgColor
</style>
