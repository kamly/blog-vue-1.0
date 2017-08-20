<template>	
<Row span="21" type="flex" justify="center" align="middle" >
	<Col span="2" class="left">
		分类:
	</Col>
	<Col span="19" offset="" class="right">
		<ul>
			<li>
					<Button type="primary">全部</Button>
			</li>
			<template v-for="(item, index) in classifys">
				<li>
					<Button>{{item.name}}</Button>
				</li>
			</template>
		</ul>
	</Col>
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
			classifys:[]
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
		this.$http.get('http://120.25.221.195:3000/classifys').then((response)=>{
			response = response.body; // 拿到json对象
			//console.log(response);
			this.classifys = response;
		})
	}
}
</script>


<style rel="stylesheet/less" lang="less">

</style>
