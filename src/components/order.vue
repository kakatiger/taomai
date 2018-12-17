<template>
    <div class="order">
        <receiving-info></receiving-info>
        <place-order :orderList='orderList'></place-order>
        <Footer></Footer>
    </div>
</template>
<script>
    import receivingInfo from '@/components/order/receivingInfo.vue'
    import placeOrder from '@/components/order/placeOder.vue'
    import Footer from '@/components/many/footer.vue'

    export default {
        components:{
            receivingInfo,placeOrder,Footer
        },
        data(){
            return {orderList:[]}
        },
        methods:{
            getOrder(){//将购物车得到的json变为数组
                var arr=this.$route.query.json
                arr=JSON.parse(arr)
                this.orderList=arr
            }
        },
        mounted(){
            this.getOrder()
        }
    }
</script>
<style scoped>
    .order{
        width:1090px;
        margin:80px auto 0;
    }
</style>