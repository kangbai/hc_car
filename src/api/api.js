/*
 * @Author: kangbai
 * @Date: 2018-10-31 17:51:09
 * @Last Modified by: kangbai
 * @Last Modified time: 2018-11-13 15:59:12
 */

import apiType from './api-type'
// import VueRouter from 'vue-router'
// import mystroage from '../utils/myStorage'
import adminServer from './axiosCode'

/**
 * 提交参数过滤
 * @param {Object} obj
 * @return obj
*/
const formDataFilter = (obj) => {
  if (!obj) {
    return obj
  }
  for (let i in obj) {
    if (obj[i] === '') {
      delete obj[i]
    }
  }
  return obj
}

function errorTip (e) {
  return console.log(e, '-你的网络不稳定')
}

/**
 * 登录接口 -- 提交参数
 * @param {Object} formData [deviceId] 设备ID [password] 用户密码 [phone] 用户账号
*/
export const accountLogin = (formData) => {
  return adminServer.post(apiType.accountLogin, {
    ...formDataFilter(formData)
  })
    .then(r => r)
    .catch(e => errorTip(e))
}

/**
 * 融租合同 -- 品牌/系列/车型 接口初始化
*/
export const insertViewParamesListPage = (formData) => {
  return adminServer.get(apiType.insertViewParamesListPage, {
    params: { ...formDataFilter(formData) }
  })
    .then(r => r)
    .catch(e => errorTip(e))
}

/**
 * 融租合同 -- table数据列表
*/
export const findPage = () => {
  // console.log(formData, '---sss')
  // const formData = formData
  return adminServer.get(apiType.findPage, {
    params: { contractType: 1 }
  })
    .then(r => r)
    .catch(e => errorTip(e))
}

// 融租合同第一步
export const insertViewParamesStep1 = () => {
  return adminServer.get(apiType.insertViewParamesStep1, {})
    .then(r => r)
    .catch(e => errorTip(e))
}

// 开户行
export const leaseBankFindAll = () => {
  return adminServer.get(apiType.leaseBankFindAll)
    .then(r => r)
    .catch(e => errorTip(e))
}

// 融租合同,选择承租人
export const selectAccountInfo = (obj) => {
  return adminServer.get(apiType.selectAccountInfo, {
    params: {
      ...obj
    }
  })
    .then(r => r)
    .catch(e => errorTip(e))
}

// 查询融租合同信息
export const selectOrderInfo = (id) => {
  return adminServer.get(apiType.selectOrderInfo, {params: {contractId: id}})
    .then(r => r)
    .catch(e => errorTip(e))
}
