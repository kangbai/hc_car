<template>
  <div>
    <ul class="Ten_dets">
          <li>
            <dl><dt>承租人</dt><dd>{{datas.name}}</dd></dl>
            <dl><dt>承租人联系电话</dt><dd></dd></dl>
            <dl><dt>第1急联系人手机</dt><dd></dd></dl>
            <dl><dt>第3紧急联系人姓名</dt><dd></dd></dl>
          </li>
          <li>
            <dl><dt>住所（身份证地址）</dt><dd></dd></dl>
            <dl><dt>承租人联系邮编</dt><dd></dd></dl>
            <dl><dt>第2紧急联系人姓名</dt><dd></dd></dl>
            <dl><dt>与本人关系</dt><dd></dd></dl>
          </li>
          <li>
            <dl><dt>法定代表人/身份证号码</dt><dd>{{datas.idCard}}</dd></dl>
            <dl><dt>第1紧急联系人姓名</dt><dd></dd></dl>
            <dl><dt>与本人关系</dt><dd></dd></dl>
            <dl><dt>第3急联系人手机</dt><dd></dd></dl>
          </li>
          <li>
            <dl><dt>承租人联系地址</dt><dd></dd></dl>
            <dl><dt>与本人关系</dt><dd></dd></dl>
            <dl><dt>第2急联系人手机</dt><dd></dd></dl>
          </li>
        </ul>
  </div>
</template>

<script>
export default {
  props: {
    detailsData: {
      type: [Object],
      required: true
    }
  },
  data () {
    return {
      datas: this.detailsData
    }
  },
  watch: {
    /**
     * 监听父组件异步数据变化
     * @param {Object} val 当前的值
    */
    detailsData (val) {
      this.datas = val
    }
  }
}
</script>

<style lang="scss">
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
</style>
