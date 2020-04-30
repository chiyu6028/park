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
  planconcept: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  planlocation: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  depgoal: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  industrysystem: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  formatcomposition: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  deppath: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  deppolicy: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  depteam: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  location: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  planadvantage: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ],
  deficiencies: [
    { validator: validStringLen(5000), trigger: 'blur' }
  ]
}
