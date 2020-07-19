<template>
  <div :class="classes">
    <div :class="$style.wrapper">
      <div :class="$style.frame">
        <span :class="[$style.icon, $style.menu]" @click="visibleMenu = true">
          <i class="pi pi-bars" style="fontSize: 1em"></i>
        </span>
        <span
          v-if="!isPageContact"
          :class="[$style.icon, $style.email]"
          @click="visibleEmail = true"
        >
          <i class="pi pi-envelope" style="fontSize: 1em"></i>
        </span>
        <router-view />
      </div>
    </div>
    <Sidebar :visible.sync="visibleMenu" :baseZIndex="1000" :position="positionMenu">
      <Menu
        theme="light"
        :class="$style.sidebarMenu"
        @hideMenu="onHideMenu"
      />
    </Sidebar>

    <Sidebar :visible.sync="visibleEmail" :baseZIndex="1000" :position="positionEmail">
      <FormConnection
        type="full"
        :class="$style.sidebarMenu"
      />
    </Sidebar>
    <Footer />
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Sidebar from 'primevue/sidebar'
import Footer from '@/components/footer/index.vue'
import Menu from '@/components/menu/index.vue'
import FormConnection from '@/components/form_connection/index.vue'

export default {
  name: 'Page',

  components: {
    Footer,
    Menu,
    Sidebar,
    FormConnection
  },

  data () {
    return {
      visibleMenu: false,
      visibleEmail: false
    }
  },

  computed: {
    classes () {
      return [
        this.$style.page,
        {
          [this.$style.mobile]: isMobile,
          [this.$style.desk]: !isMobile
        }
      ]
    },
    isPageContact () {
      return this.$route.path.includes('contact')
    },

    positionMenu () {
      return isMobile ? 'full' : 'left'
    },

    positionEmail () {
      return isMobile ? 'full' : 'right'
    }
  },

  methods: {
    onHideMenu () {
      this.visibleMenu = false
      this.visibleEmail = false
    }
  }
}
</script>

<style module lang="postcss">
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.wrapper {
  width: 100%;
  min-height: calc(100vh - 153px);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 48px 28px 0;
}

.frame {
  min-height: calc(100vh - (153px + 48px));
  position: relative;
  padding: 36px 32px 32px;
  border-right: 1px solid var(--ui-border);
  border-left: 1px solid var(--ui-border);
  border-top: 1px solid var(--ui-border);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  box-sizing: border-box;

  &:after {
    position: absolute;
    display: block;
    content: '';
    top: -34px;
    left: 50%;
    width: 60px;
    height: 68px;
    transform: translateX(-50%);
    background: svg-load("svg/icon_bass.svg") no-repeat center;
    background-size: contain;
    background-color: var(--ui-light-gray);
  }
}

.icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  content: '';
  top: 60px;
  width: 50px;
  height: 50px;
  background-color: var(--ui-light-gray);
  font-size: var(--text-xl);
  color: var(--ui-icon);
  cursor: pointer;

  &.menu {
    left: -25px;
  }

  &.email {
    right: -25px;
  }
}

.sidebarMenu {
  padding: 48px 12px;
}

.desk {
  .wrapper {
    min-width: var(--min-desk-width);
  }
}

.mobile {
  .wrapper {
    padding: 24px 16px 0;
  }

  .frame {
    min-height: 100vh;
    position: relative;
    padding: 22px 0;
    border-top: 1px solid var(--ui-border);
    border-right: none;
    border-left: none;
    border-radius: none;

    &:after {
      top: -15px;
      width: 20px;
      height: 30px;
    }
  }

  .icon {
    top: -11px;
    width: 32px;
    height: 22px;
    font-size: var(--text-l);

    &.menu {
      left: 0;
    }

    &.email {
      right: 0;
    }
  }
}
</style>
