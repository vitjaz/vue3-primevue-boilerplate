<template>
  <div class="flex flex-column gap-2">
    <FloatLabel>
      <CustomInputText
        v-model:value="login"
        inputId="login"
        :invalid="!!errors.login"
      />
      <label for="login">Логин</label>
    </FloatLabel>
    <small id="login-help" class="p-error" v-if="errors.login">{{
      errors.login
    }}</small>
    <small id="login-help" class="text-color-secondary" v-else
      >Введите ваш email</small
    >
  </div>
  <div>
    <FloatLabel>
      <CustomPassword
        class="w-full"
        v-model:value="password"
        inputId="password"
        :feedback="false"
        toggleMask
        :invalid="!!errors.password"
      />
      <label for="password">Пароль</label>
    </FloatLabel>
    <small id="password-help" class="p-error">{{
      errors.password ? errors.password : `&nbsp;`
    }}</small>
  </div>
  <div class="flex text-sm justify-content-between -mt-4">
    <CustomCheckbox
      v-model:value="acceptRules"
      label="Запомнить меня"
      binary
      :invalid="!!errors.acceptRules"
    />
    <CustomButton label="Не помню пароль" class="-mr-2" link size="small" />
  </div>
  <div class="flex flex-column">
    <CustomButton label="Войти" @click="submit" />
    <p class="text-center text-grey-light text-xs">Или</p>
    <CustomButton
      @click="resetForm"
      label="Войти с помощью Google"
      icon="pi pi-google"
      severity="secondary"
      outlined
    />
  </div>
  <Toast />
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import CustomButton from '@/components/coreUI/CustomButton.vue'
import CustomPassword from '@/components/coreUI/CustomPassword.vue'
import CustomInputText from '@/components/coreUI/CustomInputText.vue'
import CustomCheckbox from '@/components/coreUI/CustomCheckbox.vue'
import FloatLabel from 'primevue/floatlabel'
import { useForm } from 'vee-validate'
import { loginValidationSchema } from '@/modules/login/formLoginValidSchema'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

const {
  defineField,
  handleSubmit,
  resetForm,
  resetField,
  errors,
  handleReset,
  values,
  isSubmitting,
  isValidating,
} = useForm({
  validationSchema: loginValidationSchema,
  initialValues: {
    login: '',
    password: '1234',
    acceptRules: true,
  },
})

const toast = useToast()

// const login = ref(null)
// const password = ref(null)

const [login] = defineField('login')
const [password] = defineField('password')
const [acceptRules] = defineField('acceptRules')

const submit = handleSubmit((values) => {
  // if (errors.value) {
  //   toast.add({
  //     severity: 'error',
  //     summary: 'Error',
  //     detail: 'Form Error',
  //     life: 3000,
  //   })
  //   console.log(errors.value)
  // }
  console.log('Submit', errors.value)
})

watchEffect(() => {
  // if (errors.value) {
  //   toast.add({
  //     severity: 'error',
  //     summary: 'Error',
  //     detail: 'Form Error',
  //     life: 3000,
  //   })
  //   console.log('here')
  // }
  // console.log(isSubmitting.value, isValidating.value)
})

// const checked = ref(false)
</script>

<style scoped></style>
