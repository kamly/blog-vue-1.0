	
<template>
<Row type="flex" justify="center"  class="content">
	<Col span="15" class="left">
		<carousel></carousel>
		<newarticle></newarticle>
	</Col>
	<Col span="7" class="right">
		<statist></statist>
		<tag></tag>
		<lastcomment></lastcomment>
	</Col>
</Row>
</template>


<script>
import carousel from 'components/carousel/carousel';
import newarticle from 'components/newarticle/newarticle';
import statist from 'components/statist/statist';
import lastcomment from 'components/lastcomment/lastcomment';
import tag from 'components/tag/tag';

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
		carousel,
		newarticle,
		statist,
		lastcomment,
		tag,
	}
}
</script>


<style rel="stylesheet/less" lang="less">

</style>
