<template>
    <div class="loading-box" v-show='show'>
        <div class="object object_1"></div>
        <div class="object object_2"></div>
        <div class="object object_3"></div>
        <div class="object object_4"></div>
    </div>
</template>
<style>
    .loading-box{
        position: absolute;
        top: 50%;
        left:50%;
        width:100px;
        height:100px;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
    }
    .loading-box .object{
        position: absolute;
        left:50%;
        border-radius: 100%;
        border-color: #fff;
        border-top:5px solid transparent;
        border-left:5px solid transparent;
        border-right:5px solid #fff;
        border-bottom:5px solid #fff;
        transform: translateX(-50%) rotate(45deg);
        -webkit-transform: translateX(-50%) rotate(45deg);
    }
    .loading-box .object_1{
        width:100px;
        height:100px;
        bottom: 10px;
        animation: object 2s infinite;
        -webkit-animation: object 2s infinite;
        animation-delay: .6s;
        -webkit-animation-delay: .6s;
    }
    .loading-box .object_2{
        width:80px;
        height:80px;
        bottom: 20px;
        animation: object 2s infinite;
        -webkit-animation: object 2s infinite;
        animation-delay: .4s;
        -webkit-animation-delay: .4s;
    }
    .loading-box .object_3{
        width:60px;
        height:60px;
        bottom: 30px;
        animation: object 2s infinite;
        -webkit-animation: object 2s infinite;
        animation-delay: .2s;
        -webkit-animation-delay: .2s;
    }
    .loading-box .object_4{
        width:40px;
        height:40px;
        bottom: 40px;
        animation: object 2s infinite;
        -webkit-animation: object 2s infinite;
    }
    @keyframes object {
        50%{
            transform: translateX(-50%) rotate(405deg);
            -webkit-transform: translateX(-50%) rotate(405deg);
        }
    }
    @-webkit-keyframes object {
        50%{
            transform: translateX(-50%) rotate(405deg);
            -webkit-transform: translateX(-50%) rotate(405deg);
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                show:false
            }
        }
    }
</script>