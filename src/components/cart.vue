<template>
	<div>
		<div>
			<h3>添加商品</h3>
			<p>商品id：<input v-model="id" type="number"></p>
			<p>商品名称：<input v-model="title" type="text"></p>
			<p>商品价格：<input v-model="price" type="text"></p>
			<p>商品数量：<input v-model="count" type="number"></p>
			<button @click="addCart">加入购物车</button>
		</div>
		<ul v-for="item in books" :key="item.id">
			<li>名称：{{item.title}}</li>
			<li>价格：{{item.price}}</li>
			<li>数量：<button @click="countAdd">+</button> {{item.count}} <button @click="countCut">-</button></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id: null,
				title: null,
				price: null,
				count: null
			}
		},
		computed: {
			books(){
				return this.$store.state.items
			}
		},
		methods:{
			addCart(){
				this.$store.commit('pushItemToCart', 
					{
						id: this.id,
						title: this.title,
						price: this.price,
						count: this.count,
					}
				)
			},
			countAdd(){},
			countCut(){}
		}
	}
</script>

<style>
</style>
