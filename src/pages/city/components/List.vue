<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="list-area">
        <div class="area-title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="botton-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="list-area">
        <div class="area-title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="botton-wrapper"
          v-for="item of hotCities"
          :key="item.id"
          @click="handleCityClick(item.name)">
            <div class="button" >{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="list-area"
      v-for="(item,key) of cities"
      :key="key"
      :ref="key"
      >
        <div class="area-title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
          v-for="innerItem of item"
          :key="innerItem.id"
          @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (city) {
      this.ChangeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['ChangeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  },
  moutnted () {
    this.scroll = new Bscroll(this.$refs.warpper, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .list
    width 100%
    clear both
    position absolute
    left 0
    top 7.6rem
    right 0
    bottom 0
    overflow hidden
    .list-area
      text-indent 1rem
      .area-title
        line-height 2rem
        height 2rem
        font-size 1.2rem
        color $darkTextColor
        background #EEEEEE
      .button-list
        overflow hidden
        padding .5rem 3rem .5rem .5rem
        .botton-wrapper
          float left
          width 32%
          margin .2rem
          .button
            margin .1rem
            padding .2rem 0
            border .1rem solid #ccc
            text-align center
            font-size 1.4rem
      .item-list
         .item
           font-size 1.4rem
           padding .5rem 0
</style>
