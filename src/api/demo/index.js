import request from '../utils/request'

const demo ={
  login(params){
    return request.post('/user/login', params)
  },
  userList(params){
    return request.post(`/user/getManagedUserInfo`,{}, {params: params})
  },
  add(params){
    return request.post("/user/add",params)
  },
  update(params){
    return request.put("/user/update",params)
  },
  GetSingleAttend(params,querySet){
    return request.post("/attend/getAttendByUser",params,{params:querySet})
  },
  search(params){
    return request.post("/user/getManagedUserInfoByUserNameOrId",{},{params:params})
  }
}
export default demo

