import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from "../components/page/UserLogin";
import UserList from "../components/page/UserList";
import AddUser from "../components/page/AddUser"
import Home from "../components/common/Home"
import Register from "../components/page/Register";
import UserHome from "../components/common/UserHome";
import ManagerHome from "../components/common/ManagerHome";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path:"/register",
      name:"register",
      component:Register
    },
    {
      path:"/check",
      name:"check",
      component:Home,
      children:[
        {
          path:"/",
          name:"UserList",
          component:UserList
        },
        {
          path:"/add-user",
          name:"AddUser",
          component:AddUser
        }
      ]
    },
    {
      path:"/worker",
      name:"worker",
      component:UserHome
    },
    {
      path:"/manager",
      name:"manager",
      component:ManagerHome
    }
  ],
  mode:'history'
})

