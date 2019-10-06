<template>
  <div class="registered">
    <div class="registered-top">
      <div class="registered-top-content">
        <router-link to="/user">
          <span class="iconfont registered-desc-left">&#xeb99;</span>
        </router-link>
        <div class="registered-desc">注册</div>
      </div>
    </div>
    <div class="empty"></div>
    <div class="registered-choose">
      <div class="choose"
      v-for="item of showData" :key="item.id">
        <div class="choose-right">{{item.type}}</div>
        <input type="text" class="choose-input" ref="ipt"
        placeholder="">
      </div>
      <div class="getvcode border">获取验证码</div>
      <canvas @click="handleChange" ref="cas" class="canvas"></canvas>
    </div>
    <div class="empty"></div>
    <common-bottom :commnway="commnway"></common-bottom>
  </div>
</template>

<script>
import CommonBottom from './commonBottom'
export default {
  name: 'UserRegistered',
  components: {
    CommonBottom
  },
  data () {
    return {
      'commnway': '注册',
      'showData': [{
        'id': '01',
        'type': '手机号',
        'tips': '请输入手机号'
      }, {
        'id': '02',
        'type': '图形码',
        'tips': '请输入图形码'
      }, {
        'id': '03',
        'type': '验证码',
        'tips': '请输入验证码'
      }],
      height: 28,
      width: 98
    }
  },
  methods: {
    getNumber (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    getText () {
      let str = ''
      let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd',
        'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
      str += arr[parseInt(Math.random() * 36)]
      return str
    },
    drawText (ctx, txt, i) {
      ctx.fillStyle = '#000'
      ctx.font = '2rem SimHei'
      let x = (i + 1) * 20
      let y = 25
      let deg = this.getNumber(-45, 45)
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(txt, 0, 0)
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    },
    handleChange () {
      let canvas = this.$refs.cas
      let context = canvas.getContext('2d')
      canvas.width = this.width
      canvas.height = this.height
      context.textBaseline = 'bottom'
      context.fillStyle = '#FFFFFF'
      context.fillRect(0, 0, this.width, this.height)
      for (let i = 0; i < 4; i++) {
        this.drawText(context, this.getText(), i)
      }
    }
  },
  mounted () {
    for (let i in this.showData) {
      this.$refs.ipt[i].placeholder = this.showData[i].tips
    }
    this.handleChange()
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
  .registered
    width 100%
    .empty
      width 100%
      height 1rem
      background #f3f9fc
    .registered-choose
      position relative
      width 100%
      .choose
        font-size 1.6rem
        display flex
        .choose-right
          display inline-block
          color $bgColor
          width 6rem
          text-indent 1rem
          height 4rem
          line-height 4rem
          border-bottom 0.0625rem solid #9999994f
        .choose-input
          flex 1
          text-indent 3rem
          border-top none
          border-right none
          border-left none
          border-bottom 0.0625rem solid #9999994f
          outline none
          color $lightTextColor
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
      .canvas
        position absolute
        bottom 4.6rem
        right 1rem
        border 0.0625rem solid #9999994f
    .registered-top
      width 100%
      height 5rem
      line-height 5rem
      background $bgColor
      .registered-top-content
        width 96%
        margin 0 auto
        display flex
        .registered-desc
          color #FFFFFF
          flex 1
          text-align center
          text-align center
          display inline-block
          font-size 2.4rem
          margin-right 2.8rem
        .registered-desc-left
          float left
          font-size 1.8rem
          color #FFFFFF
          padding 0 .5rem

</style>
