<template>	
<Row class="select">
	<selectdirection></selectdirection>
	<selectclassify></selectclassify>
	<selecttype></selecttype>
</Row>
</template>

<script>
import selectdirection from 'components/selectdirection/selectdirection';
import selectclassify from 'components/selectclassify/selectclassify';
import selecttype from 'components/selecttype/selecttype';

export default{
	// 外面传递
	props:{
	
	},
	// 本地值
	data(){
		return {
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
		selectdirection,
		selectclassify,
		selecttype,
	}
}
</script>


<style rel="stylesheet/less" lang="less">
.select{
	margin-top:20px;
	background-color:#fff;
	border-bottom:1px solid #e3e8ee;
	font-size:20px;
	font-weight:bold;
	// 右边
	.right{
		ul{
			li{
				float:left;
				padding:10px;
			}
		}
	}
}
</style>
