<template>
<Row type="flex" justify="center" align="middle" class="header-top" >
	<Col span="7" class="left">人生苦短，岁月如歌</Col>
	<Col span="7" offset="8" class="right">
		<Col span="8"><a>标签云</a></Col>
		<Col span="8"><a>读者墙</a></Col>
		<Col span="8"><a>后台管理</a></Col>
	</Col>
</Row>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>


<style rel="stylesheet/less" lang="less">
.header-top{
	background-color:#fff;
	padding:10px 0 10px 0;
	font-size:12px;
	.right{
		text-align:right;				
	}
}
</style>
