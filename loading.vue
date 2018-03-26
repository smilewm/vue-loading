<template>
	<div class="loading-box" v-show='show'>
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>
<style>
	.loading-box{
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 2000;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
	}
	.loading-box span{
		display: inline-block;
		width: 20px;
		height: 20px;
		background-color: #fff;
		border-radius: 100%;
		margin: 0px 5px;
		animation: loading 1.5s infinite;
		-webkit-animation: loading 1.5s infinite;
	}
	.loading-box span:nth-child(2){
		animation-delay:.25s;
		-webkit-animation-delay:.25s;
	}
	.loading-box span:nth-child(3){
		animation-delay:.5s;
		-webkit-animation-delay:.5s;
	}
	@keyframes loading{
		75%{
			transform: scale(0)
		}
	}
	@-webkit-keyframes loading{
		75%{
			transform: scale(0)
		}
	}
</style>
<script>
	export default{
		data(){
			return {
				show:false
			}
		}
	}
</script>