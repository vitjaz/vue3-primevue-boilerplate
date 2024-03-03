<template>
  <Dropdown
    v-model="value"
    :options="$props.options"
    :option-label="$props.optionLabel"
    :option-value="$props.optionValue"
    :option-disabled="$props.optionDisabled"
    :placeholder="$props.placeholder"
    :checkmark="$props.checkmark"
    :highlight-on-select="$props.highlightOnSelect"
    :filter="$props.filter"
    :show-clear="$props.showClear"
    :loading="$props.loading"
    :virtual-scroller-options="$props.virtualScrollerOptions"
    :input-id="$props.inputId"
    :invalid="$props.invalid"
    :disabled="$props.disabled"
  >
    <template #optiongroup="slotProps">
      <slot name="optionGroup" v-bind="slotProps"></slot>
    </template>
    <template #option="slotProps"
      ><slot name="option" v-bind="slotProps"></slot
    ></template>
    <template #value="slotProps">
      <slot name="value" v-bind="slotProps"></slot>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import Dropdown from 'primevue/dropdown'
import type { VirtualScrollerProps } from 'primevue/virtualscroller'

interface IProps {
  options: any[]
  optionLabel?: string
  optionValue?: string
  optionDisabled?: string
  placeholder?: string
  checkmark?: boolean
  highlightOnSelect?: boolean
  filter?: boolean
  showClear?: boolean
  loading?: boolean
  virtualScrollerOptions?: VirtualScrollerProps
  inputId?: string
  invalid?: boolean
  disabled?: boolean
}

withDefaults(defineProps<IProps>(), {
  options: () => [],
})

const value = defineModel<any>('value', {
  default: null,
  required: true,
})
</script>

<style scoped></style>
