<template>
  <div>
    <Header />
    <Start />
  </div>
</template>

<script>
import Header from '@/components//header/index.vue'
import Start from '@/components/start/index.vue'

export default {
  name: 'Home',

  components: {
    Header,
    Start
  }
}
</script>
