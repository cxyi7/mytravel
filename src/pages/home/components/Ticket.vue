<template>
  <div class="holiday">
    <span class="iconfont iconfont-ico">&#xe600;</span>
    <span class="title">当季景点门票</span>
    <div class="holiday-icon" v-for="(item,index) of ticketList" :key="index">
      <div class="icon">
        <img class="icon-img" :src="item.imgUrl" alt="" >
        <div class="icon-desc">
          <div class="icon-title">{{item.icontitle}}</div>
          <div class="icon-text">{{item.icontext}}</div>
          <div class="icon-money">{{item.iconmoney}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTicket',
  props: {
    ticketList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .holiday
    margin-top 1.2rem
    .iconfont-ico
      color $bgColor
      font-size 1.8rem
      margin 0 1.2rem
    .title
      bigtitleStyle()
    .holiday-icon
      margin-top 1rem
      .icon
        float left
        width 50%
        text-align center
        .icon-img
          imgStyle()
        .icon-desc
          text-align left
          text-indent $textIndent
          .icon-title
            margin-top 1rem
            font-size 1.8rem
            text-indent 1.5rem
            font-weight 800
          .icon-text
            font-size 1.6rem
            margin .5rem 2.2rem 0 0
            padding-right 1.8rem
            font-weight 300
            ellipsis()
          .icon-money
            moneyStyle()

</style>
