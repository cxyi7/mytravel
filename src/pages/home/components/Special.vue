<template>
  <div class="special">
    <div class="special-icon" v-for="(item,index) of showspecial" :key="index">
      <div class="icon-img" :key="item.id">
        <img :src="item.imgUrl" alt="" class="img-centent">
      </div>
      <div class="icon_desc">
        <p class="desc-title">{{item.title}}</p>
        <p class="desc-text">{{item.text}}</p>
        <p class="desc-money">{{item.money}}<small>起</small></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSpecial',
  props: {
    showspecial: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .special
    margin-top 1rem
    height 45rem
    .special-icon
      position relative
      float left
      height 50%
      width 50%
      .icon-img
        position absolute
        top 0
        left 0
        bottom 8rem
        text-align center
        .img-centent
          height 90%
          width 93%
          border-radius .5rem
      .icon_desc
        position absolute
        bottom 1rem
        left 0
        width 93%
        text-indent 1.5rem
        .desc-title
          margin 0 0 0 0
          font-size 1.8rem
          color $darkTextColor
          font-weight 700
        .desc-text
          margin .5rem 0 0 0
          padding-right .5rem
          font-size 1.6rem
          color #666
          ellipsis()
        .desc-money
          margin .5rem 0 0 -.4rem
          font-size 2.2rem
          font-weight 900
          color #ff7400

</style>
