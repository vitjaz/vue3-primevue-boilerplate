<template>
  <InputText
    v-model="value"
    :invalid="$props.invalid"
    :disabled="$props.disabled"
    :id="$props.inputId"
    :placeholder="$props.placeholder"
    class="w-full"
  />
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import type { Nullable } from 'primevue/ts-helpers'

interface IProps {
  inputId?: string
  invalid?: boolean
  disabled?: boolean
  placeholder?: string
}

const value = defineModel<Nullable<string>>('value', {
  default: null,
  required: true,
})

defineProps<IProps>()
</script>

<style scoped></style>
