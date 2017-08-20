<template>	
<Row type="flex" justify="center" class="article">
  <Col span="22">
	<Card>
		<v-content :articleDetail="articleDetail"></v-content>
		<postcomment :articleId="parseInt(articleDetail.articleId)" v-on:child-tell-me-something='listenToMyBoy'></postcomment>
		<commentlist :articleId="parseInt(articleDetail.articleId)" :isUpdata="childWords"></commentlist>
	</Card>
  </Col>
</Row>
</template>

<script>
import content from 'components/content/content';
import postcomment from 'components/postcomment/postcomment';
import commentlist from 'components/commentlist/commentlist';

export default{
	// 外面传递
	props:{
	
	},
	// 本地值
	data(){
		return {
			id:'',
			articleDetail:{},
			childWords:'',
		}
	},
	// 方法
	methods:{
		listenToMyBoy (msg) {
		   //console.log(msg)
      	   this.childWords = msg
    	}
	},
	// 使用方法
	computed:{
	},
	// 组件
	components:{
		'v-content':content,
		postcomment,
		commentlist,
	},
	created(){
		//console.log(this.$route.params.id)
		var id = this.$route.params.id;
		this.id = id;
		this.$http.get('http://120.25.221.195:3000/article/'+id)
			.then((response)=>{
				response = response.body;
				this.articleDetail = response;
				//console.log(response);
			})
	}
}
</script>


<style rel="stylesheet/less" lang="less">	
.article{
	margin-top:20px;
}
</style>


