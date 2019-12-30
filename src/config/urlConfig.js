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
  // 查询园区概况
  'SELECT_PROJECT_BASE_INFO': `${nameSpace}/selectProjectBaseById`,
  // 投资运营
  'SELECT_INVERST_OPERATE_INFO': `${nameSpace}/selectInvestOperateById`,
  // 产业规划
  'SELECT_INDUSTRIAL_PLAN_INFO': `${nameSpace}/selectIndustrialPlanInfoById`,
  // 规划设计
  'SELECT_PLAN_DESIGN_INFO': `${nameSpace}/selectPlanDesignById`,
  // 建筑设计
  'SELECT_BUILD_DESIGN_INFO': `${nameSpace}/selectBuildDesignById`,
  // 景观设计
  'SELECT_GARDEN_DESIGN_INFO': `${nameSpace}/selectGardenDesignById`,
  // 周边条件
  'SELECT_NEAR_CONDITION_INFO': `${nameSpace}/selectNearConditionById`,
  // 周边园区
  'SELECT_NEAR_GARDEN_INFO': `${nameSpace}/selectNearGardenById`,
  // 周边小区
  'SELECT_NEAR_HOUSE_INFO': `${nameSpace}/selectNearHouseById`,
  // 方案资料
  'SELECT_SCHEMEMATER_MATER_INFO': `${nameSpace}/selectSchemeMaterialById`,
  // 项目列表 和草稿箱
  'SELECT_PARK_INFO': `${nameSpace}/selectParkInfo`,
  'DELETE_PROJECT_BASE': `${nameSpace}/deleteProjectBase`
}

export default { ...dataService }
