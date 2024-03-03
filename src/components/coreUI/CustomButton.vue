<template>
  <Button
    :label="$props.label"
    :aria-label="$props.label"
    :icon="$props.icon"
    :iconPos="$props.iconPos"
    :loading="$props.loading"
    :severity="$props.severity"
    :disabled="$props.disabled"
    :rounded="$props.rounded"
    :text="$props.text"
    :outlined="$props.outlined"
    :badge="$props.badgeText"
    :badgeSeverity="$props.badgeSeverity"
    :link="$props.link"
    :size="$props.size"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
  </Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import type { SeverityType } from '../coreForms/types'

interface IProps {
  label?: string
  icon?: string
  iconPos?: 'right'
  loading?: boolean
  severity?: SeverityType
  disabled?: boolean
  rounded?: boolean
  text?: boolean
  outlined?: boolean
  badgeText?: string
  badgeSeverity?: SeverityType
  link?: boolean
  size?: 'small' | 'large'
}

withDefaults(defineProps<IProps>(), {
  label: 'Button',
})
</script>

<style scoped></style>
