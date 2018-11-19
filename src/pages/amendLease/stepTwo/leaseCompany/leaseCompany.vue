<template>
  <div>
    <div class="mt15">
      <h5 class="slect_teact">选择承承租人公司<span>*</span></h5>
      <Input v-model="companyTenant" search enter-button="搜索" class="seach_wh" placeholder="请输入承租人二" @on-search="selectTentant()" />
    </div>
    <hint-template :text="tipText"></hint-template>
    <div class="mt15">
      <div v-if="isTable">
        <div class="mt15">
          <Table
            :columns="tenantTable"
            :data="tenantData.slice((tenantPageCurrent - 1) * tenantPageSize, tenantPageCurrent * tenantPageSize)"
            size="small"
            ref="table"
            @on-row-dblclick="tenantDetails">
          </Table>
        </div>
         <div class="pages_ct"><span>共<strong>{{tenantData.length}}</strong>条</span>
         <Page
          :total="tenantData.length"
          :page-size="tenantPageSize"
          @on-change="tentantChangePage"
          show-elevator
          @on-page-size-change="tentantNowChangePage"
           /></div>
      </div>
      <div v-else>
        <!-- <table-details :detailsData="tenantDetailsDate"></table-details> -->
        <ul class="Ten_dets">
          <li>
            <dl><dt>承租公司</dt><dd>{{tenantDetailsDate.companyName}}</dd></dl>
          </li>
          <li>
            <dl><dt>统一社会信用代码</dt><dd>{{tenantDetailsDate.backCardNumber}}</dd></dl>
          </li>
          <li>
            <dl><dt>联系人姓名</dt><dd>{{tenantDetailsDate.contactsName}}</dd></dl>
          </li>
          <li>
            <dl><dt>手机</dt><dd>{{tenantDetailsDate.phone}}</dd></dl>
          </li>
        </ul>
        <Button type="primary" @click="getBackTable()">返回</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { selectAccountInfo } from '../../../../api/api'
import hintTemplate from '@/components/hintTemplate/hintTemplate'
export default {
  components: {
    hintTemplate
  },
  data () {
    return {
      tenant2: '',
      companyTenant: '',
      tipText: '双击可查看详情',
      tenantDetailsDate: {},
      tenantData: [],
      tenantPageSize: 10,
      tenantPageCurrent: 1,
      isTable: 1,
      // 选择承租人表头
      tenantTable: [
        {
          title: '司机ID',
          key: 'id'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '手机',
          key: 'phone'
        },
        {
          title: '身份证号码',
          key: 'idCard'
        }
      ]
    }
  },
  methods: {
    selectTentant () {
      let obj = {
        key: this.companyTenant,
        type: 1
      }
      this._selectAccountInfo(obj)
        .then(r => {
          this.tenantData = r
        })
    },
    // 选择合租人数据
    _selectAccountInfo (obj) {
      return selectAccountInfo(obj)
        .then(r => r)
        .catch(e => console.log(e, '---errrs'))
    },
    // 点击切换
    tentantChangePage (index) {
      this.tenantPageCurrent = index
    },
    // 返回表格状态
    getBackTable () {
      this.isTable = 1
    },
    tenantDetails (index) {
      console.log(index, '---sss')
      this.isTable = 0
      if (!this.isTable) {
        this.tenantDetailsDate = index
      }
    },
    tentantNowChangePage (index) {
      this.tenant1PageSize = index
    }
  }
}
</script>

<style>

</style>
