<template>
  <div class="icons">
     <swiper :options="swiperOption">
       <swiper-slide v-for="(page,index) of pages" :key="index">
         <div class="icon" v-for="item of page" :key="item.id">
           <div class="icon-img">
             <img :src="item.iconUrl" alt="" class="icon-imgcontent">
           </div>
           <p class="icon-desc">{{item.desc}}</p>
         </div>
       </swiper-slide>
     </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: false
      },
      iconList: [{
        id: '01001',
        iconUrl: 'static/swiper_icons/swiper-10.png',
        desc: '机票'
      }, {
        id: '01002',
        iconUrl: 'static/swiper_icons/swiper-11.png',
        desc: '度假'
      }, {
        id: '01003',
        iconUrl: 'static/swiper_icons/swiper-12.png',
        desc: '景点'
      }, {
        id: '01004',
        iconUrl: 'static/swiper_icons/swiper-13.png',
        desc: '火车票'
      }, {
        id: '01005',
        iconUrl: 'static/swiper_icons/swiper-01.png',
        desc: '周边短途'
      }, {
        id: '01006',
        iconUrl: 'static/swiper_icons/swiper-02.png',
        desc: '汽车票'
      }, {
        id: '01007',
        iconUrl: 'static/swiper_icons/swiper-03.png',
        desc: '自驾游'
      }, {
        id: '01008',
        iconUrl: 'static/swiper_icons/swiper-04.png',
        desc: '民宿'
      }, {
        id: '01009',
        iconUrl: 'static/swiper_icons/swiper-05.png',
        desc: '自由行'
      }, {
        id: '01010',
        iconUrl: 'static/swiper_icons/swiper-06.png',
        desc: '特惠酒店'
      }, {
        id: '01011',
        iconUrl: 'static/swiper_icons/swiper-07.png',
        desc: '海外酒店'
      }, {
        id: '01012',
        iconUrl: 'static/swiper_icons/swiper-08.png',
        desc: '攻略'
      }, {
        id: '01013',
        iconUrl: 'static/swiper_icons/swiper-09.png',
        desc: '客栈'
      }, {
        id: '01014',
        iconUrl: 'static/swiper_icons/swiper-14.png',
        desc: '理财'
      }, {
        id: '01015',
        iconUrl: 'static/swiper_icons/swiper-15.png',
        desc: '团购'
      }, {
        id: '01016',
        iconUrl: 'static/swiper_icons/swiper-16.png',
        desc: '邮轮'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icon
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      left 0
      top 0
      right 0
      bottom 4.2rem
      text-align center
      .icon-imgcontent
        height 100%
    .icon-desc
      position absolute
      height 3.2rem
      line-height  3.2rem
      font-size 1.4rem
      text-align center
      margin 0 0 1rem 0
      bottom 0
      right 0
      left 0
      color $darkTextColor
      ellipsis()
</style>
