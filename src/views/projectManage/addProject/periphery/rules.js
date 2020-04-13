import T from '@utils/tools'

const validStringLen = len => {
  return (rule, value, callback) => {
    if (value && T.getStringLen(value) > len) {
      callback(new Error(`长度不能超过${len}`))
    }
    callback()
  }
}

const validNumber = (rule, value, callback) => {
  var _reg = /^\d+(.\d{0,2})?$/
  if (!value || _reg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入最多两位小数的数字'))
  }
}

const validInt = (rule, value, callback) => {
  if (isNaN(value)) {
    callback(new Error('请输入数字'))
  } else if (value < 0 || (value + '').indexOf('.') !== -1) {
    callback(new Error('请输入正整数'))
  }
  callback()
}

export default {
  // 周边条件表单
  neardes: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  // 周边园林表单
  parkname: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  rentalrate: [
    { validator: validNumber, trigger: 'blur' }
  ],
  parkvalue: [
    { validator: validNumber, trigger: 'blur' }
  ],
  avgvalue: [
    { validator: validNumber, trigger: 'blur' }
  ],
  rentlevel: [
    { validator: validNumber, trigger: 'blur' }
  ],
  uselandarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  totalbuildarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  plotratio: [
    { validator: validNumber, trigger: 'blur' }
  ],
  employmentpeople: [
    { validator: validNumber, trigger: 'blur' }
  ],
  enterprisenum: [
    { validator: validInt, trigger: 'blur' }
  ],
  deputyenterprise: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  // 周边住宅表单
  villagename: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  housprice: [
    { validator: validNumber, trigger: 'blur' }
  ]
}
