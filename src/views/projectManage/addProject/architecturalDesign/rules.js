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
  if (isNaN(value)) {
    callback(new Error('请输入数字'))
  }
  callback()
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
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  ideasstrategy: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  neardes: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  designsketch: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  generallayout: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  funclayout: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  streamlineanalysis: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  curtain: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  structure: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  electromechanical: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  hvac: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  drainage: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  designadvantage: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  deficiencies: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ]
}
