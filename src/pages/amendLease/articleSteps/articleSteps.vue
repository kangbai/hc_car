<template>
  <div class="steps_cent">
    <Steps :current="leaseCurrent">
      <Step  title="步骤1" />
      <Step title="步骤2" />
      <Step title="步骤3" />
      <Step title="步骤4" />
      <Step title="步骤5" />
    </Steps>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'articleSteps',
  computed: {
    ...mapState(['leaseCurrent'])
  }
}
</script>

<style>
.steps_cent {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 20px;
}
</style>
