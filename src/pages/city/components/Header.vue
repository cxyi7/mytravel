<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont icon-back">&#xeb99;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .header
    width 100%
    position relative
    text-align center
    background $bgColor
    font-size 1.4rem
    padding 1rem 0
    .icon-back
      pabsoultLeft()
      font-size 1.4rem
      color #FFFFFF
      padding 1rem
</style>
