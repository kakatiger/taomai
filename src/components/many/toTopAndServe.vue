<template>
    <div class="topAndServe">
        <div class="serve">
            <span><i class="icon iconfont icon-kefu"></i></span>   
            <p>客服</p>
        </div>
        <div class="toTop" v-show="isComeTopShow" @click='toTop'>
            <span><i class="icon iconfont icon-jiantou_liebiaoshouqi"></i></span>
            <p>回到顶部</p>
        </div>
    </div>
</template>
<script>
  export default {
      data(){
          return {isComeTopShow:false}
      },
      methods:{
        scrollShow(){
            this.scroll=document.documentElement.scrollTop;
            if(this.scroll>=900){
                this.isComeTopShow=true;
            }
            else {
                this.isComeTopShow=false;
            }
        },
        toTop(){
            document.documentElement.scrollTop=161 
        }
      },
      mounted(){
        window.addEventListener('scroll', this.scrollShow);
      }
  }
</script>
<style scoped>
  .topAndServe{
    position: fixed;
    bottom:100px;
    right: 30px;
  }
  .topAndServe>div{
      width:72px;
      background: rgba(144,146,132,.2);
      text-align: center;
      height: 80px;
      margin-bottom: 2px;
      color:#666;
      cursor: pointer;
  }
  .topAndServe>div i{
      font-size:45px;
      line-height: 45px;
  }
  .topAndServe>div:hover{
      color: #b4a078;
  }

</style>
