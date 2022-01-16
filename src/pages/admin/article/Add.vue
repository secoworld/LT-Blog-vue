<template>
  <div> 添加文章页面</div>
  <div>
    {{count}}
    <el-button @click="count ++"> 增加计数</el-button>
  </div>
</template>

<script>
export default {
    name: 'add',
    data: ()=> {
      return {
        count: 0
      }
    }
}
</script>

<style>

</style>