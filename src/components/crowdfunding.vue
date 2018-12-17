<template>
  <div class="crowdfunding">
      <swiper :imgs="imgs"></swiper>
      <div class="title">
        <ul class="countent">
          <li><p>玩转</p><p>众筹</p></li>
          <li><span>怦然心动项目</span></li>
          <li><span>支持产品参数</span></li>
          <li><span>众筹成功项目</span></li>
          <li><span>抢先体验项目</span></li>
        </ul>
      </div>
      <div class="allBg">
        <div class="onCrowdfunding">
          <div class="title">正在众筹</div>
        </div>
        <ul class="showgoodsInfo">
          <li v-for='item in goods_info' :key='item.id'>
            <on-crowdfunding :singleObj='item'></on-crowdfunding>
          </li>
        </ul>
      </div>
      <Footer></Footer>
  </div>
</template>
<script>
  import Vue from 'vue'
  import swiper from '@/components/many/swiper.vue'
  import Footer from '@/components/many/footer.vue'
  import onCrowdfunding from '@/components/crowdfunding/onCrowdfunding.vue'
  export default {
      components: {
         swiper,Footer,onCrowdfunding
      },
      data:function () {
          return{ imgs:[
              {id:1,src:'static/img/crowdfunding/banner/banner1.jpg'},
              {id:2,src:'static/img/crowdfunding/banner/banner2.jpg'},
          ],
          goods_info:[
            {id:1,src:'static/img/crowdfunding/goods/1.png',title:'果酒礼盒 300毫升*4瓶',sub:'江南水乡的4种甜美果香',aim:300,actu:300,money:12304,people:93,days:15},
            {id:2,src:'static/img/crowdfunding/goods/2.png',title:'博恩慈济院一级园干红葡萄酒',sub:'一级园干红葡萄酒，收藏、送礼、自饮佳品',aim:300,actu:520,money:12304,people:93,days:15},
            {id:3,src:'static/img/crowdfunding/goods/3.png',title:'儿童防走丢手环 1v1手腕锁',sub:'江南水乡的4种甜美果香',aim:300,actu:220,money:12304,people:120,days:14},
            {id:4,src:'static/img/crowdfunding/goods/4.png',title:'智能机器人 教育陪护娱乐一体',sub:'江南水乡的4种甜美果香',aim:300,actu:180,money:12304,people:70,days:7},
            {id:5,src:'static/img/crowdfunding/goods/5.png',title:'高蛋白质奶昔牛奶 330毫升',sub:'江南水乡的4种甜美果香',aim:600,actu:120,money:12304,people:23,days:19},
            {id:6,src:'static/img/crowdfunding/goods/6.png',title:'居家智能划船机',sub:'江南水乡的4种甜美果香',aim:100,actu:120,money:12304,people:200,days:12},
            {id:7,src:'static/img/crowdfunding/goods/7.png',title:'西澳名庄 圣诞葡萄酒限量套装',sub:'江南水乡的4种甜美果香',aim:200,actu:120,money:12304,people:60,days:4},
            ]
          }
      }
  }
</script>
<style scoped>
  .crowdfunding .title{
    height: 80px;
    padding:10px;
  }
  .crowdfunding .title .countent{
    margin:0 auto;
    width:1090px;
    display: flex;
    height: 100%;
  }
  .crowdfunding .title .countent li{
    line-height:64px;
    width:250px;
    border-left: 1px solid salmon;
    font-size:20px;
    color:#333;
    padding-left:32px;
  }
  .crowdfunding .title .countent li:first-child{
    line-height: 32px;
    width:80px;
    font-size:22px;
    color:#B4A078;
    border:none;
    margin-right: 20px;
  }
  .crowdfunding .allBg{
    width: 100%;
    height: 100%;
    padding-top:80px;
    background: rgb(244, 244, 244)
  }
  .crowdfunding .onCrowdfunding{
    width: 460px;
    margin:0 auto 40px;
    height: 1px;
    background:#ccc;
    position:relative;
    z-index: 1;
  }
  .crowdfunding .onCrowdfunding .title{
    font-size: 28px;
    position: absolute;
    left:50%;
    margin-left: -100px;
    width:200px;
    top:-35px;
    text-align: center;
    font-weight: lighter;
    z-index: 2;
    background: rgb(244, 244, 244);
  }
  .crowdfunding ul.showgoodsInfo{
    width: 1090px;
    margin:0 auto;
    overflow: hidden;
  }
  .crowdfunding ul.showgoodsInfo>li{
    float: left;
  }
    .crowdfunding ul.showgoodsInfo>li:nth-child(2n){
      margin-left:20px;
    }

</style>
