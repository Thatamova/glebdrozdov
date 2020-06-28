<template>
  <div :class="classes">
    <div :class="$style.galleriaWrapper">
      <Galleria
        v-for="(images,index) in imagesItems"
        :key="`images-${index}`"
        :value="images"
        :numVisible="5"
        :responsiveOptions="responsiveOptions"
        :class="$style.galleria"
      >
        <template #item="slotProps">
          <img
            :src="require(`@/assets/${slotProps.item.itemImageSrc}`)"
            :alt="slotProps.item.alt"
            :class="$style.imgPreview"
            @click="showAll(slotProps.item.itemImageSrc)"
          />
        </template>
        <template #thumbnail="slotProps">
            <img :src="require(`@/assets/${slotProps.item.thumbnailImageSrc }`)" :alt="slotProps.item.alt"/>
        </template>
        <template #caption="slotProps">
          <h4 :class="$style.captionTitle">{{slotProps.item.title}}</h4>
        </template>
      </Galleria>

      <Galleria
        :value="imagesItemsAll"
        containerStyle="max-width: 850px"
        :activeIndex.sync="activeIndex"
        :numVisible="7"
        :responsiveOptions="responsiveOptions"
        :circular="true"
        :fullScreen="true"
        :showItemNavigators="true"
        :showThumbnails="!mobile"
        :visible.sync="displayBasic"
      >
        <template #item="slotProps">
          <img :src="require(`@/assets/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt"/>
        </template>
        <template #thumbnail="slotProps">
            <img :src="require(`@/assets/${slotProps.item.thumbnailImageSrc }`)" :alt="slotProps.item.alt"/>
        </template>
      </Galleria>
    </div>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import Types from 'vue-types'
import Galleria from 'primevue/galleria'

export default {
  name: 'GalleriaWrapper',

  components: {
    Galleria
  },

  props: {
    imagesItems: Types.arrayOf(
      Types.arrayOf(
        Types.shape({
          itemImageSrc: Types.string.def(''),
          thumbnailImageSrc: Types.string.def(''),
          alt: Types.string.def('')
        }).loose
      ).def([])
    ).def([])
  },

  data () {
    return {
      imagesItemsAll: [],
      visibleFull: false,
      displayBasic: false,
      activeIndex: 0,
      mobile: isMobile,
      responsiveOptions: [
        {
          breakpoint: '960px',
          numVisible: 4
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 2
        }
      ]
    }
  },

  computed: {
    classes () {
      return [
        {
          [this.$style.mobile]: isMobile
        }
      ]
    }
  },

  methods: {
    showAll (url) {
      this.imagesItemsAll = this.imagesItems.reduce((acc, item) => {
        acc = [...acc, ...item]
        return acc
      })

      if (url) {
        this.activeIndex = this.imagesItemsAll.findIndex(item => item.itemImageSrc === url)
      }
      this.displayBasic = true
    }
  }
}
</script>

<style module lang="postcss">
.galleriaWrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 48px;
}

.galleria {
  min-width: 48%;
  width: 48%;
  margin-bottom: 36px;
}

.imgPreview {
  cursor: pointer;
}

.captionTitle {
  margin: 0;
  padding: 0;
  font-weight: var(--font-semi-bold);
  font-size: var(--main-text);
}

.mobile {
  .galleriaWrapper {
    margin-top: 26px;
  }

  .galleria {
    margin-bottom: 16px;
  }
}

@media screen and (max-width: 760px) {
  .galleria {
    min-width: 100%;
    width: 100%;
  }
}
</style>