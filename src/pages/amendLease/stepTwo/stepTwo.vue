<template>
  <div>
    <div class="step_two_tp">
      <span style="position: relative; top: 3px; margin-right: 20px;">承租类型:</span>
      <RadioGroup v-model="animal">
        <Radio label="个人"></Radio>
        <Radio label="公司"></Radio>
      </RadioGroup>
    </div>
    <div>
      <div v-if="animal == '个人'">
        <lease-personage></lease-personage>
      </div>
      <div v-else>
        <lease-company></lease-company>
      </div>
    </div>
  </div>
</template>

<script>
import leasePersonage from './leasePersonage/leasePersonage'
import leaseCompany from './leaseCompany/leaseCompany'
export default {
  components: {
    leasePersonage,
    leaseCompany
  },
  data () {
    return {
      animal: '个人'
    }
  },
  created () {
  }
}
</script>

<style>
.step_two_tp {
  margin-bottom: 15px;
}
</style>
