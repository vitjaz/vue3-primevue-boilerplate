<template>
  <Menubar
    :model="$props.items"
    class="top-0 border-noround border-none sticky mb-3 w-full z-5 shadow-1"
  >
    <template v-if="$slots.start" #start>
      <slot name="start"></slot>
    </template>
    <template v-if="$slots.item" #item>
      <slot name="item"></slot>
    </template>
    <template v-if="$slots.end" #end>
      <slot name="end"></slot>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem'

interface IProps {
  items: MenuItem[]
}

withDefaults(defineProps<IProps>(), {
  items: () => [],
})
</script>

<style scoped lang="scss"></style>
