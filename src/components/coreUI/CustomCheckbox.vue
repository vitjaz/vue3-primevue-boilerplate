<template>
  <div class="flex align-items-center">
    <Checkbox
      v-model="modelValue"
      :binary="$props.binary"
      :input-id="$props.inputId"
      :name="$props.name"
      :value="$props.value"
      :invalid="$props.invalid"
      :tabindex="$props.tabIndex"
      :required="$props.required"
    />
    <label
      :for="$props.inputId"
      class="ml-2"
      :class="{ 'p-error': $props.invalid }"
    >
      {{ $props.label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import Checkbox from 'primevue/checkbox'

interface IProps {
  binary?: boolean
  inputId?: string
  label?: string
  name?: string
  invalid?: boolean
  required?: boolean
  tabIndex?: number
  value?: boolean
}

const modelValue = defineModel<boolean>('value', {
  default: false,
  required: true,
})

withDefaults(defineProps<IProps>(), {
  binary: true,
})
</script>

<style scoped></style>
