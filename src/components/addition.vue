<template>
	<div>
		<h3>{{showNum}}</h3>
		<button @click="handleBtnClick('add')">+1</button>
		<button @click="handleBtnAsyClick('asyAdd')">asy+1</button>
		<p>----------------------------</p>
		<h3>当前最新得count值为：{{count}}</h3>
		<button @click="handleBtnClick('sub')">-1</button>
		<button @click="handleBtnAsyClick('asySub')">asy-1</button>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
	export default {
		computed: {
			...mapState(['count']),
			...mapGetters(['showNum'])
		},
		data(){
			return {
				
			}
		},
		methods: {
			...mapMutations(['countAdds']),
			...mapActions(['asyncAdd']),
			handleBtnClick(type){
				this.countAdds(type);
			},
			handleBtnAsyClick(type){
				this.asyncAdd(type);
			},
		}
	}
</script>

<style>
</style>
