<template>
  <div>
    <form
      v-if="!isSuccessCreating"
      novalidate
      :class="$style.form"
      @submit.prevent="onSubmit"
    >
      <InputText
        v-model="$v.modelForm.name.$model"
        type="text"
        placeholder="Name"
        maxLength="30"
        :class="[$style.formInput, {['p-invalid']: !!errorName.length}]"
        @input="delayTouch($v.modelForm.name, 'name')"
      />

      <InputText
        v-model="$v.modelForm.email.$model"
        type="text"
        placeholder="Email"
        maxLength="30"
        :class="[$style.formInput, {['p-invalid']: !!errorEmail.length}]"
        @input="delayTouch($v.modelForm.email, 'email')"
      />

      <Textarea
        v-model="$v.modelForm.text.$model"
        rows="8"
        maxLength="3000"
        placeholder="Text"
        :autoResize="false"
        :class="[$style.formTextarea, {['p-invalid']: !!errorText.length}]"
      />

      <Button
        class="p-button-l"
        label="Send"
        type="submit"
        :disabled="disabledButton"
        :class="[$style.formButton, $style[type]]"
      />

      <div v-if="isErrorCreating" class="p-inline-message p-inline-message-error">Error. Please try again</div>
    </form>

    <div v-else class="p-inline-message p-inline-message-warn">
      Your message was sent successfully
    </div>
  </div>
</template>

<script>
// import { isMobile } from 'mobile-device-detect'
import Types from 'vue-types'
import _has from 'lodash/has'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import emailjs from 'emailjs-com'
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import {
  touchMap,
  TYPES,
  isEmailValid
} from './constants.ts'

export default {
  name: 'Form',

  components: {
    InputText,
    Textarea,
    Button
  },

  mixins: [validationMixin],

  // eslint-disable-next-line
  validations() {
    return {
      modelForm: {
        name: {
          required,
          minLength: minLength(2)
        },
        email: {
          required,
          isEmailValid
        },
        text: {
          required,
          minLength: minLength(3)
        }
      }
    }
  },

  props: {
    type: Types.oneOf(TYPES).def(TYPES[0])
  },

  data () {
    return {
      isCreating: false,
      isSuccessCreating: false,
      isErrorCreating: false,
      modelForm: {
        name: '',
        email: '',
        text: ''
      }
    }
  },

  computed: {
    errorName () {
      if (this.$v.modelForm.name.$dirty) {
        return [
          !this.$v.modelForm.name.required,
          !this.$v.modelForm.name.minLength
        ].filter(Boolean)
      }
      return []
    },
    errorEmail () {
      if (this.$v.modelForm.email.$dirty) {
        return [
          !this.$v.modelForm.email.required,
          !this.$v.modelForm.email.isEmailValid
        ].filter(Boolean)
      }
      return []
    },
    errorText () {
      if (this.$v.modelForm.text.$dirty) {
        return [
          !this.$v.modelForm.text.required,
          !this.$v.modelForm.text.minLength
        ].filter(Boolean)
      }
      return []
    },
    disabledButton () {
      return this.isCreating || this.$v.$invalid
    }
  },

  methods: {
    async onSubmit () {
      if (this.isCreating) {
        return
      }

      this.isCreating = true

      try {
        await emailjs.send(
          'default_service',
          'template_FSJaHhqR',
          {
            reply_to: this.modelForm.email,
            from_name: this.modelForm.name,
            message_html: this.modelForm.text + '<br>email:' + this.modelForm.email
          },
          'user_e3On3F96LmhqPP0gLpq1C'
        )
        this.isCreating = false
        this.isErrorCreating = false
        this.isSuccessCreating = true
      } catch (error) {
        this.isErrorCreating = true
        this.isReviewCreating = false
      }
    },

    delayTouch ($v, name) {
      $v.$reset()
      if (_has(touchMap, name)) {
        clearTimeout(touchMap[name])
      }
      touchMap[name] = setTimeout($v.$touch, 1000)
    }
  }
}
</script>

<style module lang="postcss">
.form {
  text-align: center;
}

.formTextarea,
.formInput {
  width: 100%;
  margin-bottom: 12px;
}

.formButton {
  margin-bottom: 12px;

  &.default {
    min-width: 200px;
  }

  &.full {
    width: 100%;
  }
}
</style>
