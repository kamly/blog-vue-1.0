<template>	
<Row class="tag">
	<Card>
		<p slot="title">标签</p>
		<template v-for="(val, key) in tags">
			<Tag color="yellow">{{val.name}}</Tag>
		</template>
	</Card>
</Row>
</template>

<script>
export default{
	// 外面传递
	props:{
	},
	// 本地值
	data(){
		return {
			tags:{}
		}
	},
	// 方法
	methods:{
	},
	// 使用方法
	computed:{
	},
	// 组件
	components:{
	},
	// 发起请求
	created(){
		this.$http.get('http://120.25.221.195:3000/tags').then((response)=>{
			response = response.body; // 拿到json对象
			//console.log(response);
			this.tags = response;
		})
	}
}
</script>


<style rel="stylesheet/less" lang="less">
.tag{
	margin-top:20px;
}
</style>
