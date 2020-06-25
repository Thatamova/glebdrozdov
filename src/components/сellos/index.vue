<template>
  <div>
    <Title title="Cellos"/>
    <SubTitle v-if="TEXT_DESCRIPTION" :text="TEXT_DESCRIPTION"/>

    <GalleriaWrapper :images-items="imagesData.data" />
  </div>
</template>

<script>
import Title from '@/components/common/title/index.vue'
import SubTitle from '@/components/common/subtitle/index.vue'
import GalleriaWrapper from '@/components/galleria_wrapper/index.vue'
import imagesData from '@/json/cellos.json'

const TEXT_DESCRIPTION = ''

export default {
  name: 'Cellos',

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
