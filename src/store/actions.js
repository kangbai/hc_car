/*
 * @Author: kangbai
 * @Date: 2018-10-22 15:15:02
 * @Last Modified by: kangbai
 * @Last Modified time: 2018-11-13 16:01:51
 */

import * as types from './mutation-types'
import { findPage, selectOrderInfo } from '../api/api'

export default {
  // 融租合同下一步
  leaseStepNext ({ commit }) {
    commit(types.LEASE_STEP_NEXT, 1)
  },

  // 融租合同上一步
  leaseStepLast ({ commit }) {
    commit(types.LEASE_STEP_LAST, 1)
  },

  // 融租合同 -- 初始表格列表数据
  getInitLeaseTabs ({ commit }) {
    return new Promise((resolve, reject) => {
      findPage()
        .then((res) => {
          commit(types.INIT_LEASE_TABLE, res)
        })
    })
  },

  // 融租合同选中的table数据
  leaseSelectTabs ({ commit }, payload) {
    commit(types.LEASE_SELECT_TABS, payload)
  },

  // 取消融租合同选中的table数据
  leaseCanealTabs ({ commit }, payload) {
    commit(types.LEASE_CANCEL_TABS, payload)
  },

  // 融租合同标准合同修改第二步
  insertParamesStep1 ({ commit }, payload) {
    commit(types.INSERT_PARAMES_STAEP1, payload)
  },

  getSelectOrderInfo ({ commit }, payload) {
    let { id } = payload
    return new Promise((resolve, reject) => {
      selectOrderInfo(id)
        .then(r => {
          commit(types.SELECT_ORDER_INFO, r)
        })
    })
  }
}
