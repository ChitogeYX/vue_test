<template>
  <div>
    用户名：{{ userInfo.userName }}
    密码：{{ userInfo.password }}
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.loadUserInfo()
  },
  methods: {
    loadUserInfo () {
      this.userInfo = this.$store.state.user
    }
  }
}
</script>

<style>

</style>
