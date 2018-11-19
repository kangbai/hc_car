<template>
  <div class="head_title">
    <h4>{{headTitle}}</h4>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      headTitle: this.title
    }
  }
}
</script>

<style lang="scss">
.head_title {
  h4 {
    position: relative;
    font-size: 18px;
    &::before {
      content: "";
      width: 3px;
      height: 20px;
      background: #39f;
      display: inline-block;
      vertical-align: middle;
      margin-top: -2px;
      margin-right: 10px;
    }
  }
}
</style>
