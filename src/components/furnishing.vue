<template>
    <div class="furnishing">
        <small-swiper :list="imgs"></small-swiper>
        <classify :famliy="famliy"></classify>
        <goodsShow :showList="bedshowList" :title="bedtitle" :sub="bedsub"></goodsShow>
        <goodsShow :showList="pillowshowList" :title="pillowtitle" :sub="pillowsub"></goodsShow>
        <goodsShow title="家具" sub="大师级工艺"></goodsShow>
        <goodsShow title="灯具" sub="一盏灯，一个家"></goodsShow>
        <goodsShow title="不易软装" sub="这，就是你需要的"></goodsShow>
        <goodsShow title="家饰" sub="家的温暖，就是这样"></goodsShow>
        <goodsShow title="收纳" sub="整洁，原来这么简单"></goodsShow>
        <goodsShow title="旅行用品" sub="你需要的时候，我就在这里"></goodsShow>
        <goodsShow title="晾晒除味" sub="谢谢你，这么香"></goodsShow>
        <goodsShow title="家庭医疗" sub="我不想你，用到我"></goodsShow>
        <goodsShow title="宠物" sub="呱呱"></goodsShow>
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
        components: {
           classify,goodsShow,Footer,smallSwiper
        },
        data:function () {
            return{   imgs:[],famliy:[],
                bedshowList:[],bedtitle:'床品套件',bedsub:'MUJI等品牌制造商出品',
                pillowshowList:[],pillowtitle:'被枕',pillowsub:'守护你的睡眠时光'

            }
        },
        mounted(){
            this.axios.get('furnishing/banner',{params:{
                fid:1
            }}).then(res=>{
               this.imgs=res.data
            });
            this.axios.get('furnishing/class',{params:{
                bigId:1
            }
            }).then(res=>{
                this.famliy=res.data
            });
             this.axios.get('furnishing/furnishing',{params:{
                 fid:101
             }
             }).then(res=>{
                this.bedshowList = res.data
             })
            this.axios.get('furnishing/furnishing',{params:{
                fid:102
            }
            }).then(res=>{
                this.pillowshowList = res.data
            })
        }
    }
</script>
<style scoped>
    .furnishing{
        margin:0 auto;
        width:1090px;
    }

</style>