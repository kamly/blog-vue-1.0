<template>	
<Row class="publish">
	<Row class="title">
		发表评论
	</Row>
	<Row class="publish">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
			<Form-item label="姓名" prop="name">
				<Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
			</Form-item>
			<Form-item label="邮箱" prop="mail">
				<Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
			</Form-item>
			<Form-item label="评论" prop="desc">
				<Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
			</Form-item>
			<Form-item>
				<Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
				<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
			</Form-item>
		</Form>
	</Row>
</Row>
</template>

<script>
export default{
	// 外面传递
	props:{
		articleId:{
			type:Number,
			default:'',  
		}
	},

	data () {
		return {
			isUpdata:false,
			formValidate: {
			   name: '',
			   mail: '',
			   desc: ''
			},
			ruleValidate: {
				name: [
					{ required: true, message: '姓名不能为空', trigger: 'blur' }
				],
				mail: [
					{ required: true, message: '邮箱不能为空', trigger: 'blur' },
					{ type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
				],
				desc: [
					{ required: true, message: '请输入评论内容', trigger: 'blur' },
					{ type: 'string', min: 5, message: '评论不能少于5字', trigger: 'blur' }
				]
			},
		}
	},	
	methods: {
		handleSubmit (name) {
			//console.log(JSON.stringify(this.formValidate));
			//console.log(this.formValidate.name);				
			//console.log(this.$refs[name])
            this.$refs[name].validate((valid) => {
				//console.log(valid);
                 if (valid) {
					  var formData = JSON.stringify(this.formValidate)
					  this.$http({
						 method: 'POST',
						 url:'http://120.25.221.195:3000/comment/new',
						body:{
							articleId:this.articleId,
							replyCommentId:0,
							name:this.formValidate.name,
							contact:this.formValidate.mail,
							content:this.formValidate.desc
						},
						 headers:{
							"X-Requested-With": "XMLHttpRequest",
							'Content-Type': 'application/x-www-form-urlencoded'
						 },
						 emulateJSON: true,
						 emulateHTTP: true,
					  }).then((response) => {
						  // success callback      	  
						  //console.log(response.body.state)
						  if(response.body.state == 1){
							this.$Message.success('提交成功!');	
							this.$emit('child-tell-me-something',this.isUpdata)
							this.isUpdata = !this.isUpdata;
						  }else{
							this.$Message.success('提交失败!');	
						  }
					  }, (response) => {
						  // error callback
						  this.$Message.success('提交失败!');	
					  });
                } else {
                   this.$Message.error('表单验证失败!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
	}
}
</script>


<style rel="stylesheet/less" lang="less">
.publish{
	margin-bottom: 10px;
	.title{
		font-size: 20px;
		font-weight: bold;
		border-bottom:1px solid #dedcdc;
		margin-bottom:10px;
	}
}
</style>


