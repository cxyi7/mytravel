<template>
  <div class="login">
    <div class="login-top">
      <div class="login-top-content">
        <router-link to="/user">
          <span class="iconfont login-desc-left">&#xeb99;</span>
        </router-link>
        <div class="login-desc">登录</div>
        <router-link to="/user/components/Registered">
          <span class="login-desc-right">注册</span>
        </router-link>
      </div>
    </div>
    <div class="way">
      <div class="login-way">
        <div class="login-theway" v-for="(item,index) of loginWay"
        :key="index" ref="showColor"
        @click="changeColor(index)">{{item}}</div>
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginHeader',
  data () {
    return {
      'loginWay': ['短信验证码登录', '账号登录']
    }
  },
  mounted () {
    this.$refs.showColor[0].style.background = '#fff'
    this.$refs.showColor[0].style.color = '#00bcd4'
  },
  methods: {
    changeColor (index) {
      for (let i in this.$refs.showColor) {
        this.$refs.showColor[i].style.background = ''
        this.$refs.showColor[i].style.color = ''
      }
      this.$refs.showColor[index].style.background = '#fff'
      this.$refs.showColor[index].style.color = '#00bcd4'
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .login
    width 100%
    .login-top
      width 100%
      height 5rem
      line-height 5rem
      background $bgColor
      .login-top-content
        width 96%
        margin 0 auto
        display flex
        .login-desc
          color #FFFFFF
          flex 1
          text-align center
          text-align center
          display inline-block
          font-size 2.4rem
        .login-desc-left
          float left
          font-size 1.8rem
          color #FFFFFF
          padding 0 .5rem
        .login-desc-right
          float right
          font-size 1.4rem
          color #66ffff
    .way
      clear both
      width 100%
      background $bgColor
      .login-way
        width 96%
        height 4.4rem
        line-height 4rem
        margin 0 auto
        .login-theway
          float left
          width 50%
          text-align center
          box-sizing border-box
          border 0.0625rem solid #FFFFFF
          margin-bottom 1rem
          background $bgColor
          font-size 1.8rem
          color #fff
    .empty
      width 100%
      height 1rem
      background #f3f9fc
</style>
