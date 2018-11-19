<template>
  <div class="financ_wrap">
    <div class="mt10">
      <subject-headings :title="headTitle"></subject-headings>
    </div>
    <div class="seact_list mt15">
      <Row :gutter="14">
        <Col span="4"><Input v-model="search.value1" placeholder="融租合同编号" /></Col>
        <Col span="4"><Input v-model="search.value1" placeholder="承租人" /></Col>
        <Col span="4"><Input v-model="search.value1" placeholder="车牌" /></Col>
        <Col span="4"><Cascader :data="newArr1" trigger="hover" placeholder="品牌/系列/车型"></Cascader></Col>
        <Col span="4"><DatePicker type="datetimerange" @on-change="dataChange" placeholder="Select date and time" style="display: block;"></DatePicker></Col>
        <Col span="4">
          <Button type="primary" class="btn12">查询</Button>
          <Button type="primary">重置</Button>
        </Col>
      </Row>
    </div>
    <div class="mt15">
      <Row :gutter="14">
        <Col span="20">
          <Button type="primary" class="btn12">合同补录</Button>
          <Button type="primary" class="btn12" @click="modifier" :disabled="amendDsialabled">修改</Button>
          <Button type="primary" class="btn12">查看</Button>
          <Button type="primary" class="btn12">删除</Button>
          <Button type="primary" class="btn12">合同pdf导出</Button>
          <Button type="primary" class="btn12">月租和代理商导出</Button>
          <Button type="primary" class="btn12">月租和代理商导入</Button>
        </Col>
        <Col span="4">
          <ButtonGroup>
            <Button type="primary">
              融租合同
            </Button>
            <Button>
              准合同
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
    <div>
      <div>
        <lease-table></lease-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { insertViewParamesListPage } from '../../api/api'
import subjectHeadings from '@/components/subjectHeadings/subjectHeadings'
import leaseTable from './leaseTable/leaseTable'
export default {
  name: 'financialLease',
  components: {
    subjectHeadings,
    leaseTable
  },
  data () {
    return {
      headTitle: '融租合同',
      amendDsialabled: true,
      search: {
        value1: ''
      },
      newArr1: [],
      data1: {},
      data2: {},
      data3: {}
    }
  },
  created () {
    // init api
    this.init()
  },
  methods: {
    init () {
      this._insertViewParamesListPage()
    },
    dataChange (val) {
      console.log(val, '---val')
    },
    // 修改
    modifier () {
      // console.log(this.leaseSelectState.selection, '-----')
      // this.$router.push({name: 'amendLease'})
      if (this.leaseSelectArr.length) {
        let { idContract } = this.leaseSelectArr[0]
        this.$router.push({name: 'amendLease', params: {id: idContract}})
      }
    },
    // 品牌, 系列, 车型下拉数据
    _insertViewParamesListPage () {
      insertViewParamesListPage()
        .then(r => {
          this.datas = r
          /**
           * @var { leaseCarBrandses,  leaseCarSeries, leaseCarModels } : { 品牌, 系列, 车型 }
          */
          let { leaseCarBrandses, leaseCarSeries, leaseCarModels } = this.datas
          for (let i = 0; i < leaseCarBrandses.length; i++) {
            this.data1 = {
              value: leaseCarBrandses[i].id,
              label: leaseCarBrandses[i].name,
              children: []
            }
            this.newArr1.push(this.data1)
            for (let j = 0; j < leaseCarSeries.length; j++) {
              if (leaseCarBrandses[i].id === leaseCarSeries[j].brandsId) {
                this.data2 = {
                  value: leaseCarSeries[j].id,
                  label: leaseCarSeries[j].name,
                  children: []
                }
                this.data1.children.push(this.data2)
                for (let k = 0; k < leaseCarModels.length; k++) {
                  if (leaseCarModels[k].seriesId === leaseCarSeries[j].id) {
                    this.data3 = {
                      value: leaseCarModels[k].id,
                      label: leaseCarModels[k].completeModelName
                    }
                    this.data2.children.push(this.data3)
                  }
                }
              }
            }
          }
        })
        .catch(err => console.log(err, '11你网络不稳定'))
    }
  },
  computed: {
    ...mapState(['leaseSelectArr'])
  },
  watch: {
    // 监听选中的data,来控制修改,查看,删除按钮状态
    leaseSelectArr (val, oldVla) {
      let len = val.length
      if (len > 0 && len < 2) {
        this.amendDsialabled = false
      } else {
        this.amendDsialabled = true
      }
    }
  }
}
</script>

<style lang="scss">
.financ_wrap {
  .seact_list {
    .ivu-input {
      color: #495060 !important;
    }
  }
}
</style>
