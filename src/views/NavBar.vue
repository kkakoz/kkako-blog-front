<template>
    <div class="header">
      <div class="leftbox">
        <div v-if="$store.state.width>1050" id="title" @click="home">kkako</div>
        <div v-else >
          
        </div>
      </div>
      <div class="midbox">
        <img id="avatar" src="@/assets/avatar.webp">
      </div>
      <div class="rightbox">
          <el-menu v-if="$store.state.width>1050"
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">
              <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                  分类<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in categorys" v-bind:key="item.id" command="blogEdit">写博客</el-dropdown-item>
                  <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-menu-item>
            <el-menu-item index="3">时间轴</el-menu-item>
            <el-menu-item index="4">关于我</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-search"></i></el-menu-item>
            <el-menu-item v-if="!$store.state.user.username" index="6">
              登录
            </el-menu-item> 
            <el-menu-item v-else index="7">
              <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                  <i class="el-icon-s-operation"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="blogEdit">写博客</el-dropdown-item>
                  <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-menu-item>

          </el-menu>
          <div v-else></div>
      </div>

      <el-dialog 
      :visible.sync="dialogFormVisible"
      >
        <el-form :model="form">
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" >
            <el-input type="password" v-model="form.pwd" autocomplete="off"></el-input>
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
        email: '',
        pwd: '',
      },
      categorys: []
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(this.$store.state.user)
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
      BlogLogin(this.form).then(res => {
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: '登录成功',
            type: 'success'
          });
          localStorage.setItem('user', res.data.data)
          this.$store.commit('login', res.data.data)
          this.dialogFormVisible = false
        } else {

        }        
      })
    },
    handleCommand(command) {
      if (command == 'blogEdit') {
        this.$router.push('/blog_edit')
      } else if (command == 'logout') {
        this.$store.commit('logout')
      }
    },
    
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
  width: 45%;
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
  width: 45%;
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
