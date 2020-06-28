<template>
  <div>
    <Title title="contacts"/>

    <div :class="classes">
      <div :class="$style.info">
        <div>
          <a href="tel:+79602441580" :class="[$style.text, $style.link]">
            <i :class="['pi', 'pi-comments', $style.icon, $style.pr]"></i>
            +7 (960) 244-15-80
          </a>
          <a href="mailto:glebdrozdov@mail.ru" :class="[$style.text, $style.link]">
            <i :class="['pi', 'pi-envelope', $style.icon, $style.pr]"></i>
            glebdrozdov@mail.ru
          </a>
          <span :class="$style.text">
            <i :class="['pi', 'pi-globe', $style.icon, $style.pr]"></i>
            Russia, Saint Peterburg
          </span>
        </div>
      </div>
      <FormConnection :type="formType" :class="$style.formWrapper"/>
    </div>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Title from '@/components/common/title/index.vue'
import FormConnection from '@/components/form_connection/index.vue'

export default {
  name: 'Contact',

  components: {
    Title,
    FormConnection
  },

  computed: {
    classes () {
      return [
        this.$style.wrapper,
        {
          [this.$style.mobile]: isMobile
        }
      ]
    },
    formType () {
      return isMobile ? 'full' : 'default'
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.formWrapper {
  width: 48%;
  padding: 28px 20px;
  background: var(--ui-white);
  border-radius: var(--border-radius);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
}

.info {
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  display: block;
  padding-bottom: 28px;
  color: var(--ui-black);
  font-weight: var(--font-semi-bold);
  font-size: var(--text-l);
}

.link {
  &:hover {
    color: var(--ui-yellow);
  }
}

.pr.icon {
  font-size: 1.4em;
  vertical-align: bottom;
  padding-right: 8px;
}

.mobile {
  &.wrapper {
    margin-top: 26px;
  }

  .info {
    width: 100%;
    margin-bottom: 24px;
  }

  .formWrapper {
    width: 100%;
    padding: 20px 12px;
  }

  .text {
    font-size: var(--text-m);
    padding-bottom: 12px;
  }
}
</style>
