<template>
    <div class="header">
      <div>s湿答答</div>
      <div class="leftbox">
        <div id="title">kkako</div>
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
            <el-menu-item index="6"><el-button type="text" @click="dialogVisible = true">登录</el-button></el-menu-item> 
          </el-menu>
      </div>
      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data () {
    return {
      activeIndex: '1',
      dialogVisible: false
    }
  },
  methods: {

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
}

.leftbox {
  width: 40%;
  display: inline-flex;
}

#title {
  padding: 10px 20px;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: #42b983;
}

#avatar {
  height: 70px;
  border-radius: 35px;
}

.rightbox {
  width: 40%;
  display: inline-flex;
  flex-direction: row-reverse;
  margin-right: 0px;
}

.el-menu.el-menu--horizontal{
  border-bottom: none !important;
}

.midbox {
  height: 30px;
  display: inline-flex;
}


</style>
