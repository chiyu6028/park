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
  parkvalue: [
    { validator: validNumber, trigger: 'blur' }
  ],
  avgvalue: [
    { validator: validNumber, trigger: 'blur' }
  ],
  employmentpeople: [
    { validator: validNumber, trigger: 'blur' }
  ],
  devotetax: [
    { validator: validNumber, trigger: 'blur' }
  ],
  knowledgeproperty: [
    { validator: validInt, trigger: 'blur' }
  ],
  leasenature: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  leaseproportion: [
    { validator: validNumber, trigger: 'blur' }
  ],
  propertyfee: [
    { validator: validNumber, trigger: 'blur' }
  ],
  sellprice: [
    { validator: validNumber, trigger: 'blur' }
  ],
  sellarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  rentlevel: [
    { validator: validNumber, trigger: 'blur' }
  ],
  leasedarea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  surplusleasearea: [
    { validator: validNumber, trigger: 'blur' }
  ],
  rentalrate: [
    { validator: validNumber, trigger: 'blur' }
  ],
  enterprisenum: [
    { validator: validInt, trigger: 'blur' }
  ],
  nhenterprisenum: [
    { validator: validInt, trigger: 'blur' }
  ],
  rdorg: [
    { validator: validInt, trigger: 'blur' }
  ],
  investors: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  landmethod: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  investorattr: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  investmentmode: [
    { validator: validNumber, trigger: 'blur' }
  ],
  investteam: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  investstrategy: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  operubject: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  operteam: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  favouredpolicy: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  witplatform: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  parkservice: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  opercost: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  operprofit: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  businessfacilities: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  accommodations: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  conferencehall: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  publicfacilities: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  investadvantage: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ],
  deficiencies: [
    { validator: validStringLen(1000), trigger: 'blur' }
  ]
}
