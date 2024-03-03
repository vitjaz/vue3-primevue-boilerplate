<template>
  <InputMask
    v-model="value"
    :placeholder="$props.placeholder"
    :id="$props.id"
    :mask="$props.mask"
    :autoClear="$props.autoClear"
    :unmask="$props.unmask"
    :readonly="$props.readonly"
    :invalid="$props.invalid"
    :slotChar="$props.slotChar"
  />
</template>

<script setup lang="ts">
import InputMask from 'primevue/inputmask'

const value = defineModel<string | undefined>('value', {
  default: null,
  required: true,
})

interface IProps {
  placeholder?: string
  id?: string
  mask: string
  autoClear?: boolean
  unmask?: boolean
  readonly?: boolean
  invalid?: boolean
  slotChar?: string
}

defineProps<IProps>()
</script>

<style scoped></style>
