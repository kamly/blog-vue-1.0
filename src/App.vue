<template>
<div>
	<v-header></v-header>
	<Affix>
        <Row type="flex" justify="center" align="middle" class="header" >
          <Col span="7" class="left">
            <Col span="24">Charmingkamly</Col>
            <Col span="22">博客</Col>
          </Col>
          <Col span="15" offset="" class="right">
            <ul>
              <li>
                <a><router-link to="/index">首页</router-link></a>
              </li>
              <li>
                 <a><router-link to="/article">文章</router-link></a>
              </li>
              <li>
                 <a><router-link to="/tools">工具</router-link></a>
              </li>
				<li>
                 <a><router-link to="/time">时间轴</router-link></a>
              </li>
              <li>
                 <a><router-link to="/personal">个人介绍</router-link></a>
              </li>
            </ul>
          </Col>
        </Row>
    </Affix>
 	<router-view></router-view>
</div>
</template>

<script>
	import header from 'components/header/header';
	export default{
		components: {
      		'v-header' : header
    	}
	}
</script>


<style rel="stylesheet/less" lang="less">
.header{
	background-color:#fff;
	border-bottom:1px solid #e3e8ee;
	font-size:20px;
	font-weight:bold;
	// 右边
	.right{
		ul{
			float:right;
			li{
				float:left;
				a{
					padding: 0 35px;
				}
				&:last-child{
					a{
						padding:0 0 0 35px;
					}
				}
			}
		}
	}
}
</style>


