const nameSpace = ''

const dataService = {
  // 登录页面
  'LOGIN': `${nameSpace}/login`,
  // 上传附件
  'UPLOAD': `${nameSpace}/uploadFile`,
  'UPDATE_FILEDES': `${nameSpace}/updateFileDes`,
  // 添加项目
  'GET_PARK_PROJECTID': `${nameSpace}/getParkProjectId`,
  'GET_SELECT_AREA': `${nameSpace}/selectArea`,
  'INSERT_PROJECT_BASE': `${nameSpace}/insertProjectBase`,
  'INSERT_INVEST_OPERATE': `${nameSpace}/insertInvestOperate`,
  'INSERT_INDUSTRIAL_PLAN': `${nameSpace}/insertIndustrialPlan`,
  'INSERT_PLAN_DESIGN': `${nameSpace}/insertPlanDesign`,
  'INSERT_BUILD_DESIGN': `${nameSpace}/insertBuildDesign`,
  'INSERT_GARDEN_DESIGN': `${nameSpace}/insertGardenDesign`,
  'INSERT_SCHEME_MATERIAL': `${nameSpace}/insertSchemeMaterial`,
  'INSERT_NEAR_CONDITION': `${nameSpace}/insertNearCondition`,
  'UPDATE_PROJECT_BASE_STATUS': `${nameSpace}/updateProjectBaseStatus`,
  // 项目列表 和草稿箱
  'SELECT_PARK_INFO': `${nameSpace}/selectParkInfo`,
  'DELETE_PROJECT_BASE': `${nameSpace}/deleteProjectBase`
}

export default { ...dataService }
