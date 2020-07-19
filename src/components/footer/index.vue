<template>
  <div :class="classes">
    <Info />
    <h2 :class="$style.copyright">&#169; 2020 Gleb Drozdov</h2>

    <Policy />
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Info from '@/components/common/info/index.vue'
import Policy from '@/components/common/policy/index.vue'

export default {
  name: 'Footer',

  components: {
    Info,
    Policy
  },

  computed: {
    classes () {
      return [
        this.$style.footer,
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
.footer {
  padding: 36px var(--gap-16) 24px;
  color: var(--ui-white);

  &.desk {
    background: url(@/assets/img/footer-desk.jpg);
    background-size: cover;
    min-width: var(--min-desk-width);
  }

  &.mobile {
    background: url(@/assets/img/footer-mob.jpg);
    background-size: cover;
    padding: 24px var(--gap-16);
  }
}

.copyright {
  margin: 0;
  padding: 24px 0 0;
  text-align: center;
  font-size: 12px;
  font-weight: normal;
}
</style>
