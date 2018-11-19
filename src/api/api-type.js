/*
 * @Author: kangbai
 * @Date: 2018-10-31 17:54:15
 * @Last Modified by: kangbai
 * @Last Modified time: 2018-11-13 11:05:51
 */

/**
 * api接口字段类型
*/

const apiType = {
  // 登录
  accountLogin: '/admin_public/leaseUser/accountLogin',
  // 融租合同 -- 初始化 -- 品牌/系列/车型
  insertViewParamesListPage: '/admin/leaseContract/insertViewParamesListPage',
  // 融租合同 -- 初始化 -- 表格
  findPage: '/admin/leaseContract/findPage',
  // 融租合同,第一步
  insertViewParamesStep1: '/admin/leaseContract/insertViewParamesStep1',
  // 开户行
  leaseBankFindAll: '/admin/leaseBank/findAll',
  // 融租合同,第二步
  insertViewParamesStep2: '/admin/leaseContract/insertViewParamesStep2',
  // 查询承租人
  selectAccountInfo: '/admin/leaseContract/selectAccountInfo',
  // 查看融租合同信息
  selectOrderInfo: '/admin/leaseContract/selectOrderInfo'
}

export default apiType
