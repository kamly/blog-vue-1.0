<template>	
<Row type="flex" justify="center">
    <Col span="22" class="time-content">
		<Timeline>
			<Timeline-item>
				<Card class="card-item">
					<p slot="title">
						<Icon type="ios-time-outline"></Icon>
						1996
					</p>
					<a href="javascript:void(0);" slot="extra">
						<Icon type="happy-outline"></Icon>
						查看更多
					</a>
					<div class="card-content">
						<img src="http://obzrxvm4f.bkt.clouddn.com/blxb/590e099ee2bde" />
						<p class="text">123</p>
					</div>
				</Card>
			</Timeline-item>
			<Timeline-item>
				<Card class="card-item">
					<p slot="title">
						<Icon type="ios-time-outline"></Icon>
						1996
					</p>
					<a href="javascript:void(0);" slot="extra">
						<Icon type="happy-outline"></Icon>
						查看更多
					</a>
					<div class="card-content">
						<img src="http://obzrxvm4f.bkt.clouddn.com/blxb/590e099ee2bde" />
						<p class="text">123</p>
					</div>
				</Card>
			</Timeline-item>
		</Timeline>
    </Col>
</Row>
</template>

<script>
import error from 'components/error/error';

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
	}
}
</script>


<style rel="stylesheet/less" lang="less">
	.time-content{
		margin-top:50px;
		.card-item{
			width:600px;
			.card-content{
				img{
					display:block;
					margin:0 auto;
					width:400px;
					height:300px;
				}
				.text{
					word-wrap: break-word;	
				}
			}
		}		
	}
    .ivu-timeline-item{
		padding-bottom:30px;
    }
</style>
