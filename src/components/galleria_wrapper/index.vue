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
          <h4 v-if="$ml.current === 'english'" :class="$style.captionTitle">{{slotProps.item.titleEng}}</h4>
          <h4 v-if="$ml.current === 'russian'" :class="$style.captionTitle">{{slotProps.item.titleRus}}</h4>
          <p v-if="$ml.current === 'english' && slotProps.item.subtitleEng" :class="$style.captionSubtitle">{{slotProps.item.subtitleEng}}</p>
          <p v-if="$ml.current === 'russian' && slotProps.item.subtitleRus" :class="$style.captionSubtitle">{{slotProps.item.subtitleRus}}</p>
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
        <template #caption="slotProps">
          <h4 v-if="$ml.current === 'english'" :class="$style.captionTitle">{{slotProps.item.titleEng}}</h4>
          <h4 v-if="$ml.current === 'russian'" :class="$style.captionTitle">{{slotProps.item.titleRus}}</h4>
          <p v-if="$ml.current === 'english' && slotProps.item.subtitleEng" :class="$style.captionSubtitle">{{slotProps.item.subtitleEng}}</p>
          <p v-if="$ml.current === 'russian' && slotProps.item.subtitleRus" :class="$style.captionSubtitle">{{slotProps.item.subtitleRus}}</p>
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
      mobile: isMobile
    }
  },

  computed: {
    responsiveOptions () {
      if (isMobile) {
        return [
          {
            breakpoint: '1500px',
            numVisible: 3
          },
          {
            breakpoint: '768px',
            numVisible: 2
          },
          {
            breakpoint: '560px',
            numVisible: 1
          }
        ]
      } else {
        return [
          {
            breakpoint: '1000px',
            numVisible: 5
          },
          {
            breakpoint: '768px',
            numVisible: 2
          },
          {
            breakpoint: '560px',
            numVisible: 1
          }
        ]
      }
    },

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
  font-weight: var(--font-bold);
  font-size: var(--text-m);
}

.captionSubtitle {
  padding: 6px 0 0 0;
  margin: 0;
  font-size: var(--main-text);
  line-height: var(--lh-text);
}

.mobile {
  .galleriaWrapper {
    margin-top: 26px;
  }

  .galleria {
    margin-bottom: 16px;
  }

  & :global(.p-galleria-thumbnail-items-container) {
    width: 100%;
  }

}

@media screen and (max-width: 760px) {
  .galleria {
    min-width: 100%;
    width: 100%;
  }
}
</style>
