<template>
  <div class="blog">
    <mavon-editor
            
            :value="content"
            defaultOpen="preview"
            :boxShadow="false"
            style="z-index:1;height:50vh"
            :editable="false"
            :subfield="false"
            :toolbarsFlag="false"
            :navigation="true"
          >
    </mavon-editor>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      content: '## wode diyti[oan boke neirong'
    }
  }
}
</script>

<style scoped>
.v-note-navigation-title {
  display: none !important;
}
</style>