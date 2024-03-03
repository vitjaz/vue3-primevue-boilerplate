<template>
  <LogRegWrapper>
    <template #header> Регистрация </template>
    <RegisterForm />
    <template #footer>
      <CustomButton
        @click="moveToLoginPage"
        label="Уже есть аккаунт? Войти"
        text
      />
    </template>
  </LogRegWrapper>
</template>

<script setup lang="ts">
import LogRegWrapper from '@/components/layout/LogRegWrapper.vue'
import RegisterForm from '@/components/forms/RegisterForm.vue'
import CustomButton from '@/components/coreUI/CustomButton.vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/routesEnum'

const router = useRouter()

const moveToLoginPage = () => {
  router.push({ name: ROUTES.LOGIN })
}
</script>

<style scoped lang="scss"></style>
