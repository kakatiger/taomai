<template>
    <div class="onCrowdfungding">
        <el-row :gutter="70">
        <el-col :span="8"><div class="grid-content">
                <img :src="singleObj.src">
            </div></el-col>
        <el-col :span="15" ><div class="grid-content">
                <h1 class="title">{{singleObj.title}}</h1>
                <p class="sub">{{singleObj.sub}}</p>
                <div class="canvas">
                      <canvas :ref="'canvas'+singleObj.id" width='330' height='40'>浏览器版本太低，请升级</canvas>
                </div>
                <el-row :gutter="10">
                    <el-col :span="7"><div class="grid-content border_">
                            <p>￥{{singleObj.money}}</p>
                            <div>已筹金额</div>
                        </div></el-col>
                    <el-col :span="7"><div class="grid-content border_">
                            <p>{{singleObj.people}}人</p>
                            <div>支持人数</div>
                        </div></el-col>
                    <el-col :span="7"><div class="grid-content">
                            <p>{{singleObj.days}}天</p>
                            <div>剩余时间</div>
                        </div></el-col>
                    </el-row>
            </div></el-col>
        </el-row>
    </div>
</template>
<script>

export default {
    data(){
        return {
            per:.5,
        }
    },props:['singleObj'],
    methods:{
        printProgress(aim,actu,id){
            var c1 = this.$refs['canvas'+id];
            var ctx = c1.getContext("2d")
            var per = actu/aim
            var str = (per*100).toFixed(2)+'%'
            ctx.beginPath();
            ctx.moveTo(10,20);
            ctx.lineTo(250,20);
            ctx.lineWidth= 8;
            ctx.strokeStyle="#ccc";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(10,20);
            var end =240*per
            if(end>=240) end = 240;
            ctx.lineTo(end+10,20);
            ctx.strokeStyle="#B4A078";
            ctx.stroke();
            ctx.textBaseline ='alphabetic';
            ctx.font = '12px sans-serif'
            ctx.fillStyle = '#b4a078'
            ctx.fillText(str,255,20)
        }
    },
    mounted(){
        this.printProgress(this.singleObj.aim,this.singleObj.actu,this.singleObj.id)
    }
}
</script>
<style scoped>
    .onCrowdfungding{
        width:535px;
        height: 220px;
        background: white;
    }
    .onCrowdfungding .title{
        font-size: 20px;
        margin-top:15px;
        margin-bottom:12px;
    }
    .canvas{
        margin-top:10px;
        margin-bottom: 22px;
    }
</style>


