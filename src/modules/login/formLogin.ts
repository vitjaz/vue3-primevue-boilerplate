import { FIELD_TYPES, type IFormMeta } from '@/components/coreForms/types'
import { loginValidationSchema } from './formLoginValidSchema'
import { ref } from 'vue'

const initialValues = ref({
  login: '2134',
  password: '',
  acceptRules: true,
})

export const formLogin: IFormMeta = {
  fields: [
    {
      fieldId: 'login',
      fieldType: FIELD_TYPES.TEXT,
      label: 'Логин',
      floatLabel: true,
    },
    {
      fieldId: 'password',
      fieldType: FIELD_TYPES.PASSWORD,
      class: 'w-full',
      label: 'Пароль',
      floatLabel: true,
      feedback: false,
      toggleMask: true,
    },
    {
      fieldId: 'acceptRules',
      fieldType: FIELD_TYPES.CHECKBOX,
      label: 'Запомнить меня',
      binary: true,
    },
  ],
  formOptions: {
    initialValues,
    validationSchema: loginValidationSchema,
  },
}
