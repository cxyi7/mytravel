<template>
  <div>
    <div class="search">
      <input type="text" class="search-ipt" placeholder="请输入城市名或拼音"
      v-model="keyword">
    </div>
    <div class="search-content"
    ref="searchList"
    v-show="keyword">
      <ul>
        <li class="search-content-text border-bottom"
        v-for="item of list"
        :key="item.id"
        @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-content-text border-bottom"
        v-show="haveNoData">
          无法找到匹配项
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    haveNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
    // this.$store.dispatch('ChangeCity', city)
      this.ChangeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['ChangeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchList, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .search
    width 100%
    text-align center
    height 4rem
    background $bgColor
    .search-ipt
      width 96%
      box-sizing border-box
      padding 0 .5rem
      margin-top .5rem
      text-align center
      height 3rem
      font-size 1.6rem
      outline none
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 7.6rem
    left 0
    right 0
    bottom 0
    background #FFFFFF
    ul
      padding 0
      margin 0
      .search-content-text
        text-indent 1rem
        font-size 1.4rem
        line-height 3rem
        height 3rem
        list-style none
        color $darkTextColor
</style>
