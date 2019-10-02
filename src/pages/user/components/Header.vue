<template>
  <div class="header">
     <router-link to="/">
       <span class="icon-back iconfont">&#xeb99;</span>
     </router-link>
     <div class="icon-content">
       <div class="icon-imgcontent">
         <img src="static/user/user.png" alt="" class="icon-img">
       </div>
       <router-link to="/user/components/Login">
         <span class="icon-logo">登录</span>
       </router-link>
       <span class="icon-logo" :style="{color:'#fff'}">/</span>
       <router-link to="/user/components/Registered">
         <span class="icon-logo">注册</span>
       </router-link>
     </div>
     <img src="static/user/bgimg.jpg" alt="" class="bgimg">
  </div>
</template>

<script>
export default {
  name: 'UserHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .header >>> .router-link-active
    text-decoration none
  .header
    width 100%
    position relative
    .icon-back
      position absolute
      left 1rem
      top -4rem
      padding 1rem
      font-size 2rem
      color #fff
    .bgimg
      position absolute
      width 100%
      height 64rem
      margin-top -64rem
      z-index -1
    .icon-content
      width 100%
      margin 5rem 0 2rem 0
      text-align center
      a
        text-decoration none
        .icon-logo
          font-size 1.4rem
          color #FFFFFF
      .icon-imgcontent
        centerStyle()
        border-radius 50%
        margin 0 auto
        height 7.1rem
        width 7.1rem
        background repeating-radial-gradient(circle at 50% 50%,#48474700 50%,#fff)
        .icon-img
          height 6.4rem
          width 6.4rem
</style>
