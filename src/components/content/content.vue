<template>	
<div class="v-content">
	<Row class="title" type="flex" justify="center">
		{{articleDetail.title}}
	</Row>

	<!-- 信息 -->
	<Row class="info" type="flex" justify="center">
		<div class="item">
			<Tooltip content="发表时间" placement="left">
				<Icon type="ios-clock-outline"></Icon>
				{{articleDetail.createTime|substrTime}}
			</Tooltip>
		</div>
	
		<div class="item">
			<Tooltip content="浏览人数" placement="bottom">
				<Icon type="ios-eye"></Icon>
				{{articleDetail.pv}}
			</Tooltip>
		</div>
	
		<div class="item">
			<Tooltip content="评论人数" placement="right">
				<Icon type="social-twitch-outline"></Icon>
				{{commentNu}}
			</Tooltip>
		</div>
	</Row>

	<!-- 封面 -->
	<Row class="cover" type="flex" justify="center">
		<img :src="articleDetail.cover"/>
	</Row>
	
	<!-- 内容 -->
	<Row class="content">
		<Row class="title">
			正文
		</Row>
		<Row v-html="articleDetail.content">
			{{articleDetail.content}}
		</Row>
	</Row>
	<Row class="tag" type="flex" justify="center" align="middle" >
		类型:<Tag  type="border" :color=color[selectColor]>{{articleDetail.blog_type|substrName}}</Tag>
		方向:<Tag  type="border" :color=color[selectColor]>{{articleDetail.blog_direction|substrName}}</Tag>
		分类:<Tag  type="border" :color=color[selectColor]>{{articleDetail.blog_classify|substrName}}</Tag>
	</Row>
	<Row class="tag" type="flex" justify="center" align="middle" >
		标签：
		<template v-for="tag in articleDetail.tagResult">
			<Tag  type="border" color="yellow">{{tag}}</Tag>
		</template>
	</Row>
</div>
</template>

<script>
export default{
	filters:{
		substrName:function(value){
			//console.log(value.name);
			if(!value) return '';
			return value.name;
		},
		substrTime:function(value){
			if(!value) return '';
			return value.substr(0,16);
		},

	},
	// 外面传递
	props:{
		articleDetail:{
			type:Object,
			default:'',  
		}
	},
	// 本地值
	data(){
		return {
			color:[],
			commentNu:'',
		}
	},
	// 方法
	methods:{
		random(range){
			var min = Math.min(range[0], range[1]);
			var max = Math.max(range[0], range[1]);
			var diff = max - min;
			var number = Math.round(Math.random() * diff) + min;
			return number;
		},
		getInfo(){
			var that = this;
			var articleId = this.articleDetail.articleId
			//console.log(articleId);
			that.$http.get('http://120.25.221.195:3000/comment/articleid/'+articleId)
				.then((response)=>{
					response = response.body; // 拿到json对象
					//console.log(response);
					that.commentNu = response.length;
				})
		}

	},
	// 使用方法
	computed:{
		selectColor:function () {
			var randomNu = this.random([0,4]); // [0,4)
			//console.log(randomNu);
			return randomNu;
		},
	},
	// 组件
	components:{
	},
	// 发起请求
	created(){
		var that = this;
		this.color=['yellow','blue','red','green'];
	},
	watch:{
		articleDetail:{
			handler: function (val, oldVal) { 
				this.getInfo();	
				//console.log(val);
			},
      		deep: true
		}
	},

}
</script>


<style rel="stylesheet/less" lang="less">
.v-content{
	margin-top:20px;
	// 标题
	.title{
		margin-bottom:10px;
		font-size:30px;
		font-weight:bold;
	}
	// 信息
	.info{
		margin-bottom:10px;
		padding-bottom:10px;
		border-bottom:1px solid #dedcdc;
		.item{
			margin:10px;
		}
	}
	.cover{
		margin-bottom:10px;
		img{
			width:1000px;
			height:200px;
		}
	}
	.content{
		img{
			width:300px;
			height:300px;
		}
		.title{
		    font-size: 20px;
		    font-weight: bold;
		    border-bottom:1px solid #dedcdc;
		}
		margin-bottom:10px;
		font-size:20px;
		word-wrap:break-word; 
		word-break:break-all; 
		overflow: hidden;  
	}
	.tag{
		margin-bottom:10px;
	}
}
</style>
