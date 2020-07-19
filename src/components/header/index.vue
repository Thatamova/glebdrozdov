<template>
  <div :class="classes">
    <Info />
    <Policy />
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Info from '@/components/common/info/index.vue'
import Policy from '@/components/common/policy/index.vue'

export default {
  name: 'Header',

  components: {
    Info,
    Policy
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
  min-width: var(--min-desk-width);

  &.mobile {
    padding: 12px var(--gap-16);
    min-width: 100%;
  }
}
</style>
