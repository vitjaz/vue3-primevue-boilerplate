<template>
  <LogRegWrapper>
    <template #header>
      Вход <br />
      в личный кабинет
    </template>
    <LoginForm />
    <template #footer>
      <CustomButton
        @click="moveToRegPage"
        label="Еще нет акканта? Зарегистрируйтесь"
        text
      />
    </template>
  </LogRegWrapper>
</template>

<script setup lang="ts">
import LogRegWrapper from '@/components/layout/LogRegWrapper.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import CustomButton from '@/components/coreUI/CustomButton.vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/routesEnum'

const router = useRouter()

const moveToRegPage = () => {
  router.push({ name: ROUTES.REGISTER })
}
</script>

<style scoped lang="scss"></style>
