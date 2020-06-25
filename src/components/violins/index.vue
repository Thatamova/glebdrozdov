<template>
  <div>
    <Title title="Violins"/>
    <SubTitle v-if="TEXT_DESCRIPTION" :text="TEXT_DESCRIPTION"/>

    <GalleriaWrapper :images-items="imagesData.data" />
  </div>
</template>

<script>
import Title from '@/components/common/title/index.vue'
import SubTitle from '@/components/common/subtitle/index.vue'
import GalleriaWrapper from '@/components/galleria_wrapper/index.vue'
import imagesData from '@/json/violins.json'

const TEXT_DESCRIPTION = ''

export default {
  name: 'Violins',

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
