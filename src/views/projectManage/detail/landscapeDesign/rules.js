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
  designteam: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  gideasstrategy: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  generallayout: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  gfuncstructure: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  coredesign: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  entrydesign: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  pubspacedesign: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  roofdesign: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  sketchdesign: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  gardenadvantage: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  deficiencies: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ]
}
