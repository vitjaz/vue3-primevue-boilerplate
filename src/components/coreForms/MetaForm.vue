<template>
  <FormControlRenderer
    v-for="field in $props.fields"
    :key="field.fieldId"
    v-bind="field"
    v-model:value="defineFields[field.fieldId].value"
    :invalid="!!errors[field.fieldId]"
    :invalid-message="errors[field.fieldId]"
  />
</template>

<script setup lang="ts">
import FormControlRenderer from './FormControlRenderer.vue'
import type { IFormMeta } from './types'
import { useCustomForm } from '@/global/composables/useCustomForm'
import { watch } from 'vue'

const form = defineProps<IFormMeta>()
const { buildDefineFields, errors, values, resetForm } = useCustomForm(form)
const defineFields = buildDefineFields()

const emits = defineEmits(['changeValues', 'changeErrors', 'handleReset'])

const handleReset = (newValues: any) => {
  if (newValues) {
    resetForm({ values: { ...newValues } })
  }
}

watch(values, () => {
  emits('changeValues', values)
})

watch(
  () => errors,
  () => {
    emits('changeErrors', errors.value)
  },
  {
    deep: true,
  },
)

defineExpose({ handleReset })
</script>

<style scoped></style>
