<template>	
<Row class="new-article">
	<Card>
		<p slot="title" class="title">
			文章列表
		</p>
		<a href="#" slot="extra" @click.prevent="changeLimit">
			<Icon type="ios-loop-strong"></Icon>
			换一换
		</a>
		<ul>
			<li class="item" v-for="item in randomMovieList" @click.prevent="goToArticleDetail(item.articleId)">
				<Row>
					<Col span="8" class="left">
						<img :src="item.cover">
					</Col>
					<Col span="16" class="right">
						<Col span="24" class="title">
							<Tag type="dot" color="blue">{{item.blog_direction.name}}</Tag>
							<Tag type="dot" color="yellow">{{item.blog_classify.name}}</Tag>
							<Tag type="dot" color="green">{{item.blog_type.name}}</Tag>
							<a :href="item.url" target="_blank">{{ item.title }}</a>
						</Col>
						<Col span="24" type="flex" justify="start" class="info">
							<Col span="6">
								<Icon type="ios-clock-outline"></Icon>
								{{item.createTime|substrTime}}
							</Col>
							<Col span="6">
								<Icon type="ios-eye"></Icon>
								{{item.pv}}
							</Col>
							<Col span="6">
								<Icon type="social-twitch-outline"></Icon>
								100
							</Col>
						</Col>
						<Col span="24" class="des">
							{{item.des|substrDes}}
						</Col>
					</Col>
				</Row>
			</li>
		</ul>
	</Card>
</Row>
</template>

<script>
export default{
	filters:{
		substrTime:function(value){
			if(!value) return '';
			return value.substr(0,10);
		},
		substrDes:function(value){
			if(!value) return '';
			if(value.length > 100) return value.substr(0,100);
			return value
		}
	},
	// 外面传递
	props:{
	},
	// 本地值
	data(){
		return {
			movieList: [],
			randomMovieList:[],
		}
	},
	// 方法
	methods:{
		goToArticleDetail:function(data){
			//console.log(data)
			this.$router.push({ name: 'articleDetail', params: { id: data }})
		},
		changeLimit () {
			function getArrayItems(arr, num) {
				const temp_array = [];
				for (let index in arr) {
					temp_array.push(arr[index]);
				}
				const return_array = [];
				for (let i = 0; i<num; i++) {
					if (temp_array.length>0) {
						const arrIndex = Math.floor(Math.random()*temp_array.length);
						return_array[i] = temp_array[arrIndex];
						temp_array.splice(arrIndex, 1);
					} else {
						break;
					}
				}
				return return_array;
			}
			this.randomMovieList = getArrayItems(this.movieList, 5);
		},
		//randomMovieList: []
	},
	// 钩子函数
	mounted () {
	},	
	// 检测函数
	watch:{
		movieList: {
			handler:function(val,oldVal){
				this.changeLimit();	
			},
			deep:true
		}
	},
	// 发起请求
	created(){
		this.$http.get('http://120.25.221.195:3000/article/last/10').then((response)=>{
			response = response.body; // 拿到json对象
			//console.log(response);
			this.movieList = response;
		})
	},
	// 组件
	components:{
	},
}
</script>


<style rel="stylesheet/less" lang="less">
.new-article{
	margin-top:20px;
	padding-right:20px;
	.title{
		font-size:18px;
	}
	// 单元内容
	.item{
		padding:10px;
		border-bottom:1px solid #ccc;
		// 左边
		.left{
			//border: 1px dashed #ccc;
			text-align: center;				
			img{
				width:200px;
				height:150px;
				vertical-align:middle;
			}
		}
		// 右边
		.right{
			.title,.info,.des{
				padding:1px;
			}
			// 标题
			.title{
				font-weight:bold;
				font-size:18px;
			}
			// 信息
			.info{
				
			}
			// 描述
			.des{
				word-wrap:break-word; 
				word-break:break-all; 
				overflow: hidden;   
			}
		}
		// 最后一个
		&:last-child{
			border-bottom:0px;
		}
		// 经过
		&:hover{
			border-bottom:1px solid #0490ff;
		}
	}		
}
</style>
