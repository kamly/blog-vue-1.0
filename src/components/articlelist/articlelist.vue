<template>	
<Row class="articlelist" type="flex" justify="center" v-scroll="getMore">
<Col span="22">
	<Card>
		<p slot="title" class="title">
			文章列表
		</p>
		<ul>
			<template v-for="(item, index) in newslist">
			<li class="item" @click.prevent="goToArticleDetail(item.articleId)">
				<Row>
					<Col span="8" class="left">
						<img :src="item.cover">
					</Col>
					<Col span="16" class="right">
						<Col span="24" class="title">
							<a>{{item.title}}</a>
						</Col>
						<Col span="24" type="flex" justify="start" class="info">
							<Col span="4">
								<Icon type="ios-clock-outline"></Icon>
								{{item.createTime|substrTime}}
							</Col>
							<Col span="4">
								<Icon type="ios-eye"></Icon>
								{{item.pv}}
							</Col>
							<Col span="4">
								<Icon type="social-twitch-outline"></Icon>
								100
							</Col>
						</Col>
						<Col span="24" class="des">
							{{item.des}}
						</Col>
					</Col>
				</Row>
			</li>
			</template>
		</ul>
	</Card>
	<template v-if="withoutData === true">
		<p class="get-more">到底部啦</p>
	</template>
	<template v-else>
		<p class="get-more" v-on:click="getMore()" v-show="switchShow">点击加载更多</p>
    	<p class="get-more" v-show="!switchShow">加载中...</p>
	</template>
</Col>
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
	// 指令
	directives:{
	  scroll: {
        bind: function (el, binding){
          window.addEventListener('scroll', function () {
            if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
              var fnc = binding.value;   
              fnc(); 
            }
          })
        }
      }
	},
	// 外面传递
	props:{
	},
	// 本地值
	data(){
		return {
			page:0,
			newslist:[],
			switchShow:false,
			withoutData:false,
		}
	},
	// 方法
	methods:{
	  goToArticleDetail:function(data){
			//console.log(data)
			this.$router.push({ name: 'articleDetail', params: { id: data }})
	  },
	  getData(page){
		var that = this;
		that.$http.get('http://120.25.221.195:3000/article/page/' + page + '/num/1').then((response)=>{
			response = response.body; // 拿到json对象
			that.newslist = [...that.newslist,...response];
			this.switchShow=!this.switchShow;
			if(response.length==0){
				this.withoutData = true;
			}
		})
	  },
	  getMore: function () {
		if(!this.withoutData){
		 this.switchShow=!this.switchShow;
         this.page++;
         this.getData(this.page);
		}
      },
	},
	// 钩子函数
	mounted () {
	},	
	// 检测函数
	watch:{
	},
	// 发起请求
	created(){
		this.getData(this.page);
	},
	// 组件
	components:{
	},
}
</script>


<style rel="stylesheet/less" lang="less">
.articlelist{
	margin-top:10px;
	.get-more{
		display:block;
		padding:15px 0; 
		margin: 10px auto;
 		line-height:16px;
		text-align:center;
		font-size:14px;
    }
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


