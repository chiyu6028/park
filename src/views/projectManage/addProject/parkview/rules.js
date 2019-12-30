import T from '@utils/tools'

const validStringLen = len => {
  return (rule, value, callback) => {
    if (value && T.getStringLen(value) > len) {
      callback(new Error(`长度不能超过${len}`))
    }
    callback()
  }
}

export default {
  parkname: [
    { required: true, message: '请输入园区名称', trigger: 'blur' },
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  parktype: [
    { required: true, message: '请输入园区类型', trigger: 'blur' }
  ],
  parkdes: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  landscope: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  generallayout: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  realphotos: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  parkhonor: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ]
}
