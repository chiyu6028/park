const rules = {
  account: [
    { type: 'string', required: true, message: '请输入账户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value && value.length < 6) { return callback(new Error('密码的长度必须大于6位')) }
        callback()
      },
      trigger: 'blur'
    }
  ]
}

export default {
  rules
}
