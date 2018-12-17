<template>
    <div class="shoes">
        <small-swiper :list="imgs"></small-swiper>
        <classify :famliy="famliy"></classify>
        <goodsShow :showList="boxshowList" :title="boxTitle" :sub="boxSub"></goodsShow>
        <Footer></Footer>
    </div>
</template>
<script>
    import Vue from 'vue'
    import classify from '@/components/many/classifySort.vue'
    import goodsShow from '@/components/many/goodsShow.vue'
    import Footer from '@/components/many/footer.vue'
    import smallSwiper from '@/components/many/smallSwiper.vue'
    export default {
        components:{
            smallSwiper, goodsShow,Footer,classify
        },
        data:function () {
            return{imgs:[],
            boxshowList:[],boxTitle:"行李箱",boxSub:"带着梦想立刻出发",
            famliy:[]}
        },
        mounted(){
            this.axios.get('furnishing/banner',{params:{
                fid:2
            }}).then(res=>{
               this.imgs=res.data
            });
            this.axios.get('furnishing/furnishing',{params:{
                 fid:201
             }
             }).then(res=>{
                this.boxshowList = res.data
             });
                         this.axios.get('furnishing/class',{params:{
                bigId:2
            }
            }).then(res=>{
                this.famliy=res.data
            });
        }
    }
</script>
<style>
    .shoes{
        width:1090px;
        margin:0 auto;
    }
</style>