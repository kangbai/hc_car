<template>
  <div class="leas_per_wrap">
    <div class="mt15">
      <h5 class="slect_teact">选择承租人一<span>*</span></h5>
      <p><Input v-model="tenant1" search enter-button="搜索" class="seach_wh" placeholder="请输入承租人一" @on-search="SelectTenantSeach()" /></p>
    </div>
    <hint-template :text="tipText"></hint-template>
    <div class="mt15">
      <div v-if="isTable1">
        <div class="mt15">
          <Table
            :columns="tenantTable"
            :data="tenant1Data.slice((tenant1PageCurrent - 1) * tenant1PageSize, tenant1PageCurrent * tenant1PageSize)"
            size="small"
            ref="table"
            @on-row-dblclick="tenantDetails1">
            </Table>
        </div>
         <div class="pages_ct"><span>共<strong>{{tenant1Data.length}}</strong>条</span>
         <Page
          :total="tenant1Data.length"
          :page-size="tenant1PageSize"
          @on-change="tentantChangePage1"
          show-elevator
          @on-page-size-change="tentantNowChangePage1"
           /></div>
      </div>
      <div v-else>
        <table-details :detailsData="tenantDetailsDate1"></table-details>
        <Button type="primary" @click="getBackTable()">返回</Button>
      </div>
    </div>
    <div class="mt15">
      <h5 class="slect_teact">选择承租人二<span>*</span></h5>
      <Input v-model="tenant2" search enter-button="搜索" class="seach_wh" placeholder="请输入承租人二" @on-search="selectTentant2()" />
    </div>
    <hint-template :text="tipText"></hint-template>
    <div class="mt15">
      <div v-if="isTable2">
        <div class="mt15">
          <Table :columns="tenantColumnsOne"
            :data="tenant2Data.slice((tenant2PageCurrent - 1) * tenant2PageSize, tenant2PageCurrent * tenant2PageSize)"
            size="small" ref="table"
            @on-row-dblclick="tenantDetails2"
            >
          </Table>
        </div>
         <div class="pages_ct"><span>共<strong>{{tenant2Data.length}}</strong>条</span>
          <Page :total="tenant2Data.length"
            show-elevator
            @on-change="tentantChangePage2"
            @on-page-size-change="tentantNowChangePage2"/>
          </div>
      </div>
      <div v-else>
        <table-details :detailsData="tenantDetailsDate2"></table-details>
        <Button type="primary" @click="getBackTable()">返回</Button>
      </div>
    </div>
    <div class="mt15">
      单
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { selectAccountInfo } from '../../../../api/api'
import hintTemplate from '@/components/hintTemplate/hintTemplate'
import tableDetails from '@/components/tableDetails/tableDetails'
export default {
  components: {
    hintTemplate,
    tableDetails
  },
  data () {
    return {
      tenant1: '',
      tenant2: '',
      tipText: '双击可查看详情',
      isTable1: 1,
      isTable2: 1,
      tenantDetailsDate1: {},
      tenantDetailsDate2: {},
      tenant1Data: [], // 选择承租人一数据
      tenant2Data: [], // 选择承租人二数据
      tenant1PageSize: 10, // 选择承租人一每页页条数
      tenant1PageCurrent: 1, // 选择承租人当前页
      tenant2PageCurrent: 1, // 选择承租人二当前页
      tenant2PageSize: 10, // 选择承租人二每页页条数
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
    SelectTenantSeach () {
      // this.tenant1
      let obj = {
        keyParams: this.tenant1,
        type: 0
      }
      this._selectAccountInfo(obj)
        .then(r => {
          this.tenant1Data = r
        })
    },
    /**
     * this.isTable
     * @param {Object} index 当前行数据
     * @State 1: 显示表格状态 0: 字段详情状态
    */
    tenantDetails1 (index) {
      console.log(index, '---sss')
      this.isTable1 = 0
      if (!this.isTable1) {
        this.tenantDetailsDate1 = index
      }
    },
    tenantDetails2 (index) {
      console.log(index, '---sss')
      this.isTable2 = 0
      if (!this.isTable2) {
        this.tenantDetailsDate2 = index
      }
    },
    // 选择合租人数据
    _selectAccountInfo (obj) {
      return selectAccountInfo(obj)
        .then(r => r)
        .catch(e => console.log(e, '---errrs'))
    },
    // 点击切换
    tentantChangePage1 (index) {
      this.tenant1PageCurrent = index
    },
    tentantNowChangePage1 (index) {
      this.tenant1PageSize = index
    },
    tentantChangePage2 (index) {
      this.tenant2PageCurrent = index
    },
    tentantNowChangePage2 (index) {
      this.tenant2PageSize = index
    },
    selectTentant2 () {
      let obj = {
        keyParams: this.tenant2,
        type: 0
      }
      this._selectAccountInfo(obj)
        .then(r => {
          this.tenant2Data = r
        })
    },
    // 返回表格状态
    getBackTable1 () {
      this.isTable1 = 1
    },
    getBackTable2 () {
      this.isTable2 = 1
    }
  },
  computed: {
    ...mapState(['columns', 'datas', 'tenantColumnsOne', 'dataleaseNum'])
  }
}
</script>

<style lang="scss">
.leas_per_wrap {
  .slect_teact {
    color: #000;
    font-size: 16px;
    margin-bottom: 8px;
    span {
      color: #e4393c;
      margin-left: 4px;
    }
  }
}

.pages_ct {
  display: flex;
  align-items: center;
  span {
    margin-right: 8px;
    strong {
      color: #57a3f3;
      margin: 0 5px;
    }
  }
}

.Ten_dets {
  display: flex;
  li {
    flex: 1;
    dl {
      margin-bottom: 13px;
      dt {
        color: #999;
      }
      dd {
        color: #333;
      }
    }
  }
}

.seach_wh {
  max-width: 400px;
}

</style>
