<template>
  <div>
    <user-header></user-header>
    <user-wallet></user-wallet>
    <user-operation></user-operation>
    <user-feedback></user-feedback>
  </div>
</template>

<script>
import UserHeader from './components/Header'
import UserWallet from './components/Wallet'
import UserOperation from './components/Operation'
import UserFeedback from './components/Feedback'
export default {
  name: 'User',
  components: {
    UserHeader,
    UserWallet,
    UserOperation,
    UserFeedback
  }
}
</script>

<style>
</style>
