/*
 * @Author: kangbai
 * @Date: 2018-10-31 17:53:36
 * @Last Modified by: kangbai
 * @Last Modified time: 2018-11-12 17:36:18
 */
import axios from 'axios'
import md5 from 'js-md5'
import { Modal } from 'iview'
// import apiType from './api-type'
import VueRouter from 'vue-router'
import mystroage from '../utils/myStorage'

// var router = new VueRouter()
const adminServer = axios.create({
  baseURL: process.env.ADMIN_SERVER,
  timeout: 60000,
  withCredentials: true // 是否能带cookik这些
})

adminServer.interceptors.request.use(function (config) {
  // 如果用户继续在用这里接口, 那么要把之前的token清除掉
  // if (config.url.indexOf('accountLogin') > -1) {
  //   mystroage.clear()
  // }
  // 如果有token
  if (mystroage.get('myData')) {
    let { deviceId, token, date } = mystroage.get('myData')
    config.headers.common['timestamp'] = date
    config.headers.common['deviceId'] = deviceId
    config.headers.common['signature'] = md5(token + date + deviceId)

    // token 过期时间
    const tokenDate = date + 7200000
    const currDate = +new Date()
    if (currDate > tokenDate) {
      mystroage.clear()
      Modal.warning({
        title: '提示',
        content: '登录已过期请重新登录',
        onOk: () => {
          // router.push({path: '/login'})
          window.location.href = '/login'
          // self.$router.push({name: 'login'})
        }
      })
    }
  }
  return config
}, function (error) {
  console.log(error, 'error')
  return Promise.reject(error, 'error')
})

/**
 *  @return {Object} res.data
*/
adminServer.interceptors.response.use(function (res) {
  // Spin.show()
  // setTimeout(() => {
  //   Spin.hide()
  // }, 500)
  if (res.status === 200) {
    if (!res.data.error && mystroage.get('myData')) {
      return res.data.result
    }
    return res.data
  }
  if (res.status === 401) {
    alert('你的没有权限')
    VueRouter.push({
      path: './login'
    })
  }
  return res
}, function (error) {
  console.log(error, '--axiosCode.js--81--line--你的网络不稳定')
  return Promise.reject(error)
})

export default adminServer
