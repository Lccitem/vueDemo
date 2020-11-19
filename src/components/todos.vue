<template>
  <div>
    <a-input :value="inputValue" @change="handleInputValue" placeholder="请输入任务" class="my_ipt" />
    <a-button type="primary" @click="addItemToList">添加事项</a-button>

    <a-list bordered :dataSource="infoTodoList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked="item.done" @change="(e) => {cbStatusChange(e, item.id)}">{{item.info}}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItemToList(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="footer">
        <!-- 未完成的任务个数 -->
        <span>{{unDoneLength}}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button :type="viewKey === 'all' ? 'primary' : 'default'" @click="btnChange('all')">全部</a-button>
          <a-button :type="viewKey === 'undone' ? 'primary' : 'default'" @click="btnChange('undone')">未完成</a-button>
          <a-button :type="viewKey === 'done' ? 'primary' : 'default'" @click="btnChange('done')">已完成</a-button>
        </a-button-group>
        <!-- 把已经完成的任务清空 -->
        <a @click="clean">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
	import { mapState,mapMutations,mapGetters } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  computed:{
	 ...mapState(['todoList','inputValue','viewKey']),
	 ...mapGetters(['unDoneLength','infoTodoList'])
  },
  created(){
	  this.$store.dispatch('getTodoList')
  },
  methods:{
	  ...mapMutations(['setInputValue','addTodoItem','removeTodoItem','checkChange','cleanTodoList','btnChangeView']),
	  //监听文本框变化
	  handleInputValue(e){
		  let val = e.target.value;
		  this.setInputValue(val);
	  },
	  //向列表中新增 item 项
	  addItemToList(){
		  if(this.inputValue.trim().length <= 0){
			  return this.$message.warning('文本框内容不能为空！')
		  }
		  this.addTodoItem();
	  },
	  //从列表中删除 item 项
	  removeItemToList(id){
		  this.removeTodoItem(id);
	  },
	  //复选框选中触发
	  cbStatusChange(e, id){
		  this.checkChange(id)
	  },
	  //清除已完成数据
	  clean(){
		  this.cleanTodoList();
	  },
	  //按钮点击触发
	  btnChange(key){
		  this.btnChangeView(key)
	  }
  }
}
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
