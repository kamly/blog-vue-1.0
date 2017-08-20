<template>	
<Row class="comment">
	<Card>
		<p slot="title">最新评论</p>
		<template v-for="comment in lastComment">
		<Row class="item">
			<!--<router-link :to="{ name: 'articleDetail', params: { id: comment.articleId }}"></router-link>-->
			<div @click='goToArticleDetail(comment.articleId)'>
			<Row>
				<Col span="8" class="left">
					<img :src="comment.blog_article.cover"/>
				</Col>
				<Col span="16" class="right">
					<Col span="24" class="title">
						<a>{{comment.blog_article.title}}</a>
					</Col>
					<Col span="24" type="flex" justify="start" class="info">
						<Col span="8">
							<Icon type="ios-clock-outline"></Icon>
							{{comment.blog_article.createTime|substrArticleTime}}
						</Col>
						<Col span="8">
							<Icon type="ios-eye"></Icon>
							{{comment.blog_article.pv}}
						</Col>
					</Col>
				</Col>
			</Row>
			<Row>
				<Col span="24" class="content">
					用户'{{comment.name}}' 评论： {{comment.content|substrContent}}
				</Col>
			</Row>
			<Row>
				<Col span="24" class="time">
					评论时间：{{comment.createTime|substrContentTime}}
				</Col>
			</Row>
			</div>
		</Row>
		</template>
	</Card>
</Row>
</template>

<script>
export default{
	// 过滤器
	filters:{
	   substrContent:function(value){
		  if(!value) return '';
		  if(value.length>6) return value.substr(0,6);   
		  return value;
	   },
	   substrContentTime:function(value){
			if(!value) return '';
			return value.substr(0,10);
	   },
	   substrArticleTime:function(value){
			if(!value) return '';
			return value.substr(0,4);
	   }
	},
	// 外面传递
	props:{
	},
	// 本地值
	data(){
		return {
			lastComment:{}
		}
	},
	// 方法
	methods:{
		goToArticleDetail:function(data){
			//console.log(data)
			this.$router.push({ name: 'articleDetail', params: { id: data }})
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
		this.$http.get('http://120.25.221.195:3000/comment/last/5')
			.then((response)=>{
				response = response.body; // 拿到json对象
				//console.log(response);
				this.lastComment = response;
			})
	}
}
</script>


<style rel="stylesheet/less" lang="less">
.comment{
	margin-top:20px;
	// 单元
	.item{
		padding:0px 10px 0px 10px;
		border-bottom:1px solid #ccc;
		// 左边
		.left{
			//border: 1px dashed #ccc;
			text-align: center;				
			img{
				width:80px;
				height:50px;
				vertical-align:middle;
			}
		}
		// 右边
		.right{
		}
		.content{
			margin-top:5px;
		}
		.time{
			margin-bottom:5px;
		}
	}
}
</style>


