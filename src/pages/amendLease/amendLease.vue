<template>
  <div style="padding-bottom: 130px;">
    <div style="margin-bottom: 12px;">
      <subject-headings :title="headeTitle"></subject-headings>
    </div>
    <div>
      <hint-template :text="hintText"></hint-template>
    </div>
    <div class="ame_centent">
      <article-Steps></article-Steps>
        <div class="step_centext">
          <step-one v-if="leaseCurrent === 0"></step-one>
          <step-two v-else-if="leaseCurrent === 1"></step-two>
          <step-three v-else-if="leaseCurrent === 2"></step-three>
        </div>
    </div>
    <div>
      <p class="amend_step_paege">当前在第 <span>{{ leaseCurrent + 1 }}</span> 步</p>
      <div>
        <Button type="primary" @click="leaseStepLast()">上一步</Button>
        <Button type="primary" @click="leaseStepNext()">下一步</Button>
        <Button type="primary">取消</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import subjectHeadings from '@/components/subjectHeadings/subjectHeadings.vue'
import hintTemplate from '@/components/hintTemplate/hintTemplate'
import articleSteps from './articleSteps/articleSteps'
import stepOne from './stepOne/stepOne'
import stepTwo from './stepTwo/stepTwo'
import stepThree from './stepThree/stepThree'
export default {
  name: 'amendLease',
  components: {
    subjectHeadings, // 头部标题组件
    hintTemplate, // 头部提示组件
    articleSteps, // 步骤条组件
    stepOne, // 第一步
    stepTwo, // 第二步
    stepThree // 第三步
  },
  data () {
    return {
      headeTitle: '融租合同标准合同修改', // 头部标题
      hintText: '带*为必填项' // 头部提示info
    }
  },
  created () {
    let id = this.$route.params.id
    this.$store.dispatch({
      type: 'getSelectOrderInfo',
      id
    })
  },
  methods: {
    ...mapActions(['leaseStepNext', 'leaseStepLast']),
    next () {
      this.current += 1
    },
    last () {
      this.current -= 1
      if (this.current < 0) {
        this.current = 0
      }
    }
  },
  computed: {
    ...mapState(['leaseCurrent'])
  }
}
</script>

<style>
.ame_centent {
  background-color: #fff;
}
.step_centext {
  padding: 0 15px 14px;
  margin-bottom: 25px;
}
.amend_step_paege {
  margin-bottom: 12px;
}
.amend_step_paege span {
  color: #2d8cf0;
  font-size: 20px;
}
</style>
