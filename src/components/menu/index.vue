<template>
  <nav :class="$style[theme]">
    <ul>
      <li v-if="!isPageHome">
        <ChangeLang :isFirst="true"/>
      </li>
      <li v-if="!isPageHome">
        <a href='/' v-text="$ml.with('VueJS').get('titleHome')" :class="$style.menuLink" />
      </li>
      <li @click="hideMenu">
        <router-link
          to="/biography"
          v-text="$ml.with('VueJS').get('titleBiography')"
          :class="$style.menuLink"
        />
      </li>
      <li @click="hideMenu">
        <router-link
          to="/double-basses"
          v-text="$ml.with('VueJS').get('titleDouble')"
          :class="$style.menuLink"
        />
      </li>
      <li @click="hideMenu">
        <router-link
          to="/cellos"
          v-text="$ml.with('VueJS').get('titleCellos')"
          :class="$style.menuLink"
        />
      </li>
      <li @click="hideMenu">
        <router-link
          to="/violins"
          v-text="$ml.with('VueJS').get('titleViolins')"
          :class="$style.menuLink"
        />
      </li>
      <li @click="hideMenu">
        <router-link
          to="/workshop"
          v-text="$ml.with('VueJS').get('titleWorkshop')"
          :class="$style.menuLink"
        />
      <li @click="hideMenu">
        <router-link
          to="/contacts"
          v-text="$ml.with('VueJS').get('titleСontacts')"
          :class="$style.menuLink" />
      </li>
      <li v-if="isPageHome">
        <ChangeLang />
      </li>
    </ul>
  </nav>
</template>

<script>
import Types from 'vue-types'
import ChangeLang from '@/components/common/change_lang'

const TYPES = ['light', 'dark']

export default {
  name: 'menuList',

  components: {
    ChangeLang
  },

  props: {
    theme: Types.oneOf(TYPES).def(TYPES[0])
  },

  computed: {
    isPageHome () {
      return this.$route.path === '/'
    }
  },

  methods: {
    hideMenu () {
      this.$emit('hideMenu')
    }
  }
}
</script>

<style module lang="postcss">
.dark .menuLink {
  color: var(--ui-white);
}

.light .menuLink {
  display: block;
  padding: 12px 0;
  color: var(--ui-black);
  border-bottom: 1px solid var(--ui-gray);
}

.menuLink {
  display: inline-block;
  padding: 8px 0;
  font-size: var(--text-s);

  &:hover {
    color: var(--ui-yellow);
  }
}
</style>
