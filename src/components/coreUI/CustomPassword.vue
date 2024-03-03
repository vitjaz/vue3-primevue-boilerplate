<template>
  <Password
    v-model="value"
    :feedback="$props.feedback"
    :toggle-mask="$props.toggleMask"
    :strong-label="$props.strongLabel"
    :medium-label="$props.mediumLabel"
    :weak-label="$props.weakLabel"
    :input-id="$props.inputId"
    :id="$props.inputId"
    :invalid="$props.invalid"
    :disabled="$props.disabled"
    :required="$props.required"
    :placeholder="$props.placeholder"
  >
    <template v-if="$slots.header" #header>
      <slot name="header"></slot>
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </Password>
</template>

<script setup lang="ts">
import Password from 'primevue/password'
import type { Nullable } from 'primevue/ts-helpers'

interface IProps {
  feedback?: boolean
  toggleMask?: boolean
  weakLabel?: string
  mediumLabel?: string
  strongLabel?: string
  inputId?: string
  invalid?: boolean
  disabled?: boolean
  required?: boolean
  placeholder?: string
}

const value = defineModel<Nullable<string>>('value', {
  default: null,
  required: true,
})

withDefaults(defineProps<IProps>(), {
  feedback: true,
})
</script>

<style scoped></style>
