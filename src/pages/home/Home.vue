<template>
  <div>
    <home-header></home-header>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend @change="handlespecial" :btnlist="btnlist"></home-recommend>
    <home-special :showspecial="showspecial"></home-special>
    <home-holiday :holidayList="holidayList"></home-holiday>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-ticket :ticketList="ticketList"></home-ticket>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeSpecial from './components/Special'
import HomeHoliday from './components/Holiday'
import HomeTicket from './components/Ticket'
import HomeFooter from './components/Footer'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeSpecial,
    HomeHoliday,
    HomeTicket,
    HomeFooter
  },
  data () {
    return {
      holidayList: [],
      swiperList: [],
      iconList: [],
      btnlist: [],
      showspecial: [],
      showSpecialList: [],
      ticketList: []
    }
  },
  methods: {
    handlespecial (index) {
      this.showspecial = this.showSpecialList[index]
    },
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.holidayList = data.holidayList
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.btnlist = data.btnlist
        this.showspecial = data.showspecial
        this.showSpecialList = data.showSpecialList
        this.ticketList = data.ticketList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style></style>
