<template>
    <div class="googsShowdetails">
        <de-nav :nav_obj="obj"></de-nav>
        <de-Main :main_obj="obj" :arr="arr" :spec="spec"></de-Main>
        
        <el-row>
            <el-col :span="18"><div class="grid-content change_tabs">
                <el-tabs v-model="activeName2" type="card">
                    <el-tab-pane label="详情" name="first">
                        <div class='seeMore'>
                            <img src="http://taomaimai.applinzi.com/img/details/img.jpg" width='100%'>
                            <img src="http://taomaimai.applinzi.com/img/details/img2.jpg" width='100%'>
                            <img v-for='i in 9' :src='"http://taomaimai.applinzi.com/img/details/00"+(i)+".jpg"' width='100%'>
                            <img src="http://taomaimai.applinzi.com/img/details/010.jpg" width='100%'>
                            <img v-for='i in 16' :src='"http://taomaimai.applinzi.com/img/details/0"+(i+11)+".jpg"' width='100%'>
                        </div>

                    </el-tab-pane>
                    <el-tab-pane label="评价" name="second">
                            <el-card class="box-card">
                                    <div v-for="item in comments" :key="item.id" class="commentList">
                                            <el-row>
                                                    <el-col :span="4"><div class="grid-content">
                                                        <img :src="item.img" width="80px">
                                                    </div></el-col>
                                                    <el-col :span="20"><div class="grid-content">
                                                        <p>{{item.score}}</p>
                                                        <p>{{item.content}}</p>
                                                    </div></el-col>
                                            </el-row>
                                    </div>
                                  </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="质检报告" name="third">质检报告
                    </el-tab-pane>
                    <el-tab-pane label="常见问题" name="fourth">常见问题
                    </el-tab-pane>
                </el-tabs>
            </div></el-col>
            <el-col :span="4" :offset='1'><div class="grid-content"></div></el-col>
        </el-row>
    </div>
</template>
<script>
    import Vue from 'vue'
    import deNav from '@/components/details/detailsNav.vue'
    import deMain from '@/components/details/detailsMain.vue'
    export default {
        components: {
            deNav,
            deMain
        },
        data: function () {
            return {
                obj: {},
                arr: [],
                spec: [],
                activeName2: 'first',
                comments:[
                    {id:1,img:'static/img/avatar/1.jpg',score:8,content:'质量还可以吧'},
                    {id:2,img:'static/img/avatar/2.jpg',score:8,content:'哈哈，一般般'},
                    {id:3,img:'static/img/avatar/3.jpg',score:8,content:'哎呀'},
                    {id:4,img:'static/img/avatar/4.jpg',score:8,content:'妈呀'}
                ]
            }
        },
        methods: {
         
        },
        mounted() {
            this.axios.get('furnishing/details', {
                params: {
                    nid: this.$route.query.nid
                }
            }).then(res => {
                this.obj = res.data[0]
                this.arr = [this.obj.show1, this.obj.show2, this.obj.show3, this.obj.show4, this.obj.show5]
                this.spec = this.obj.spec.split('/')
            });
        }
    }
</script>
<!-- 需要更改element UI的样式，style内不能写scoped -->
<style>
    .googsShowdetails {
        width: 1090px;
        margin: 220px auto 0;
        position: relative;
    }
   .seeMore img{
        padding: 0;
        margin:-3px;
    }
    .googsShowdetails .change_tabs .el-tabs__item.is-top{
        width:120px;
        text-align: center
    }
    .googsShowdetails .change_tabs .el-tabs__item.is-top.is-active{
        color:#b4a078;
        border-top: 3px solid #b4a078;
    }
    .googsShowdetails .commentList .el-row{
        height: 200px;
    }
    .googsShowdetails .commentList img{
        border-radius:50%;
    }
</style>