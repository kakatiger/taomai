<template>
    <div class="food">
        <small-swiper :list="imgs"></small-swiper>
        <classify :famliy="famliy"></classify>
        <goodsShow :showList="boxshowList" title="饼干糕点" sub="四季糕点，用心烘焙"></goodsShow>
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
            boxshowList:[],
            famliy:[]}
        },
        mounted(){
            this.axios.get('furnishing/banner',{params:{
                fid:6
            }}).then(res=>{
               this.imgs=res.data
            });
            this.axios.get('furnishing/furnishing',{params:{
                 fid:601
             }
             }).then(res=>{
                this.boxshowList = res.data
             });
                         this.axios.get('furnishing/class',{params:{
                bigId:6
            }
            }).then(res=>{
                this.famliy=res.data
            });
        }
    }
</script>
<style>
    .food{
        width:1090px;
        margin:0 auto;
    }
</style>