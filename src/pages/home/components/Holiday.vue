<template>
  <div class="holiday">
    <span class="iconfont iconfont-ico">&#xe601;</span>
    <span class="title">当季热门度假</span>
    <div class="holiday-icon" v-for="(item,index) of holidayList" :key="index">
      <div class="icon">
        <div class="icon-content">
          <div class="icon-desc">
            <div class="desc-title">{{item.desctitle}}</div>
            <div class="desc-text">{{item.desctext}}</div>
          </div>
          <img class="icon-img" :src="item.imgUrl" alt="" >
        </div>
        <div class="icon-text">{{item.icontext}}</div>
        <div class="icon-money">{{item.iconmoney}}</div>
      </div>

    </div>
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
    margin-top 1.2rem
    .iconfont-ico
      color #08d2c0
      font-size 1.8rem
      margin 0 1.2rem
    .title
      font-size 2.4rem
      color #000
      font-weight 900
    .holiday-icon
      margin-top 1rem
      .icon
        float left
        width 50%
        text-align center
        .icon-content
          position relative
          .icon-img
            width 93%
            height 85%
            border-radius .5rem
            padding-bottom .06rem
          .icon-desc
            position absolute
            left 50%
            transform translateX(-50%)
            bottom .22rem
            width 50%
            height 35%
            background #000
            color white
            opacity 0.7
            .desc-title
              font-size 1.8rem
              font-weight 800
              margin .8rem 0 .3rem 0
            .desc-text
              font-size 1.2rem
              color #f9d902
        .icon-text
          font-size 1.8rem
          margin .5rem 1rem 0 0
          text-indent 1.5rem
          ellipsis()
        .icon-money
          text-indent 1.5rem
          font-size 2.2rem
          font-weight 900
          color #ff7400
          text-align left
          margin .5rem 0 1.2rem -.4rem
</style>
