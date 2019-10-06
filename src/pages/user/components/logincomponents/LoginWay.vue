<template>
  <div class="loginway">
    <div class="longinway-choose">
      <div class="choose"
      v-for="(item,index) of showData[showChoose]" :key="index">
        <div class="choose-right">{{item.type}}</div>
        <input type="text" class="choose-input" ref="ipt"
        placeholder="" :key="item.id">
        <div class="getvcode border" v-show="showtime">获取验证码</div>
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginWay',
  props: {
    showChoose: Number
  },
  data () {
    return {
      'showtime': true,
      'showData': [[{
        'id': '01',
        'type': '手机号',
        'tips': '请输入手机号'
      }, {
        'id': '02',
        'type': '验证码',
        'tips': '请输入验证码'
      }], [{
        'id': '011',
        'type': '帐号',
        'tips': '手机号/邮箱/用户名'
      }, {
        'id': '012',
        'type': '密码',
        'tips': '请输入密码'
      }]]
    }
  },
  mounted () {
    for (let i in this.showData[this.showChoose]) {
      this.$refs.ipt[i].placeholder = this.showData[this.showChoose][i].tips
    }
  },
  updated () {
    for (let i in this.showData[this.showChoose]) {
      this.$refs.ipt[i].placeholder = this.showData[this.showChoose][i].tips
    }
  },
  watch: {
    showChoose () {
      this.showtime = this.showChoose !== 1
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .border
    &:before
      border-color #9999994f
    &:after
      border-color #9999994f
  .loginway
    clear both
    width 100%
    .empty
      width 100%
      height 1rem
      background #f3f9fc
    .longinway-choose
      position relative
      width 100%
      .choose
        font-size 1.6rem
        display flex
        border-top 0.0625rem solid #9999994f
        border-bottom 0.0625rem solid #9999994f
        .choose-right
          display inline-block
          color $bgColor
          width 6rem
          text-indent 1rem
          height 4rem
          line-height 3.9rem
          margin-top -0.0625rem
        .choose-input
          flex 1
          text-indent 3rem
          border none
          outline none
          color #999
        .getvcode
          position absolute
          box-sizing border-box
          right 1rem
          bottom .6rem
          font-size 1.6rem
          height 3rem
          line-height 3rem
          padding 0 1rem
          color $lightTextColor
</style>
