<template>
  <div class="holiday">
    <span class="iconfont iconfont-ico">&#xe601;</span>
    <span class="title">当季热门度假</span>
    <router-link
    class="holiday-icon"
    v-for="item of holidayList"
    :key="item.id"
    tag="div"
    :to="'/detail/'+ item.id"
    >
      <div class="icon">
        <div class="icon-content">
          <div class="icon-desc">
            <div class="desc-title">{{item.desctitle}}</div>
            <div class="desc-text">{{item.desctext}}</div>
          </div>
          <img class="icon-img" :src="item.imgUrl" alt="" >
        </div>
        <div class="icon-bottom">
          <div class="icon-text">{{item.icontext}}</div>
          <div class="icon-money">{{item.iconmoney}}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHoliday',
  props: {
    holidayList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .holiday
    width 100%
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
        .icon-content
          position relative
          .icon-img
            imgStyle()
            padding-bottom .06rem
          .icon-desc
            position absolute
            left 50%
            transform translateX(-50%)
            bottom .22rem
            width 10rem
            height 5rem
            background #000
            color white
            opacity 0.7
            .desc-title
              font-size 1.5rem
              font-weight 700
              margin .8rem 0 .3rem 0
            .desc-text
              margin-top .5rem
              font-size 1rem
              color #f9d902
        .icon-bottom
          text-indent $textIndent
          text-align left
          .icon-text
            font-size 1.8rem
            margin .5rem 1rem 0 0
            ellipsis()
          .icon-money
            moneyStyle()
</style>
