<template>
  <a-layout id="components-layout-demo-top-side-2">
    <v-head></v-head>
    <a-layout>
      <v-sidebar></v-sidebar>
      <a-table :columns="columns" :data-source="data" style="width: 100%">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> 用户ID</span>
        <span slot="status" slot-scope="status">
      <a-tag
        v-for="statu in status"
        :key="statu"
        :color="statu >= 4 ? 'volcano' : statu >1 ? 'geekblue' : 'green'"
      >
        {{ statu.toUpperCase() }}
      </a-tag>
    </span>
        <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
      </a-table>
    </a-layout>
  </a-layout>
</template>

<script>

const columns = [
  {
    dataIndex: 'username',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '考勤ID',
    dataIndex: 'attendId',
    key: 'attendId',
  },
  {
    title: '时间',
    dataIndex: 'day',
    key: 'time',
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

// const data = [
//   {
//     // key: '1',
//     username: 'John Brown',
//     attendId: 32,
//     day: 'New York No. 1 Lake Park',
//     status: ['nice', 'developer'],
//   },
//   {
//     // key: '2',
//     name: 'Jim Green',
//     attendId: 42,
//     day: 'London No. 1 Lake Park',
//     status: ['loser'],
//   },
//   {
//     // key: '3',
//     name: 'Joe Black',
//     attendId: 32,
//     day: 'Sidney No. 1 Lake Park',
//     status: ['cool', 'teacher'],
//   },
// ];
import vHead from "./Header"
import vSidebar from "./UserSideBar"
export default {
  name: "UserHome",
  created() {
    var querySet = {
      pageNum:1,
      pageSize:10
    }
    this.$api.demo.GetSingleAttend({
      "days":1,
      "userId":parseInt(localStorage.getItem("userId")),

    },querySet).then(({ result }) => {
      this.data = result.data.list;
    });
  },
  data(){
    return {
      data,
      columns
    }
  },
  components:{
    vHead,
    vSidebar
  }
}
</script>

<style scoped>

</style>
