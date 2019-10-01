<template>
  <div class="wallet">
    <div class="empty"></div>
    <div class="icon-wallet border-topbottom">
      <span class="icon-outside">
        <span class="iconfont icon-img">&#xeba7;</span>
      </span>
      我的钱包
    </div>
    <div class="icon-money">
       <div class="icon-usermoney" v-for="(item,index) of money" :key="index">
         <div class="icon-num">{{item.num}}</div>
         <div class="icon-desc">{{item.desc}}</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserWallet',
  data () {
    return {
      'money': [{
        'num': '0.00',
        'desc': '账户余额'
      }, {
        'num': '0',
        'desc': '星券'
      }, {
        'num': '0',
        'desc': '银行卡'
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
  .wallet
    width 100%
    .empty
      height 1rem
      background #EEEEEE
    .icon-wallet
      width 100%
      font-size 1.6rem
      .icon-outside
        display inline-block
        height 3rem
        width 3rem
        background #ff7043
        border-radius 1.2rem
        margin 1rem
        text-align center
        line-height 3rem
        .icon-img
          color #FFFFFF
          font-size 1.8rem
    .icon-money
      width 90%
      display flex
      margin 0 auto
      .icon-usermoney
        flex 1
        text-align center
        .icon-num
          font-size 1.4rem
          margin-top 2rem
          margin-bottom 1rem
          color $darkTextColor
        .icon-desc
          font-size 1.2rem
          margin-bottom 2rem
          color $lightTextColor
</style>
