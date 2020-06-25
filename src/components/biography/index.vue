<template>
  <div :class="classes">
    <Title title="Biography"/>

    <div :class="$style.card">
      <div :class="$style.foto"></div>
      <div :class="$style.info">
        <h2 :class="$style.title">Drozdov Gleb Petrovich</h2>
        <p>Date of birth: June 17, 1967</p>
        <ul>
          <li>— violin, cellos and double basses maker</li>
          <li>— instrument restorer in orchestra</li>
          <li>— works at the Mariinsky Theatre</li>
        </ul>
        <p>Russia, Saint Peterburg</p>
      </div>
    </div>

    <div>
      <p>He graduated from the Arkhangelsk Music School on the specialty «trumpet». He graduated from the Saint Petersburg Conservatory. N.A. Roman-Korsakov on the specialty «trumpet» (1986-1993). He studied trumpet playing at the Stuttgart Higher School of Music and Theatre (Germany).
      </p>

      <p>He learned the basics of the construction of violin instruments in the workshop of W. Lakeberg (USA, Mr. Cincinnati, 1993-1995). From 1994 to 1995 in the same city he worked as a violin master in «Antonio violins» shop. The first violin was made in 1994.</p>

      <p>Since 1997, he has been working as a guest master at the Mariinsky Theater. Since 2004, he has been on the staff of permanent masters.</p>

      <p>He worked as a master in the symphony orchestras Karlsruhe (Germany, 1999-2004) and Stavanger (Norway, 2009-2014), and collaborated with bassist Wolfgang Guttler. In 2009-2012, he taught a course on the restoration and production of musical instruments at the Damascus Institute of Cinematography and Music.
      </p>

      <p>A total of 21 violins, 11 violas, 7 cellos and 6 double basses were created by the master. He designed his own solo double bass model and works on creating a complete line of large instruments.
      </p>

      <p>His instruments are played by musicians from the USA, Germany, Syria, Turkey, Azerbaijan, Russia (Moscow Philharmonic, Mariinsky Theater, Yakut Philharmonic, Novosibirsk, Saratov, Ryazan and other cities). The bass made by Gleb Drozdov for the Saint Petersburg Conservatory is used for competitive programs.
      </p>
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
