<template>
	<ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" @click="add" >
			<a href="javascript:;">
				<img  class="mui-media-object mui-pull-left"  src="../assets/touxiang/2.png" alt="">
				<div class="mui-media-body">
					<h1>项链</h1>
					<p class="mui-ellipsid" >
						<span>发表时间：2022-01-01</span>
						</p>
						<div class="anniu">
							<div class="anniu1">
							<p>{{count}}</p><button>查看:</button>
						
					</div>
						</div>
					
				</div>
			</a>
		</li>

		

		
	</ul>
</template>

<script>
export default{
	data(){
		return{
			count:0
		};
	},
	methods:{
		add(){
			this.count++
		}
	}
}
</script>


<style lang="scss" scoped>
.mui-media-body h1{
	font-size: 15px;
}
.mui-ellipsid {
	font-size: 10px;
	
	color: rgb(29, 29, 31);
	display:flex ;
	justify-content: space-between;
}
.anniu p{
	margin-left: 270px;
	margin-top: -20px;
}
.anniu button{
	margin-left: 210px;
	margin-top: -27px;
	border: 1px solid #fff;
}


</style>