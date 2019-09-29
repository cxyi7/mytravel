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
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: false
      }
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
