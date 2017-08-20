<template>	
<Row class="carousel">
	<Card>
		<Carousel autoplay>
			<template v-for="item in HPv">
				<Carousel-item>
					<div @click='goToArticleDetail(item.articleId)' class="item-carousel" :style="{ backgroundImage:'url('+ item.cover + ')'}" >
						{{item.title|substrTitle}}
					</div>
				</Carousel-item>
			</template>
		</Carousel>
	</Card>
</Row>
</template>

<script>
export default{
	// 过滤器
	filters:{
		substrTitle:function(value){
			if(!value) return '';
			return value.substr(0,10);
		}
	},
	// 外面传递
	props:{
	},
	// 本地值
	data(){
		return {
			HPv:{}
		}
	},
	// 方法
	methods:{
		goToArticleDetail:function(data){
			this.$router.push({name:'articleDetail', params:{id:data}})				  
		}
	},
	// 使用方法
	computed:{
	},
	// 组件
	components:{
	},
	// 发起请求
	created(){
		this.$http.get('http://120.25.221.195:3000/article/hpv/3').then((response)=>{
			response = response.body; // 拿到json对象
			//console.log(response);
			this.HPv = response;
		})
	}
}
</script>


<style rel="stylesheet/less" lang="less">
// 跑马灯
.carousel{
	margin-top:20px;
	padding-right:20px;
	.item-carousel {
		height: 200px;
		line-height: 200px;
		text-align: center;
		color: #fff;
		font-size: 20px;
	}
}
</style>
