<template>
    <div class="header">
      <div class="leftbox">
        <div id="title" @click="home">kkako</div>
      </div>
      <div class="midbox">
        <img id="avatar" src="@/assets/avatar.webp">
      </div>
      <div class="rightbox">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">分类</el-menu-item>
            <el-menu-item index="3">时间轴</el-menu-item>
            <el-menu-item index="4">关于我</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-search"></i></el-menu-item>
            <el-menu-item index="6">登录</el-menu-item> 
          </el-menu>
      </div>

      <el-dialog 
      :visible.sync="dialogFormVisible"
      >
        <el-form :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" >
            <el-input v-model="form.pwd" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="login">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import {BlogLogin} from '../api/request'

export default {
  name: 'NavBar',
  data () {
    return {
      activeIndex: '1',
      dialogFormVisible: false,
      form: {
        name: '',
        pwd: '',
      },
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key == 1) {
        this.$router.push('/')
      }
      if (key == 3) {
        this.$router.push('/time_line')
      }
      if (key == 5) {
        this.$router.push('/blog')
      }
      if (key == 6) {
        this.dialogFormVisible = true
      }
    },
    home() {
      this.$router.push('/')
    },
    handleClose() {
      console.log('close')
    },
    login() {
      console.log("login")
      BlogLogin({
        username: 'zhangsan',
        password: 'lisi'
      }).then(res => {
        console.log(res)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  height: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  box-shadow: 0px 1px 0px 0px #e5e5e5;
}

.leftbox {
  width: 40%;
  display: inline-flex;
  margin-top: 10px;
}

#title {
  padding: 10px 20px;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: #42b983;
}

#avatar {
  height: 70px;
  border-radius: 32.5px;
}

.rightbox {
  width: 40%;
  display: inline-flex;
  flex-direction: row-reverse;
  margin-top: 10px;
}

.el-menu.el-menu--horizontal{
  border-bottom: none !important;
}

.midbox {
  height: 30px;
  display: inline-flex;
}


</style>
