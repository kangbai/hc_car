// 生产环境使用路由懒加载
module.exports = file => () => import('@/pagess/' + file + '.vue')
