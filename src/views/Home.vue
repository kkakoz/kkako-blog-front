<template>
  <div class="home">
    <div v-for="item in articles" v-bind:key="item.id" class="article" >
      <img class="leftbox" src="../assets/avatar.webp" height="100%">
      <div class="rightbox">
        <div class="timeh">
          <i class="el-icon-time"></i>&nbsp;&nbsp;<p class="inlineflex">{{item.create_time}}</p>
        </div>
        <div class="title"><b>{{item.title}}</b></div>
        <div class="type"><i class="el-icon-folder inlineflex"></i>&nbsp;我的分类</div>
        <div class="content">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "我的第一篇博客",
          type: "分类",
          content: "内容",
          create_time: "2020-1-5 11:01",
        },
        {
          id: 2,
          title: "我的第一篇博客",
          type: "分类",
          content: "内容",
          create_time: "2020-1-5 11:01",
        },
        {
          id: 3,
          title: "我的第一篇博客",
          type: "分类",
          content: "内容",
          create_time: "2020-1-5 11:01",
        },
      ]
    }
  }
}

</script>


<style scoped>
.article {
  opacity: 1;
  padding: auto;
  width: 100%;
  height: 300px;
  position: relative;
  margin: 20px 0 20px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0);
  box-shadow: 0 1px 20px -6px rgb(0 0 0 / 50%);
  transition: box-shadow .3s ease;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: 'Source Han Serif SC','Source Han Serif','source-han-serif-sc','PT Serif','SongTi SC','MicroSoft Yahei',Georgia,serif;
}

.leftbox {
  float: left;
  display: block;
  height: 300px;
  width: 60%;
}

.rightbox {
  display: inline-flex;
  width: 40%;
  flex-direction: column;
}

.timeh {
  margin: 10px 10% 0 10%;
  text-align: right;
  font-size: 15px;
}

.title {
  margin-left: 20px;
  text-align: left;
  font-size: 30px;
}

.content {
  margin-left: 20px;
  margin-top: 20px;
  text-align: left;
  font-size: 15px;
}

.type {
  margin-left: 20px;
  margin-top: 20px;
  text-align: left;
}

.inlineflex {
  display: inline-flex;
}
</style>



