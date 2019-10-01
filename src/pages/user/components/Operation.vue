<template>
  <div class="operation">
    <div class="empty"></div>
    <div class="icon-operation border-topbottom" v-for="(item,index) of operation"
    :key="index" ref="showColor">
      <span class="icon-outside">
        <span class="iconfont icon-img" v-html="item.iconImg"></span>
      </span>
      {{item.desc}}
      <span class="iconfont icon-go">&#xeb9a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserOperation',
  data () {
    return {
      'operation': [{
        'iconImg': '&#xe6d5;',
        'desc': '我的订单'
      }, {
        'iconImg': '&#xeba8;',
        'desc': '我的退款'
      }, {
        'iconImg': '&#xe6ed;',
        'desc': '我的发票'
      }, {
        'iconImg': '&#xe6be;',
        'desc': '我的攻略'
      }]
    }
  },
  mounted () {
    this.$refs.showColor[0].firstElementChild.style.background = '#4fc3f7'
    // console.log(this.$refs.showColor[0].firstElementChild)
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
  .operation
    width 100%
    .empty
      height 1rem
      background #EEEEEE
    .icon-operation
      width 100%
      font-size 1.6rem
      .icon-outside
        display inline-block
        height 3rem
        width 3rem
        background #ffa21f
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
</style>
