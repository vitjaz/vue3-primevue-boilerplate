<template>
  <div class="flex flex-column gap-2">
    <div v-if="props.floatLabel">
      <FloatLabel>
        <component
          :is="component"
          v-bind="props"
          v-model:value="value"
        ></component>
        <label :for="props.fieldId">{{ props.label }}</label>
      </FloatLabel>
    </div>
    <component
      v-else
      :is="component"
      v-bind="props"
      v-model:value="value"
    ></component>
    <div>
      <small
        :id="props.fieldId + '-help'"
        class="text-color-secondary"
        v-if="props.smallHelpText && !props.invalid"
        >{{ props.smallHelpText }}</small
      >
      <small
        :id="props.fieldId + '-help'"
        class="p-error"
        v-else-if="props.invalid"
        >{{ props.invalidMessage }}</small
      >
      <small :id="props.fieldId + '-help'" v-else>{{ `&nbsp;` }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component, type ComputedRef } from 'vue'
import { FIELD_TYPES, type IFieldMeta } from './types'
import CustomButton from '../coreUI/CustomButton.vue'
import CustomInputText from '../coreUI/CustomInputText.vue'
import CustomCheckbox from '../coreUI/CustomCheckbox.vue'
import CustomDropdown from '../coreUI/CustomDropdown.vue'
import CustomInputMask from '../coreUI/CustomInputMask.vue'
import CustomPassword from '../coreUI/CustomPassword.vue'
import FloatLabel from 'primevue/floatlabel'

const props = defineProps<IFieldMeta>()

const value = defineModel<any>('value')

const component: ComputedRef<Component | null> = computed(() => {
  switch (props.fieldType) {
    case FIELD_TYPES.BUTTON:
      return CustomButton
    case FIELD_TYPES.TEXT:
      return CustomInputText
    case FIELD_TYPES.CHECKBOX:
      return CustomCheckbox
    case FIELD_TYPES.DROPDOWN:
      return CustomDropdown
    case FIELD_TYPES.MASK:
      return CustomInputMask
    case FIELD_TYPES.PASSWORD:
      return CustomPassword
    default:
      return null
  }
})
</script>

<style scoped></style>
