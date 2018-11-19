<template>
  <div>
    <div class="step_one">
      <p>标题1</p>
      <div class="step_one_centent">
          <RadioGroup>
            <span v-for="(val, index) in paramesStep1Data.leaseContractBaseinfoList" :key="index" @click.stop="slectLeaseTemplate(val, index)">
              <Radio class="redis_sty"  :label="val.name">
                <span>{{val.name}}</span>
              </Radio>
            </span>
          </RadioGroup>
      </div>
      <Form ref="formValidate" :rules="ruleValidate" :model="leaseStepData1">
        <Row :gutter="gutterSize">
          <Col span="6">
            <FormItem label="所属分公司" label-position="top" prop="input">
              <Input v-model.trim="formValidate.input" placeholder="请输入"></Input>
              <!-- <Select v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select> -->
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="模板名称" label-position="top">
              <Input v-model="leaseStepData1.name" placeholder="请输入模板名称"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="出租人" label-position="top">
              <Input v-model="leaseStepData1.contractPartyName" placeholder="请输入出租人"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="出租人分公司" label-position="top">
              <Input v-model="leaseStepData1.contractBranchCompany " placeholder="请输入出租人分公司"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col span="6">
            <FormItem label="出租人住所" label-position="top">
              <Input v-model="leaseStepData1.contractPartyAdress" placeholder="请输入出租人住所"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="法定代表人/负责人" label-position="top">
              <Input v-model="leaseStepData1.legalPerson" placeholder="请输入法定代表人"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="交首款天数期限" label-position="top">
              <Input v-model="leaseStepData1.downPaymentTimeLimit" placeholder="请输入交首款天数期限"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="原件出借押金" label-position="top">
              <Input v-model="leaseStepData1.loanDeposit" placeholder="请输入原件出借押金"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col span="6">
            <FormItem label="重大事件金额" label-position="top" prop="input">
              <Input v-model="leaseStepData1.importantEventPrice" placeholder="请输入重大事件金额"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="检测定期" label-position="top">
              <Input v-model="leaseStepData1.checkTime" placeholder="请输入检测定期"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="约定区域" label-position="top">
              <Input v-model="leaseStepData1.appointArea" placeholder="请输入约定区域"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="租金逾期回收期限" label-position="top">
              <Input v-model="leaseStepData1.rentOverdueTimeLimit" placeholder="请输入租金逾期回收期限"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col :span="6">
            <FormItem label="车辆承租城市" label-position="top" prop="input">
              <Input v-model="leaseStepData1.carLesseeCity " placeholder="请输入车辆承租城市"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="市内回收费" label-position="top">
              <Input v-model="leaseStepData1.cityInsideRecoveryCost" placeholder="请输入市内回收费"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="市外回收费" label-position="top">
              <Input v-model="leaseStepData1.cityOutsideRecoveryCost" placeholder="请输入市外回收费"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="省内回收费" label-position="top">
              <Input v-model="leaseStepData1.provinceInsideRecoveryCost" placeholder="请输入省内回收费"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col :span="6">
            <FormItem label="挂靠牌照月租" label-position="top" prop="input">
              <Input v-model="leaseStepData1.licenseMonthlyRent" placeholder="请输入挂靠牌照月租"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="出租人联系地址1" label-position="top">
              <Input v-model="contractPartyContactAddress[0].address" placeholder="请输入出租人联系地址1"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="出租人联系地址2" label-position="top">
              <Input v-model="contractPartyContactAddress[1].address" placeholder="请输入出租人联系地址2"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="出租人联系地址3" label-position="top">
              <Input v-model="contractPartyContactAddress[2].address" placeholder="请输入出租人联系地址3"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col :span="6">
            <FormItem label="出租人联系地址4" label-position="top" prop="input">
              <Input v-model="contractPartyContactAddress[3].address" placeholder="请输入出租人联系地址4"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="出租人联系地址5" label-position="top">
              <Input v-model="contractPartyContactAddress[4].address" placeholder="请输入出租人联系地址5"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="出租人联系地址6" label-position="top">
              <Input v-model="contractPartyContactAddress[5].address" placeholder="请输入出租人联系地址6"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="出租人联系地址7" label-position="top">
              <Input v-model="contractPartyContactAddress[6].address" placeholder="请输入出租人联系地址7"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col :span="6">
            <FormItem label="出租人联系地址8" label-position="top" prop="input">
              <Input v-model="contractPartyContactAddress[7].address" placeholder="请输入出租人联系地址8"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="出租人联系地址9" label-position="top">
              <Input v-model="contractPartyContactAddress[8].address" placeholder="请输入出租人联系地址9"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="出租人联系地址10" label-position="top">
              <Input v-model="contractPartyContactAddress[9].address" placeholder="请输入出租人联系地址10"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="户名" label-position="top">
              <Input v-model="leaseStepData1.bankAccountName" placeholder="请输入户名"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col :span="6">
            <FormItem label="开户行" label-position="top" prop="input">
              <Select v-model="leaseStepData1.bankId" clearable>
                  <Option v-for="(item, index) in bankOfDeposit" :value="item.id" :key="index">{{ item.name }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="开户行支行" label-position="top">
              <Input v-model="leaseStepData1.branchBank" placeholder="请输入开户行支行"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="账号" label-position="top">
              <Input v-model="leaseStepData1.account" placeholder="请输入账号"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="提前还款罚息金额" label-position="top">
              <Select v-model="leaseStepData1.defaultInterest" clearable>
                <Option v-for="(item, index) in leaseRuleList" :value="item.id" :key="index">{{ item.name }}</Option>
            </Select>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col :span="6">
            <FormItem label="备注" label-position="top">
              <Input v-model="leaseStepData1.input" type="textarea" placeholder="请输入备注内容" :autosize="{minRows: 5,maxRows: 20}" />
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col :span="6">
            <FormItem label="被授权人" label-position="top" prop="input">
              <Input v-model="leaseStepData1.authorizedPerson " placeholder="请输入被授权人"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="甲方" label-position="top">
              <Input v-model="leaseStepData1.partyA" placeholder="请输入甲方"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="乙方" label-position="top">
              <Input v-model="leaseStepData1.partyB" placeholder="请输入乙方"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="丙方" label-position="top">
              <Input v-model="leaseStepData1.partyC" placeholder="请输入丙方"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="gutterSize">
          <Col :span="6">
            <FormItem label="借款担保人" label-position="top" prop="input">
              <Input v-model="leaseStepData1.loanGuarantor " placeholder="请输入"></Input>
            </FormItem>
          </Col>
          <Col :span="6">
            <FormItem label="担保人" label-position="top">
              <Input v-model="leaseStepData1.guarantor" placeholder="请输入"></Input>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { insertViewParamesStep1, leaseBankFindAll } from '../../../api/api'
export default {
  name: 'stepOne',
  data () {
    return {
      /**
       * paramesStep1Data attribute name {, 提前还款罚息金额,合同模板}
       * @attribute { leaseBranchCompanyList, leaseRuleList, leaseContractBaseinfoList }
      */
      paramesStep1Data: {}, // 第一步默认data
      leaseStepData1: {},
      bankOfDeposit: [], // 开户行
      bankId: '', // 开户行ID
      leaseContractBaseinfoList: [],
      leaseRuleList: [], // 提前还款罚息金额
      // 出租人联系地址
      contractPartyContactAddress: [
        {address: ''},
        {address: ''},
        {address: ''},
        {address: ''},
        {address: ''},
        {address: ''},
        {address: ''},
        {address: ''},
        {address: ''},
        {address: ''}
      ],
      formValidate: {
        input: '',
        model7: ''
      },
      ruleValidate: {
        input: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ]
      }
    }
  },
  beforeCreate () {
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this._insertViewParamesStep1()
      this._leaseBankFindAll()
    },
    // 加载第一步data
    _insertViewParamesStep1 () {
      insertViewParamesStep1()
        .then(r => {
          if (r) {
            this.paramesStep1Data = r
            this.leaseRuleList = r.leaseRuleList
            // 判断是否在修改页面
            if (this.$route.path.indexOf('amendLease')) {
              let defaultStep1 = this.paramesStep1Data.leaseContractBaseinfoList[0]
              this.$store.dispatch('insertParamesStep1', defaultStep1)
            }
          }
        })
    },
    // 开户行
    _leaseBankFindAll () {
      leaseBankFindAll()
        .then(r => {
          this.bankOfDeposit = r
        })
    },
    // 选择融租合同模板
    slectLeaseTemplate (val, index) {
      if (val) {
        this.$store.dispatch('insertParamesStep1', val)
      }
    }
  },
  computed: {
    ...mapState(['gutterSize', 'insertParamesStep1'])
  },
  watch: {
    insertParamesStep1 (val, oldVal) {
      this.leaseStepData1 = val
      let {contractPartyContactAddress} = val
      let initStepAddress = JSON.parse(contractPartyContactAddress)
      this.contractPartyContactAddress = [
        ...initStepAddress
      ]
      for (let i = 0; i < (10 - (initStepAddress.length - 1)); i++) {
        let obj = {address: ''}
        this.contractPartyContactAddress.push(obj)
      }
    }
  }
}
</script>

<style>
.redis_sty {
  margin: 8px 7px 0;
}
.step_one_centent {
  padding-bottom: 20px;
  border-bottom: 2px dashed #ddd;
  margin-bottom: 5px;
}
</style>
