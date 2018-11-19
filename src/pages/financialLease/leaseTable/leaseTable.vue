<template>
  <div>
    <Table
      ref="selection"
      class="default"
      border :columns="leaseTablesColumns"
      :data="initLeaseTabs.list"
      :no-data-text="tabsText"
      @on-select="selctCurrent"
      @on-select-cancel="cancelSelct"
      ></Table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    // 初始当前页面状态
    init () {
      this.getInitLeaseTabs()
    },
    // 选中当前的data
    selctCurrent (selection, row) {
      let arr = selection
      this.$store.dispatch('leaseSelectTabs', arr)
    },
    // 取消当前选的data
    cancelSelct (selection, row) {
      let arr = selection
      this.$store.dispatch('leaseCanealTabs', arr)
    },
    ...mapActions(['getInitLeaseTabs'])
  },
  computed: {
    /**
     * @param ['tabsText', 'leaseTablesColumns', 'initLeaseTabs'] : ['表格数据为空默认提示, '当前表头状态', '初始化表格数据']
    */
    ...mapState(['tabsText', 'leaseTablesColumns', 'initLeaseTabs'])
  },
  created () {
    this.init()
  }
}
</script>
