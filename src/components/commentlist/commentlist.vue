<template>	
<Row class="comment">
	<Row class="title">
		评论
	</Row>
	<template v-if="commentList.length != 0">
		<template v-for="(item, index) in commentList">
			<Card class="item">
				<p slot="title">{{item.name}}({{item.createTime|substrTime}})</p>
				<p slot="extra"> #{{index+1}} </p>
				<p v-html="item.content">{{item.content}}</p>
				<a>联系方式：{{item.contact}}</a>
			</Card>
		</template>
	</template>
	<template v-else>
		<Card class="item">
			<p>没人评论，伤心Ing</p>
		</Card>
	</template>
</Row>
</template>

<script>
export default{
	filters:{
		substrTime:function(value){
			if(!value) return '';
			return value.substr(0,10);
		}
	},
	// 外面传递
	props:{
		articleId:{
			type:Number,
			default:'',  
		},
		isUpdata:{
			type:String,
			default:'',  
		}
	},
	// 本地值
	data(){
		return {
			commentList:{},
		}
	},
	// 方法
	methods:{
		getInfo(){
			var that = this;
			var articleId = this.articleId
			//console.log(articleId);
			that.$http.get('http://120.25.221.195:3000/comment/articleid/'+articleId)
				.then((response)=>{
					response = response.body; // 拿到json对象
					//console.log(response);
					that.commentList = response;
				})
		},
	},
	// 使用方法
	computed:{
	},
	// 组件
	components:{
	},
	// 发起请求
	created(){
	},
	watch:{
		articleId:{
			handler: function (val, oldVal) { 
				this.getInfo();	
				//console.log(val);
			},
      		deep: true
		},
		isUpdata:{
			handler: function(val, oldVal) {
				this.getInfo();
				//console.log(val)
			},
			deep: true
		}
	},

}
</script>


<style rel="stylesheet/less" lang="less">
.comment{
	.title{
		font-size: 20px;
		font-weight: bold;
		border-bottom:1px solid #dedcdc;
	}
	.item{
		margin:10px;
		img{
			width:100px;
			height:100px;
		}
	}
}
</style>
