<template>
  <div class="recommend">
    <div class="recommend-content" >
      <span class="recommend-btn" v-for="(item,index) of btnlist" ref="sp"
      :key="item.id" @click="handle(index)">
        {{item.text}}
      </span>
      <div class="recommend-more">更多优惠</div>
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
      show: 0,
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
  .recommend
    height 3.84rem
    .recommend-content
      width 95%
      float right
      .recommend-btn
        display inline-block
        width 9rem
        height 3.64rem
        line-height  3.64rem
        font-size 1.4rem
        text-align center
        border .1rem solid #999999
        margin-right 1rem
        color #666
        border-radius .2rem
        cursor default
      .recommend-more
        float right
        height 3.64rem
        line-height  3.64rem
        font-size 1.4rem
        margin-right 2.6rem
        color #999
        text-decoration underline
</style>
