<template>
  <div :class="classes">
    <Info />
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Info from '@/components/common/info/index.vue'

export default {
  name: 'Header',

  components: {
    Info
  },

  computed: {
    classes () {
      return [
        this.$style.header,
        {
          [this.$style.mobile]: isMobile
        }
      ]
    }
  }
}
</script>

<style module lang="postcss">
.header {
  padding: 14px var(--gap-16);
  background: var(--ui-border);
  color: var(--ui-white);

  &.mobile {
    padding: 12px var(--gap-16);
  }
}
</style>
