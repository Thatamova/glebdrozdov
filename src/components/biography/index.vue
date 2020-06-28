<template>
  <div :class="classes">
    <Title :title="$ml.with('VueJS').get('titleBiography')" />

    <div :class="$style.card">
      <div :class="$style.foto"></div>
      <div :class="$style.info">
        <h2 :class="$style.title" v-text="$ml.with('VueJS').get('name')" />
        <p v-text="$ml.with('VueJS').get('dateBirth')" />
        <ul>
          <li v-text="$ml.with('VueJS').get('listOne')" />
          <li v-text="$ml.with('VueJS').get('listTwo')" />
          <li v-text="$ml.with('VueJS').get('listTree')" />
        </ul>
        <p v-text="$ml.with('VueJS').get('location')" />
      </div>
    </div>

    <div>
      <p v-text="$ml.with('VueJS').get('descriptionOne')" />
      <p v-text="$ml.with('VueJS').get('descriptionTwo')" />
      <p v-text="$ml.with('VueJS').get('descriptionThree')" />
      <p v-text="$ml.with('VueJS').get('descriptionFour')" />
      <p v-text="$ml.with('VueJS').get('descriptionFive')" />
      <p v-text="$ml.with('VueJS').get('descriptionSix')" />
    </div>
  </div>
</template>

<script>
import Title from '@/components/common/title/index.vue'
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'Biography',

  components: {
    Title
  },

  computed: {
    classes () {
      return [
        {
          [this.$style.mobile]: isMobile
        }
      ]
    }
  }
}
</script>

<style module lang="postcss">
.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 48px;
  padding: 28px 20px;
  background: var(--ui-white);
  border-radius: var(--border-radius);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  font-size: var(--text-s);
  font-weight: var(--font-semi-bold);
}

.foto {
  width: 48%;
  min-height: 500px;
  background: url('@/assets/img/DrozdovG_sin.jpg') no-repeat;
  background-size: contain;
  background-position: center;
}

.title {
  position: relative;
  font-size: var(--text-l);
  margin: 0 0 48px 0;
  padding: 0;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    background: svg-load("svg/line.svg") no-repeat;
    background-size: contain;
    width: 100%;
    height: 3px;
  }
}

.info {
  width: 38%;
}

.mobile {
  .card {
    flex-direction: column;
    padding: 20px 12px;
    margin-top: 26px;
    margin-bottom: 26px;
    font-size: var(--main-text);
  }

  .foto {
    width: 100%;
    min-height: 320px;
    background-position: center;
  }

  .info {
    width: auto;
    margin-top: 24px;
  }

  .title {
    font-size: var(--text-m);
    margin: 0 0 24px 0;
  }
}
</style>
