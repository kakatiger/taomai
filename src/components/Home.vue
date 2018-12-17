<template>
  <div class="home">
    <Header></Header>
    <router-view></router-view>
    <Login></Login>
    <TopAndServe></TopAndServe>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/many/header.vue'
import TopAndServe from '@/components/many/toTopAndServe.vue'
import Login from '@/components/login/login.vue'
// import TopAndServe from '@/component/many/toTopAndserve.vue'
export default {
  components: {
    Header,
    Login,
    TopAndServe
  }
}
</script>
<style>
  .home{
    position:relative;
  }
  Header{
    position:relative;
  }
  .home swiper{
    position:absolute;
    top:-200px;
  }
</style>
