<template>
  <div>
    <LogRegWrapper>
      <template #header>
        Вход <br />
        в личный кабинет
      </template>
      <MetaFormTwo
        :fields="formLogin.fields"
        :buildDefineFields="buildDefineFields"
        :errors="errors"
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
import MetaFormTwo from '@/components/coreForms/MetaFormTwo.vue'
import LogRegWrapper from '@/components/layout/LogRegWrapper.vue'
import CustomButton from '@/components/coreUI/CustomButton.vue'
import { formLogin } from '@/modules/login'
import { ROUTES } from '@/router/routesEnum'
import { useRouter } from 'vue-router'
import { onMounted, watch } from 'vue'
import { useCustomForm } from '@/global/composables/useCustomForm'

const { buildDefineFields, errors, values, resetForm } =
  useCustomForm(formLogin)

const router = useRouter()

watch(
  values,
  () => {
    console.log(values)
  },
  {
    immediate: true,
  },
)

const moveToRegPage = () => {
  router.push({ name: ROUTES.REGISTER })
}

onMounted(() => {
  // setTimeout(() => {
  //   resetForm({ values: { login: 'admin', password: '1234' } })
  // }, 1000)
})
</script>

<style scoped></style>
