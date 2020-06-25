<template>
  <div>
    <Title title="Workshop"/>

    <Galleria :value="images" :activeIndex.sync="activeIndex" containerStyle="max-width: 850px"
    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" :visible.sync="displayCustom">
      <template #item="slotProps">
        <img :src="require(`@/assets/${slotProps.item.itemImageSrc }`)" :alt="slotProps.item.alt"/>
      </template>
    </Galleria>

    <div
      v-if="images && images.length"
      :class="$style.wrapper"
    >
      <div
        v-for="(image, index) of images"
        :key="index"
        :class="$style.imgWrapper"
      >
        <img :src="require(`@/assets/${image.itemImageSrc }`)" :alt="image.alt" @click="imageClick(index)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/common/title/index.vue'
import Galleria from 'primevue/galleria'
import imagesData from '@/json/workshop.json'

export default {
  name: 'Workshop',

  components: {
    Title,
    Galleria
  },

  data () {
    return {
      displayCustom: false,
      activeIndex: 0,
      images: imagesData.data
    }
  },

  methods: {
    imageClick (index) {
      this.activeIndex = index
      this.displayCustom = true
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
}

.imgWrapper {
  width: 33.33%;
  padding: 6px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 33vh;
    object-fit: cover;
    object-position: top;
  }
}

@media screen and (max-width: 760px) {
  .wrapper {
    margin-top: 26px;
  }

  .imgWrapper {
    width: 50%;
    padding: 4px;

    img {
      height: auto;
      max-height: 180px;
    }
  }
}

@media screen and (max-width: 560px) {
  .imgWrapper {
    width: 100%;
  }
}
</style>
