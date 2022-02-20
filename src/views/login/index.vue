<template>
  <div class="login">
    <el-form
      class="login-form"
      ref="form"
      label-position="top"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          :loading="isLoginLoading"
          @click="onSubmit"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Login } from '@/services/user'

export default {
  userName: 'LoginIndex',
  data () {
    return {
      form: {
        userName: 'admin',
        password: 'admin'
      },
      isLoginLoading: false
    }
  },
  methods: {
    onSubmit () {
      try {
        this.isLoginLoading = true

        const data = Login(this.form)

        if (data.state !== 1) {
          this.$router.push('/error')
          this.$message.error('登录失败')
        } else {
          this.$store.commit('setUser', JSON.stringify(this.form))
          // 登录成功
          this.$router.push('/')
          this.$message.success('登录成功')
        }
      } catch (err) {
        console.log('登录失败', err)
      }
      this.isLoginLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    background: #fff;
    padding: 20px;
    width: 300px;
    border-radius: 5px;
  }
  .login-btn {
    width: 100%;
  }
}

</style>
