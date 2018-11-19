/*
 * @Author: kangbai
 * @Date: 2018-10-22 15:12:35
 * @Last Modified by: kangbai
 * @Last Modified time: 2018-10-31 17:50:50
 */

/*
 *  initial state
 */
import initialState from './initialState'

const state = {
  ...initialState,
  columns: [
    {
      type: 'selection',
      width: 60,
      align: 'center',
      fixed: 'left'
    },
    {
      title: '承租人',
      width: 200,
      key: 'tenant'
    },
    {
      title: '联系手机',
      width: 200,
      key: 'phone'
    },
    {
      title: '扣款日',
      width: 300,
      key: 'deductionDate'
    },
    {
      title: '期数',
      width: 300,
      key: 'periods'
    },
    {
      title: '月租 / 挂靠',
      width: 300,
      key: 'monthlyAffili'
    },
    {
      title: '代理商',
      width: 300,
      key: 'agent'
    },
    {
      title: '身份证号码',
      width: 300,
      key: 'idCard'
    },
    {
      title: '银行代码',
      width: 300,
      key: 'swiftCode'
    },
    {
      title: '承租人还款银行账号',
      width: 300,
      key: 'renterBankAccount'
    },
    {
      title: '车牌',
      width: 300,
      key: 'plateNumber'
    },
    {
      title: '租赁起始日期',
      width: 300,
      key: 'LeaseCommencementDate'
    },
    {
      title: '租赁结束日期',
      width: 300,
      key: 'endDateOfLease'
    }
  ],
  datas: [
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '25',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '25',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    },
    {
      tenant: 'John Brown',
      phone: '1521542',
      deductionDate: '5',
      periods: '6',
      monthlyAffili: '2s5',
      agent: '北京',
      idCard: '452148745878248765x',
      swiftCode: 101,
      renterBankAccount: '10245eES',
      plateNumber: 'E2554:粤',
      LeaseCommencementDate: '2018/11/1',
      endDateOfLease: '2018/12/5'
    }
  ]
}

export default state
