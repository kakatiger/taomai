<template>
    <div class="index">
        <router-link to="/furnishing">
        <swiper :imgs="imgs"></swiper></router-link>
            <firstBrand></firstBrand>
            <click-show></click-show>
            <popu></popu>
        <Footer></Footer>
    </div>
</template>
<script>
    import Vue from 'vue'
    import swiper from '@/components/many/swiper.vue'
    import firstBrand from '@/components/many/firstBrand.vue'
    import clickShow from '@/components/many/clickShow.vue'
    import popu from '@/components/many/popularity.vue'
    import Footer from '@/components/many/footer.vue'

    export default {
        components: {
           swiper,firstBrand,clickShow,popu,Footer
        },
        data:function () {
            return{   imgs:[
                {id:1,src:'static/img/banner/banner1.jpg'},
                {id:2,src:'static/img/banner/banner2.jpg'},
                {id:3,src:'static/img/banner/banner3.jpg'},
                {id:4,src:'static/img/banner/banner4.jpg'},
                {id:5,src:'static/img/banner/banner5.jpg'}
            ],}
        }
    }
</script>
