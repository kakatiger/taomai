<template>
    <div class="smallSwiper">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item ,index) in list" :key="index">
                <img :src="item.src" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default {
        data:function () {
            return{}
        },props:['list']
    }
</script>
<style>
    .smallSwiper{
        margin-top:80px;
    }
   .smallSwiper .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .smallSwiper .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .smallSwiper .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>