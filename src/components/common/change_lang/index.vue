<template>
  <div>
    <span
      v-for="lang in $ml.list"
      :key="lang"
      :class="[
        $style.icon,
        {[$style.first]: isFirst},
        {[$style.rus]: lang === 'russian'},
        {[$style.eng]: lang === 'english'},
        {[$style.active]: lang === $ml.current}
      ]"
      @click="$ml.change(lang)"
    />
  </div>
</template>

<script>
import Types from 'vue-types'

export default {
  name: 'ChangeLang',

  props: {
    isFirst: Types.bool.def(false)
  }
}
</script>

<style module lang="postcss">
.icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  margin: 32px 16px 8px 0;
  border-radius: 50%;
  border: 1px solid var(--ui-light-gray);

  &.first {
    margin: 0 16px 22px 0;
  }

  &.rus {
    background: svg-load("svg/rus.svg") no-repeat center;
    background-size: cover;
  }

  &.eng {
    background: svg-load("svg/eng.svg") no-repeat center;
    background-size: cover;
  }

  &.active {
    border: 1px solid blue;
  }
}
</style>
