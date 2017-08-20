<template>	
<div>
	<v-select></v-select>
	<articlelist></articlelist>
</div>
</template>

<script>
import select from 'components/select/select';
import articlelist from 'components/articlelist/articlelist';

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
		'v-select':select,
		articlelist,
	}

}
</script>


<style rel="stylesheet/less" lang="less">

</style>
