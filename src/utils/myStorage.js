/*
 * @Author: kangbai
 * @Date: 2018-10-31 10:15:23
 * @Last Modified by: kangbai
 * @Last Modified time: 2018-10-31 10:16:50
 */

const mystorage = (function mystorage () {
  var ms = 'mystorage'
  var storage = window.localStorage
  if (!window.localStorage) {
    alert('浏览器支持localstorage')
    return false
  }
  var set = function (key, value) {
    // 存储
    var mydata = storage.getItem(ms)
    if (!mydata) {
      this.init()
      mydata = storage.getItem(ms)
    }
    mydata = JSON.parse(mydata)
    mydata.data[key] = value
    storage.setItem(ms, JSON.stringify(mydata))
    return mydata.data
  }
  var get = function (key) {
    // 读取
    var mydata = storage.getItem(ms)
    if (!mydata) {
      return false
    }
    mydata = JSON.parse(mydata)
    return mydata.data[key]
  }
  var remove = function (key) {
    // 读取
    var mydata = storage.getItem(ms)
    if (!mydata) {
      return false
    }
    mydata = JSON.parse(mydata)
    delete mydata.data[key]
    storage.setItem(ms, JSON.stringify(mydata))
    return mydata.data
  }
  var clear = function () {
    // 清除对象
    storage.removeItem(ms)
  }
  var init = function () {
    storage.setItem(ms, '{"data":{}}')
  }
  return {
    set: set,
    get: get,
    remove: remove,
    init: init,
    clear: clear
  }
})()

// console.log(mystorage.set('tqtest', 'tqtestcontent')) // 存储
// console.log(mystorage.set('tqtest1', 'newtqtestcontent1')) // 修改
// console.log(mystorage.get('tqtest')) // 读取
// console.log(mystorage.remove('tqtest')) // 删除
// mystorage.clear() // 整体清除
export default mystorage
