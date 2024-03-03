import * as yup from 'yup'

const requiredMessage = 'Обязательное поле'

export const loginValidationSchema = yup.object({
  login: yup.string().email('Неверный email').required(requiredMessage),
  password: yup
    .string()
    .min(6, 'Минимальная длина пароля 6 символов')
    .required(requiredMessage),
  acceptRules: yup
    .boolean()
    .required(requiredMessage)
    .isTrue('Вы должны принять правила'),
})
