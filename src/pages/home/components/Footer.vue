<template>
  <div class="footer">
   <div class="footer-top">
     <ul>
       <li><a href="javascript:void(0);">Qunar.com</a></li>丨
       <li><a href="javascript:void(0);">业务合作</a></li>丨
       <li><a href="javascript:void(0);">加入我们</a></li>丨
       <li><a href="javascript:void(0);">"严重违规失信"专项整治</a></li>丨
       <li><a href="javascript:void(0);">安全中心</a></li>丨
       <li><a href="javascript:void(0);">星骆驼公益</a></li>丨
       <li><a href="javascript:void(0);">About Us</a></li>
     </ul>
   </div>
   <div class="footer-center">
     <p>Copyright ©2019 Qunar.com</p>
     <p>(京)-非经营性-2016-0110</p>
     <p>京公网安备110108901530</p>
     <p>
       <img src="static/footer/24h.png" alt="">
       去哪儿网客服电话95117</p>
     <p>京ICP备05021087号</p>
     <p>营业执照信息</p>
     <p>保险经纪资质</p>
   </div>
   <div class="footer-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="stylus" scoped>
  .footer
    width 100%
    position relative
    .footer-top
      ul
        padding 0
        text-align center
        li
          margin-top 4rem
          list-style none
          display inline-block
          a
            display inline-block
            color #666
            text-decoration none
        li:not(:first-child)
          margin-left -.2rem
    .footer-center
      text-align center
      img
        height 1rem
        width 1rem
</style>
