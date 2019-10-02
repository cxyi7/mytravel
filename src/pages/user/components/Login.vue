<template>
  <div>
    <login-header @change="handleChange"></login-header>
    <login-way :showChoose="showChoose" ></login-way>
    <common-bottom :commnway="commnway"></common-bottom>
  </div>
</template>

<script>
import LoginHeader from './logincomponents/LoginHeader'
import LoginWay from './logincomponents/LoginWay'
import CommonBottom from './commonBottom'
export default {
  name: 'UserLogin',
  components: {
    LoginHeader,
    LoginWay,
    CommonBottom
  },
  data () {
    return {
      'showChoose': 0,
      'commnway': '登录'
    }
  },
  methods: {
    handleChange (index) {
      this.showChoose = index
    }
  }
}
</script>

<style>
</style>
