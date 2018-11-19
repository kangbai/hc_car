import { tenantColumnsOne, leaseTablesColumns } from '../utils/tableColumns'

export default {
  gutterSize: 16, // cell单元格间隔
  leaseCurrent: 0, // 融租合同当前页数
  leaseStepDisable: false, // 融租合同上下步按钮状态
  tenantColumnsOne,
  initLeaseTabs: [], // 融租合同 -- 初始表格列表
  leaseTablesColumns, // 融租合同初始化栏目状态
  brandSeries: [],
  leaseSelectArr: [], // 融租合同,选中当前的数据
  tabsText: '目前还没有数据', // 表格数据为空默认状态
  insertParamesStep1: {}, // 融租合同修改第一步
  selectOrderInfos: {}, // 查看合同
  selectTenant: '', // 选择合租人1
  dataleaseNum: [
    {
      ID: '55sf',
      name: '阿里巴巴',
      phone: '1321231541',
      IdCard: '75574444252577x'
    },
    {
      ID: '55sf',
      name: '阿里巴巴',
      phone: '1321231541',
      IdCard: '75574444252577x'
    },
    {
      ID: '55sf',
      name: '阿里巴巴',
      phone: '1321231541',
      IdCard: '75574444252577x'
    },
    {
      ID: '55sf',
      name: '阿里巴巴',
      phone: '1321231541',
      IdCard: '75574444252577x'
    }
  ]
}
