<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend @change="handlespecial"></home-recommend>
    <home-special :showIndex="showIndex"></home-special>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeSpecial from './components/Special'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeSpecial
  },
  data () {
    return {
      showIndex: 0
    }
  },
  methods: {
    handlespecial (index) {
      this.showIndex = index
    }
  }
}
</script>

<style></style>
