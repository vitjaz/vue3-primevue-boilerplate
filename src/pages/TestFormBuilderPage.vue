<template>
  <div>
    <LogRegWrapper>
      <template #header>
        Вход <br />
        в личный кабинет
      </template>
      <MetaForm
        ref="metaForm"
        v-bind="formLogin"
        @change-errors="handleChangeErrors"
        @change-values="handleChangeValues"
      />
      <template #footer>
        <CustomButton
          @click="moveToRegPage"
          label="Еще нет акканта? Зарегистрируйтесь"
          text
        />
      </template>
    </LogRegWrapper>
  </div>
</template>

<script setup lang="ts">
import MetaForm from '@/components/coreForms/MetaForm.vue'
import LogRegWrapper from '@/components/layout/LogRegWrapper.vue'
import CustomButton from '@/components/coreUI/CustomButton.vue'
import { formLogin } from '@/modules/login'
import { ROUTES } from '@/router/routesEnum'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()
const metaForm = ref()

const handleChangeValues = (values: any) => {
  console.log('VALUES IN PARENT: ', values)
}

const handleChangeErrors = (errors: any) => {
  console.log('ERRORS IN PARENT: ', errors)
}
const moveToRegPage = () => {
  router.push({ name: ROUTES.REGISTER })
}

onMounted(() => {
  setTimeout(() => {
    metaForm.value.handleReset({ login: 'admin', password: '1234' })
  }, 1000)
})
</script>

<style scoped></style>
