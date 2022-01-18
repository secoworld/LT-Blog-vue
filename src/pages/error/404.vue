<template>
  <div class="container">
      <div class="title">
          404
      </div>
      <div class="sub-title"> 
          page <span >{{$route.fullPath}} </span>not found
      </div>

      <div class="link">
          <el-link href="/">主页</el-link>
      </div>
  </div>
</template>

<script>
export default {
    name: '404'
}
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title{
        font-size: 200px;
        margin-top: 50px;
        font-weight: bolder;
    }

    .sub-title{
        font-size: 30px;
        font-weight: bold;
        margin-top: 30px;

        span{
            color: firebrick;
        }
    }

    .el-link{
        margin-top: 30px;
        font-size: 30px;
        color: rgb(55, 141, 69);
        font-weight: bold;
    }
}

</style>