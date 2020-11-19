import Vue from 'vue'
import Vuex from 'vuex'
import datas from  '../data/data.js'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  //购物车
	  items: datas.list,
	  //计数器
	  count: 0,
	  //数据管理
	  todoList: [],
	  inputValue: '',
	  nextId: 0,
	  viewKey: 'all'
  },
  mutations: {
	  //购物车
	  pushItemToCart(state, book){
		state.items.push(book)
	  },
	  //计数器
	  countAdds(state, type){
		type == 'add' || type == 'asyAdd' ? state.count++ : state.count--
	  },
	  //数据管理
	  initTodoList(state, list){
		  state.todoList = list;
	  },
	  setInputValue(state, val){
		  state.inputValue = val;
	  },
	  addTodoItem(state){
		  state.nextId = state.todoList[state.todoList.length-1].id + 1;
		  const obj = {
			  id: state.nextId,
			  info: state.inputValue.trim(),
			  done: false
		  }
		  state.todoList.push(obj)
		  state.inputValue = ''
	  },
	  removeTodoItem(state, id){
		  //findIndex 兼容性差
		 //  const i = state.todoList.findIndex(item => item.id === id);
		 //  if(i !== -1)
			// state.todoList.splice(i)
			state.todoList.forEach((item, i) => {
				if(item.id === id){
					state.todoList.splice(i, 1)
				}
			})
	  },
	  checkChange(state, id){
		  state.todoList.forEach(item => {
			  if(item.id === id)
				item.done = !item.done
		  })
	  },
	  cleanTodoList(state){
		  state.todoList =  state.todoList.filter(item => item.done === false)
	  },
	  //修改按钮高亮显示
	  btnChangeView(state, key){
		  state.viewKey = key
	  }
  },
  actions: {
	  //计数器
	  asyncAdd(context, type){
		  //context 相当于一个store实例对象
		  setTimeout(()=>{
			 context.commit('countAdds', type)
		  }, 1000)
	  },
	  //数据管理
	  getTodoList(context){
		  axios.get('/todos.json').then(({data})=>{
			  context.commit('initTodoList', data)
		  })
	  },
  },
  getters: {
	  //计数器
	  showNum(state){
		  return '当前最新得数量是：'+ state.count
	  },
	  //数据管理
		//统计未完成得任务条数
	  unDoneLength(state){
			return state.todoList.filter(item => item.done === false).length;
	  },
	  infoTodoList(state){
		  if(state.viewKey === 'all')
			return state.todoList
		  if(state.viewKey === 'undone')
			return state.todoList.filter(item => item.done === false)
		  if(state.viewKey === 'done')
			return state.todoList.filter(item => item.done === true)
		  return state.todoList
	  }
  },
  modules: {
  }
})
