<template>
  <div>
    <detail-banner></detail-banner>
    <detail-nav></detail-nav>
    <detail-desc></detail-desc>
    <div class="bottom"></div>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailNav from './components/DetailNav'
import DetailDesc from 'common/DeatilDesc/desc'
export default {
  name: 'Detail',
  components: {
    DetailNav,
    DetailBanner,
    DetailDesc
  }
}
</script>

<style lang="stylus" scoped>
  .bottom
    height 80rem
</style>
