<template>
  <a-layout style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>员工管理</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
      :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
    >
      <a-row>
        <a-col :span="6">
          <a-input-search
            placeholder="输入员工ID或姓名"
            enter-button="搜索"
            size="large"
            @search="onSearch"
            style="margin: 10px"
            v-model="search"
          /></a-col>
      </a-row>

      <a-row>
        <a-col span="2">
          <a-button type="primary">
            <router-link to="/check/add-user">添加员工</router-link>
          </a-button>
        </a-col>
        <a-col span="22">
          <a-table :columns="columns" :data-source="dataTable" bordered>
            <template
              v-for="col in ['name', 'age', 'department','username','address','level','phone']"
              :slot="col"
              slot-scope="text, record, index"
            >
              <div :key="col" v-if="col === 'level' && record.editable">
                <a-select :default-value="record.level" style="width: 120px" @select="selectChange(value,record)">
                  <a-select-option value="领导">
                    领导
                  </a-select-option>
                  <a-select-option value="部门主管">
                    部门主管
                  </a-select-option>
                  <a-select-option value="员工">
                    员工
                  </a-select-option>
                </a-select>
              </div>
              <div :key="col" v-else>
                <a-input
                  v-if="record.editable"
                  style="margin: -5px 0"
                  :value="text"
                  @change="e => handleChange(e.target.value, record.key, col)"
                />
                <template v-else>
                  {{ text }}
                </template>
              </div>
            </template>
            <template slot="operation" slot-scope="text, record, index">
              <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="() => save(record.key)">保存</a>
          <a-popconfirm title="确定取消？" @confirm="() => cancel(record.key)">
            <a>取消</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a :disabled="editingKey !== ''" @click="() => edit(record.key)">编辑</a>
        </span>
        <span v-if="record.deleteable">
          <a @click="() => cancel(record.key)">取消</a>
          <a-popconfirm title="确认删除?" @confirm="() =>ondelete(record.key)">
            <a>删除</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a :disabled="deletingKey !==''" @click="() => InfoDelete(record.key)">删除</a>
        </span>
              </div>
            </template>
          </a-table>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>
<script>
import {deepCopy} from "../../api/utils/deepcopy";
const columns = [
  {
    title: '姓名',
    dataIndex: 'realName',
    scopedSlots: {customRender: 'name'},
  },
  {
    title: "用户名",
    dataIndex: "userName",
    width: "",
    scopedSlots: {customRender: "userName"}
  },
  {
    title: "部门",
    dataIndex: "department",
    width: "",
    scopedSlots: {customRender: "department"}
  },
  {
    title: "职位",
    dataIndex: "level",
    width: "",
    scopedSlots: {customRender: "level"}
  },
  {
    title: '年龄',
    dataIndex: 'age',
    scopedSlots: {customRender: 'age'},
  },
  {
    title: '地址',
    dataIndex: 'address',
    scopedSlots: {customRender: 'address'},
  },
  {
    title: "电话",
    dataIndex: "phone",
    scopedSlots: {customRender: 'phone'}
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: {customRender: 'operation'},
  },
];

const dataTable = [];

var Cache = [];

export default {
  data() {
    return {
      dataTable,
      columns,
      editingKey: '',
      deletingKey:"",
      search:"",
    };
  },
  beforeCreate() {

  },
  created() {
    const param = {
      pageNum:1,
      pageSize:20
    }
    this.$api.demo.userList(param).then( res =>{
      let TmpData = res.data.list;
      for(let i=0,count=0;i<TmpData.length;i++){
        TmpData[i]['key'] = count++;
        switch (TmpData[i]['level']){
          case 0:
            TmpData[i]['level'] = "领导";
            break;
          case 1:
            TmpData[i]['level'] = "部门主管";
            break
          case 2:
            TmpData[i]['level'] = "员工";
            break;
        }
      }
      this.dataTable = TmpData;
      Cache = deepCopy(TmpData);
    })
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.dataTable]
      const target = newData.find(item => key === item.key);
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    selectChange(value,record){
      const newData = [...this.dataTable]
      const target = newData.find(item => record.key === item.key)
      if(target){
        target['level'] = value;
        this.dataTable = newData;
      }
    },
    edit(key) {
      const newData = [...this.dataTable]
      const target = newData.find(item => key === item.key);
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.dataTable = newData;
      }
    },
    InfoDelete(key){
      const target = this.dataTable.find(item => key === item.key);
      this.deletingKey = key;
      if(target){
        target.deleteable = true;
      }
    },
    save(key) {
      const newData = [...this.dataTable]
      const target = newData.find(item => key === item.key);
      const old = Cache.find(item => item.key === key)
      if (target) {
        for(let key in target){
          if(target[key]===old[key]){
            old[key] = null;
          }
          else{
            old[key] = target[key];
          }
        }
        switch (old['level']){
          case "领导":
            old['level'] = 0;
            break;
          case "部门主管":
            old['level'] = 1;
            break
          case "员工":
            old['level'] = 2;
            break;
        }
        old['userId'] = target['userId'];
        delete old['key'];
        target.editable = false;
        delete old['editable']
        this.dataTable = newData;
        this.$api.demo.update(old).then(res =>{
          if(res.code===1){
            console.log("已保存");
          }
          else{
            alert("员工信息同步失败");
          }
        })
      }
      else{

      }
      this.editingKey = '';
    },
    cancel(key) {
      const newData = [...this.dataTable];
      const target = newData.find(item => key === item.key);
      this.editingKey = '';
      this.deletingKey = '';
      if (target) {
        Object.assign(target, this.dataTable.find(item => key === item.key));
        delete target.editable;
        delete target.deleteable;
        this.dataTable = newData;
      }
      else{
        delete target.editable;
        delete target.deleteable;
      }
    },
    ondelete(key){
      const worker = this.dataTable.find(item => item.key===key);
      this.dataTable.splice(this.dataTable.findIndex(item => item.key === key), 1);
      delete worker['key']
      worker['isDisable'] = 1
      this.$api.demo.update(worker).then(res =>{
        if(res.code==1){
          console.log("删除成功");
        }
        else{
          console.log("删除失败");
        }
      })
      this.deletingKey = "";
    },
    onSearch(){
      var params = {
        userNameOrId:this.search,
        pageSize:10,
        pageNum: 1
      }
        this.$api.demo.search(params).then(res => {
          this.dataTable = res.data.list;
        })
    }
  },
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
