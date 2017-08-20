<template>	
<Row type="flex" justify="center" align="middle"  >
	<Col span="2" class="left">
		方向:
	</Col>
	<Col span="19" offset="" class="right">
		<ul>
			<li>
				<Button type="primary">全部</Button>
			</li>
			<template v-for="(item, index) in directions">
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
			directions:[]
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
		this.$http.get('http://120.25.221.195:3000/directions').then((response)=>{
			response = response.body; // 拿到json对象
			//console.log(response);
			this.directions = response;
		})
	}

}
</script>


<style rel="stylesheet/less" lang="less">

</style>
