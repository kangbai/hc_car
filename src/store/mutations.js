/*
 * @Author: kangbai
 * @Date: 2018-10-22 15:15:14
 * @Last Modified by: kangbai
 * @Last Modified time: 2018-11-13 14:01:16
 */
import * as types from './mutation-types'

const mutation = {
  // 融租合同下一步
  [types.LEASE_STEP_NEXT] (state, sum) {
    state.leaseCurrent += sum
    if (state.leaseCurrent > 4) {
      state.leaseCurrent = 4
    }
  },

  // 融租合同上一步
  [types.LEASE_STEP_LAST] (state, sum) {
    state.leaseCurrent -= sum
    if (state.leaseCurrent < 0) {
      state.leaseCurrent = 0
      state.leaseStepDisable = true
    }
  },

  //  融租合同,初始表格列表
  [types.INIT_LEASE_TABLE] (state, arr) {
    state.initLeaseTabs = arr
  },

  // 融租合同,选中当前table
  [types.LEASE_SELECT_TABS] (stata, arr) {
    stata.leaseSelectArr = arr
  },

  // 融租合同,取消选中的table
  [types.LEASE_CANCEL_TABS] (state, arr) {
    state.leaseSelectArr = arr
  },

  // 融租合同标准合同修改第二步
  [types.INSERT_PARAMES_STAEP1] (state, obj) {
    state.insertParamesStep1 = obj
  },

  // 查看融租合同
  [types.SELECT_ORDER_INFO] (state, obj) {
    state.selectOrderInfos = obj
  }
}
export default mutation
