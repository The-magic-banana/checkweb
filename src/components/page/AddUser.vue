<template>
  <a-layout style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>添加员工</a-breadcrumb-item>
    </a-breadcrumb>
    <a-form :form="form" @submit="handleSubmit" :style="{ background: '#fff', padding: '24px', marginLeft:'200px',marginRight:'200px', minHeight: '200px',width:'700px'}">
      <a-form-item v-bind="formItemLayout">
      <span slot="label">
        昵称&nbsp;
        <a-tooltip title="你希望别人怎么称呼你？">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
        <a-input
          v-decorator="[
          'userName',
          {
            rules: [{ required: true, message: '请输入昵称', whitespace: true }],
          },
        ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout">
      <span slot="label">
        员工姓名&nbsp;
      </span>
        <a-input
          v-decorator="[
          'realName',
          {
            rules: [{ required: true, message: '请输入姓名', whitespace: true }],
          },
        ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="员工ID">
        <a-input v-decorator="['userId',{rules:[{type:'string',message:'请输入数字'},{required:true,message:'请输入员工ID'}]}]">
        </a-input>
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="职位">
        <a-input
          v-decorator="[
          'level',
          {
            rules: [
              {
                type: 'string',
                message: '请输入数字',
              },
              {
                required: true,
                message: '请输入职位等级',
              },
            ],
          },
        ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
        <a-input
          v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '请输入密码',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
          type="password"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
        <a-input
          v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: '请确认密码',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="住址">
        <a-input v-decorator="[
          'address',
          {
            rules: [{ required: true, message: '请输入住址' }],
          },
        ]"></a-input>
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="手机">
        <a-input
          v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: '请输入手机号' }],
          },
        ]"
          style="width: 100%"
        >
        </a-input>
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="照片">
        <a-input type="file" v-decorator="['photo',{rules:[{required:true,message:'请上传照片'}]}]"></a-input>
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit">
          添加
        </a-button>
      </a-form-item>
    </a-form>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'add' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('表单数据: ', values);
          // console.log(typeof this.form);
          this.$api.demo.add(this.form).then(res=>{
            if(res.code==1){
              this.$router.push({name:"UserList"})
            }
            else{
              alert("添加用户失败")
            }
          })
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('您两次输入的密码不一致');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
  },
};
</script>
19884194731
