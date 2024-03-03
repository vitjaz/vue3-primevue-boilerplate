<template>
  <div class="flex flex-column gap-2 border-2 p-2">
    <div class="flex flex-wrap gap-2 border-2 p-2">
      <p>Buttons</p>
      <CustomButton label="Custom Button" />
      <CustomButton
        label="Button with icon"
        icon="pi pi-check"
        iconPos="right"
      />
      <CustomButton label="Loading button" icon="pi pi-search" loading />
      <CustomButton label="Secondary button" severity="secondary" />
      <CustomButton label="Success button" severity="success" />
      <CustomButton label="Warning button" severity="warning" />
      <CustomButton label="Danger button" severity="danger" />
      <CustomButton label="Info button" severity="info" />
      <CustomButton label="Help button" severity="help" />
      <CustomButton label="Contrast button" severity="contrast" />
      <CustomButton label="Disabled button" disabled />
      <CustomButton label="Rounded button" rounded />
      <CustomButton label="Text button" text />
      <CustomButton label="Outlined button" outlined />
      <CustomButton label="Badged button" badge="34" />
      <CustomButton
        label="Badged button with severity"
        badge="34"
        badgeSeverity="success"
      />
      <CustomButton outlined class="border-2">
        <div class="flex flex-column">
          <div>Some custom content</div>
          <div>Some other custom content</div>
        </div>
      </CustomButton>
    </div>
    <div>
      <p>Button Sets</p>
      <CustomButtonSet>
        <CustomButton label="Loading button" icon="pi pi-search" loading />
        <CustomButton label="Secondary button" severity="secondary" />
        <CustomButton label="Success button" severity="success" />
      </CustomButtonSet>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/coreUI/CustomButton.vue'
import CustomButtonSet from '@/components/coreUI/CustomButtonSet.vue'
</script>

<style scoped></style>
