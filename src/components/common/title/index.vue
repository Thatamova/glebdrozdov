<template>
  <div>
    <h1 :class="classes">{{ title }}</h1>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Types from 'vue-types'

export default {
  name: 'Title',

  props: {
    title: Types.string.def('')
  },

  computed: {
    classes () {
      return [
        this.$style.title,
        {
          [this.$style.mobile]: isMobile
        }
      ]
    }
  }
}
</script>

<style module lang="postcss">
.title {
  margin: 24px 0 0 0;
  padding: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  text-align: center;

  &.mobile {
    margin: 8px 0 0 0;
    font-size: var(--text-l);
  }
}
</style>
