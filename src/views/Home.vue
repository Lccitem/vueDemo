<template>
  <div class="content">
    <ul class="tabs">
		<li v-for="(item, index) in tabsItem" :key="item.active" class="tabsItem" :class="{active: index == active}" @click="toggleTabs(index)">{{item.title}}</li>
	</ul>
	<div>
		<my-card v-show="active === 0"></my-card>
		<my-addition v-show="active === 1"></my-addition>
		<my-todos v-show="active === 2"></my-todos>
	</div>
  </div>
</template>
<script>
import myCard from '../components/cart.vue'
import myAddition from '../components/addition.vue'
import myTodos from '../components/todos.vue'
	export default {
		components:{
			'my-card': myCard,
			'my-addition': myAddition,
			'my-todos': myTodos,
		},
		data(){
			return {
				active: 2,
				tabsItem: [
					{ title: '购物车', active: 0,},
					{ title: '计数器', active: 1,},
					{ title: '数据管理', active: 2,},
				]
			}
		},
		methods: {
			toggleTabs(index){
				this.active = index;
			}
		}
	}
</script>
<style scoped>
.content{
	width: 700px;
	margin: 50px auto 0;
}
.tabs{
	overflow: hidden;
	zoom: 1;
}
.tabsItem{
	float: left;
	border: 3px solid #195AE0;
	color: #195AE0;
	margin: 0 10px;
	padding: 5.75px 20px;
	list-style: none;
	text-align: center;
	cursor: pointer;
}
.tabsItem.active{
	background-color: #195AE0;
	color: #FFF;
}
</style>
