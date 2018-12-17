<template>
    <div class="electrical">
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
            boxshowList:[],boxTitle:"家用电器",boxSub:"有我在，你就放心吧",
            famliy:[]}
        },
        mounted(){
            this.axios.get('furnishing/banner',{params:{
                fid:4
            }}).then(res=>{
               this.imgs=res.data
            });
            this.axios.get('furnishing/furnishing',{params:{
                 fid:401
             }
             }).then(res=>{
                this.boxshowList = res.data
             });
                         this.axios.get('furnishing/class',{params:{
                bigId:4
            }
            }).then(res=>{
                this.famliy=res.data
            });
        }
    }
</script>
<style>
    .electrical{
        width:1090px;
        margin:0 auto;
    }
</style>