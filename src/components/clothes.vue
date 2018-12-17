<template>
    <div class="clothes">
        <small-swiper :list="imgs"></small-swiper>
        <classify :famliy="famliy"></classify>
        <goodsShow :showList="clothesshowList" :title="womenT" :sub="wSub"></goodsShow>
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
            clothesshowList:[],womenT:"女装",wSub:"你本来就很美",
            famliy:[]}
        },
        mounted(){
            this.axios.get('furnishing/banner',{params:{
                fid:3
            }}).then(res=>{
               this.imgs=res.data
            });
            this.axios.get('furnishing/furnishing',{params:{
                 fid:302
             }
             }).then(res=>{
                this.clothesshowList = res.data
             });
                         this.axios.get('furnishing/class',{params:{
                bigId:3
            }
            }).then(res=>{
                this.famliy=res.data
            });
        }
    }
</script>
<style>
    .clothes{
        margin:0 auto;
        width:1090px;
    }
</style>