<template>
  <div>
    <Title :title="$ml.with('VueJS').get('titleDouble')" />
    <SubTitle v-if="TEXT_DESCRIPTION" :text="TEXT_DESCRIPTION"/>

    <GalleriaWrapper :images-items="imagesData.data" />
  </div>
</template>

<script>
import Title from '@/components/common/title/index.vue'
import SubTitle from '@/components/common/subtitle/index.vue'
import GalleriaWrapper from '@/components/galleria_wrapper/index.vue'
import imagesData from '@/json/double_basses.json'

const TEXT_DESCRIPTION = ''

export default {
  name: 'DoubleBasses',

  components: {
    Title,
    SubTitle,
    GalleriaWrapper
  },

  data () {
    return {
      TEXT_DESCRIPTION,
      imagesData
    }
  }

}
</script>
