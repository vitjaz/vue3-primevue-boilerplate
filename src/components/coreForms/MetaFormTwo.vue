<template>
  <FormControlRenderer
    v-for="field in $props.fields"
    :key="field.fieldId"
    v-bind="field"
    v-model:value="defineFields[field.fieldId].value"
    :invalid="!!$props.errors[field.fieldId]"
    :invalid-message="$props.errors[field.fieldId]"
  />
</template>

<script setup lang="ts">
import FormControlRenderer from './FormControlRenderer.vue'
import type { IFieldMeta } from './types'

interface IProps {
  buildDefineFields: () => Record<string, any>
  errors: any
  fields: IFieldMeta[]
}

const props = defineProps<IProps>()

const defineFields = props.buildDefineFields()
</script>

<style scoped></style>
