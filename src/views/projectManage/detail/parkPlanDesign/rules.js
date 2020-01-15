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
  usetype: [
    { required: true, message: '请输入园区名称', trigger: 'blur' }
  ],
  nearproject: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  designteam: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  designidea: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  funcstructure: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  landuse: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  spatialform: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  roadtraffic: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  supportingfacilities: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  impcontrol: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  planadvantage: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  deficiencies: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ]
}
