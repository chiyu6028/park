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
  usearea: [
    { required: true, message: '请输入用地面积', trigger: 'blur' },
    { validator: validNumber, trigger: 'blur' }
  ],
  buildarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  meterbuildarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  plotratio: [
    { validator: validNumber, trigger: 'blur' }
  ],
  builddensity: [
    { validator: validNumber, trigger: 'blur' }
  ],
  overheadarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  undergroundarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  greenrate: [
    { validator: validNumber, trigger: 'blur' }
  ],
  parkspaceup: [
    { validator: validInt, trigger: 'blur' }
  ],
  parkspacedown: [
    { validator: validInt, trigger: 'blur' }
  ],
  buildteam: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  ideasstrategy: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  neardes: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  designsketch: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  generallayout: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  funclayout: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  streamlineanalysis: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  curtain: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  structure: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  electromechanical: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  hvac: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  drainage: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  designadvantage: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  deficiencies: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  devarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  workarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  factoryarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  busarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  flatsarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  matarea: [
    { validator: validNumber, trigger: 'blur' }
  ]
}
