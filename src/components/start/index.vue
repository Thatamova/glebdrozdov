<template>
  <div :class="classes">
    <div :class="$style.wrapper">
      <h1 :class="$style.title" v-text="$ml.with('VueJS').get('title')" />
      <h2 :class="$style.subTitle" v-text="$ml.with('VueJS').get('subtitle')" />
      <Menu theme="dark" :class="$style.menu"/>
    </div>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Menu from '@/components/menu/index.vue'

export default {
  name: 'start',

  components: {
    Menu
  },

  computed: {
    classes () {
      return [
        this.$style.main,
        {
          [this.$style.mobile]: isMobile,
          [this.$style.desk]: !isMobile
        }
      ]
    }
  }
}
</script>

<style module lang="postcss">
.main {
  color: var(--ui-white);
}

.wrapper {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 6% var(--gap-16);
}

.title {
  margin: 0;
  font-size: 76px;
  font-weight: var(--font-bold);
  text-transform: uppercase;
}

.subTitle {
  margin: 12px 0 0;
  font-size: var(--text-xl);
}

.menu {
  margin-top: 48px;
}

.desk {
  &.main {
    background: url(@/assets/img/back-desc.jpg);
    background-size: cover;
    min-height: calc(100vh - 80px);
    height: 100%;
  }

  .title {
    font-size: 76px;
  }
}

.mobile  {
  &.main {
    background: url(@/assets/img/back-mob.jpg);
    background-size: cover;
    min-height: calc(100vh - 66px);
    height: 100%;
  }

  .title {
    font-size: var(--text-l);
  }

  .subTitle {
    margin: 4px 0 0;
    font-size: var(--text-s);
  }
}
</style>
