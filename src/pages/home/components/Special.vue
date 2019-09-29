<template>
  <div class="special">
    <div class="special-icon" v-for="(item,index) of showspecial" :key="index" >
      <div class="icon-img" :key="item.id">
        <img :src="item.imgUrl" alt="" class="img-centent" ref="imgs">
      </div>
      <div class="icon-desc">
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
  clear both
    margin-top 1rem
    height 45rem
    .special-icon
      position relative
      float left
      height 50%
      width 50%
      .icon-img
        pabsoultLeft()
        bottom 8rem
        text-align center
        .img-centent
         imgStyle()
      .icon-desc
        position absolute
        bottom 1rem
        left 0
        width 93%
        text-indent $textIndent
        .desc-title
          margin 0 0 0 0
          font-size 1.8rem
          color $darkTextColor
          font-weight 700
          ellipsis()
        .desc-text
          margin .5rem 0 0 0
          padding-right .5rem
          font-size 1.6rem
          color #666
          ellipsis()
        .desc-money
          moneyStyle()
</style>
