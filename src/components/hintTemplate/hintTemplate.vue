<template>
  <div>
     <Alert show-icon>{{title}}</Alert>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  },
  data () {
    return {
      title: this.text
    }
  }
}
</script>
