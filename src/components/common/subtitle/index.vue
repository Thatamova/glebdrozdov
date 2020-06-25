<template>
  <div v-if="text">
    <p :class="classes">{{ text }}</p>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Types from 'vue-types'

export default {
  name: 'SubTitle',

  props: {
    text: Types.string.def('')
  },

  computed: {
    classes () {
      return [
        this.$style.subTitle,
        {
          [this.$style.mobile]: isMobile
        }
      ]
    }
  }
}
</script>

<style module lang="postcss">
.subTitle {
  margin: 16px 0 0 0;
  padding: 0;
  text-align: center;

  &.mobile {
    margin: 8px 0 0 0;
  }
}
</style>
