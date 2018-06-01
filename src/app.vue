<template>
    <div id="app"> 
      <div id="cover"></div>   
      <Header></Header>
      <Footer></Footer>
    </div>
</template>

<script>
    import Header from './todo/header.vue';
    import Footer from './todo/footer.jsx';
    export default {
        components:{
            Header,
            Footer
        }
    }
</script>

<style lang="scss"> 
    #app{
        position:absolute;
        left:0;
        top:0;
        bottom:0;
        right:0;
        #cover{
            position:absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            background:rgba(#999,0.7);
            z-index:1;
        }
    }
</style>