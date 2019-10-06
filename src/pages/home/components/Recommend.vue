<template>
  <div class="recommend">
    <div class="recommend-content" >
      <span class="recommend-btn" v-for="(item,index) of btnlist" ref="sp"
      :key="item.id" @click="handle(index)">
        {{item.text}}
      </span>
      <router-link to="/city">
        <div class="recommend-more">更多</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    btnlist: Array
  },
  data () {
    return {
      showDefault: {
        background: '#17c0c8',
        color: '#fff'
      }
    }
  },
  updated () {
    this.$refs.sp[0].style.background = '#17c0c8'
    this.$refs.sp[0].style.color = '#fff'
  },
  methods: {
    handle (index) {
      for (let i in this.$refs.sp) {
        this.$refs.sp[i].style.background = ''
        this.$refs.sp[i].style.color = ''
      }
      this.$refs.sp[index].style.background = '#17c0c8'
      this.$refs.sp[index].style.color = '#fff'
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .recommend
    clear both
    height 3.84rem
    .recommend-content
      width 95%
      margin 0 auto
      position relative
      .recommend-btn
        display inline-block
        width 25%
        height 3.64rem
        line-height  3.64rem
        font-size 1.4rem
        text-align center
        border .1rem solid #999999a8
        margin-right 1rem
        color $lightTextColor
        border-radius .2rem
        cursor default
      .recommend-more
        pabsoultRight()
        height 3.64rem
        line-height  3.64rem
        font-size 1.4rem
        color $lightTextColor
        text-decoration underline
</style>
