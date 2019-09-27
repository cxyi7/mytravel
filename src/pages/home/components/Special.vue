<template>
  <div class="special">
    <div class="special-icon" v-for="(item,index) of showspecial" :key="index">
      <div class="icon-img" :key="item.id">
        <img :src="item.imgUrl" alt="" class="img-centent">
      </div>
      <div class="icon_desc">
        <p class="desc-title">{{item.title}}</p>
        <p class="desc-text">{{item.text}}</p>
        <p class="desc-money">{{item.money}}<small>起</small></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSpecial',
  props: {
    showIndex: Number
  },
  data () {
    return {
      showspecial: [{
        id: '0001',
        imgUrl: 'static/recommend_icons/icons_tehui/tehui_01.jpg',
        title: '珠海-桂林 3天跟游团',
        text: '桂林阳朔3天纯玩团丨漓江真的好玩啊',
        money: '￥1026'
      }, {
        id: '0002',
        imgUrl: 'static/recommend_icons/icons_tehui/tehui_02.jpg',
        title: '上海-四川 6天跟游团',
        text: '老火了九寨沟·黄龙·纯玩·无自费游玩',
        money: '￥2343'
      }, {
        id: '0003',
        imgUrl: 'static/recommend_icons/icons_tehui/tehui_03.jpg',
        title: '杭州-成都 5天跟游团',
        text: '九寨沟特卖专场丨国庆大放送来就有好礼',
        money: '￥2334'
      }, {
        id: '0004',
        imgUrl: 'static/recommend_icons/icons_tehui/tehui_04.jpg',
        title: '上海-石林 3天跟游团',
        text: '十一精品0自费&lt;6重优惠随你选',
        money: '￥3412'
      }],
      showSpecialList: [[{
        id: '0001',
        imgUrl: 'static/recommend_icons/icons_tehui/tehui_01.jpg',
        title: '珠海-桂林 3天跟游团',
        text: '桂林阳朔3天纯玩团丨漓江真的好玩啊',
        money: '￥1026'
      }, {
        id: '0002',
        imgUrl: 'static/recommend_icons/icons_tehui/tehui_02.jpg',
        title: '上海-四川 6天跟游团',
        text: '老火了九寨沟·黄龙·纯玩·无自费游玩',
        money: '￥2343'
      }, {
        id: '0003',
        imgUrl: 'static/recommend_icons/icons_tehui/tehui_03.jpg',
        title: '杭州-成都 5天跟游团',
        text: '九寨沟特卖专场丨国庆大放送来就有好礼',
        money: '￥2334'
      }, {
        id: '0004',
        imgUrl: 'static/recommend_icons/icons_tehui/tehui_04.jpg',
        title: '上海-石林 3天跟游团',
        text: '十一精品0自费&lt;6重优惠随你选',
        money: '￥3412'
      }], [{
        id: '0011',
        imgUrl: 'static/recommend_icons/icons_menpiao/menpiao_01.jpg',
        title: '江西出发一日游',
        text: '【北京】VIP航空座椅八达岭+中关村游玩',
        money: '￥59'
      }, {
        id: '0011',
        imgUrl: 'static/recommend_icons/icons_menpiao/menpiao_02.jpg',
        title: '【北京活动票】北京欢乐谷',
        text: '七大主题公园带你畅玩北京欢乐无穷',
        money: '￥666'
      }, {
        id: '0011',
        imgUrl: 'static/recommend_icons/icons_menpiao/menpiao_03.png',
        title: '江西出发一日游',
        text: '【北京】长城专线7-10-12-13',
        money: '￥99'
      }, {
        id: '0011',
        imgUrl: 'static/recommend_icons/icons_menpiao/menpiao_04.jpg',
        title: '【国庆活动票】北京温泉',
        text: '地热资源丰富，温泉纯正舒人',
        money: '￥655'
      }], [{
        id: '0021',
        imgUrl: 'static/recommend_icons/icons_yiriyou/yiriyou_01.jpg',
        title: '九江出发一日游',
        text: '庐山-锦绣谷-井冈山-珠穆朗玛峰',
        money: '￥222'
      }, {
        id: '0022',
        imgUrl: 'static/recommend_icons/icons_yiriyou/yiriyou_02.jpg',
        title: '南昌出发一日游',
        text: '庐山风景区+三叠泉+秀峰山+',
        money: '￥169'
      }, {
        id: '0023',
        imgUrl: 'static/recommend_icons/icons_yiriyou/yiriyou_03.jpg',
        title: '南昌出发一日游',
        text: '庐山石门涧一日+观光车(缆车)',
        money: '￥123'
      }, {
        id: '0024',
        imgUrl: 'static/recommend_icons/icons_yiriyou/yiriyou_04.jpg',
        title: '南昌出发一日游',
        text: '珠穆朗玛峰+优品庐山+井冈山+',
        money: '￥999'
      }]]
    }
  },
  watch: {
    showIndex () {
      this.showspecial = this.showSpecialList[this.showIndex]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .special
    margin-top 1rem
    height 45rem
    .special-icon
      position relative
      float left
      height 50%
      width 50%
      .icon-img
        position absolute
        top 0
        left 0
        bottom 8rem
        text-align center
        .img-centent
          height 90%
          width 90%
          border-radius .5rem
      .icon_desc
        position absolute
        bottom 1rem
        left 0
        width 100%
        .desc-title
          margin 0 0 0 2rem
          font-size 1.8rem
          color $darkTextColor
          font-weight 700
        .desc-text
          margin .5rem 0 0 2rem
          font-size 1.6rem
          color #666
          ellipsis()
        .desc-money
          font-size 2.2rem
          font-weight 900
          color #ff7400
          margin .5rem 0 0 2rem

</style>
