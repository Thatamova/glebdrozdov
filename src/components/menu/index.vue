<template>
  <nav :class="$style[theme]">
    <ul>
      <li v-if="!isPageHome">
        <a href='/' :class="$style.menuLink">Home</a>
      </li>
      <li @click="hideMenu">
        <router-link to="/biography" :class="$style.menuLink">Biography</router-link>
      </li>
      <li @click="hideMenu">
        <router-link to="/double-basses" :class="$style.menuLink">Double basses</router-link>
      </li>
      <li @click="hideMenu">
        <router-link to="/cellos" :class="$style.menuLink">Cellos</router-link>
      </li>
      <li @click="hideMenu">
        <router-link to="/violins" :class="$style.menuLink">Violins</router-link>
      </li>
      <li @click="hideMenu">
        <router-link to="/workshop" :class="$style.menuLink">Workshop</router-link>
      </li>
      <li @click="hideMenu">
        <router-link to="/contacts" :class="$style.menuLink">Сontacts</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Types from 'vue-types'

const TYPES = ['light', 'dark']

export default {
  name: 'menuList',

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
