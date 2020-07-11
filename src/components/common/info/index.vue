<template>
  <div :class="classes">
    <div v-if="!themeMobile">
      <h3 :class="$style.name" v-text="$ml.get('nameHeader')" />
      <div v-text="$ml.get('location')" />
    </div>
    <div>
      <a href="tel:+79602441580" :class="$style.linkTel">Tel: +7 (960) 244-15-80</a>
      <a href="mailto:db.glebdrozdov@gmail.com" :class="$style.linkTel">Email: db.glebdrozdov@gmail.com</a>
    </div>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'Info',

  data () {
    return {
      themeMobile: isMobile
    }
  },

  computed: {
    classes () {
      return [
        this.$style.wrapper,
        {
          [this.$style.mobile]: isMobile
        }
      ]
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  display: flex;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  font-size: var(--text-s);
  font-weight: var(--font-semi-bold);
}

.linkTel {
  display: block;
  color: var(--ui-yellow);

  &:first-child {
   padding-bottom: 8px;
  }
}

.name {
  margin: 0;
  padding-bottom: 8px;
  font-weight: var(--font-semi-bold);
  font-size: var(--text-s);
}

.mobile {
  &.wrapper {
    font-size: var(--main-text);
  }

  .name {
    padding-bottom: 4px;
    font-size: var(--main-text);
  }

  .linkTel {
    &:first-child {
      padding-bottom: 4px;
    }
  }
}
</style>
