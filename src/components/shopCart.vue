<template>
    <div class="shopCart">
        <shop-cart-main></shop-cart-main>
        <Footer></Footer>
    </div>
</template>
<script>
    import shopCartMain from '@/components/shopCart/shopCartMain.vue'
    import Footer from '@/components/many/footer.vue'
    export default {
        components:{
            shopCartMain,Footer
        }
    }
</script>
<style scoped>
    .shopCart{
        margin: 100px auto;
        width: 1090px;
    }

</style>