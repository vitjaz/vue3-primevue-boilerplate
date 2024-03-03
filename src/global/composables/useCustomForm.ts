import type { IFormMeta } from '@/components/coreForms/types'
import { useForm } from 'vee-validate'

export const useCustomForm = (form: IFormMeta) => {
  const {
    defineField,
    errors,
    values,
    handleSubmit,
    meta,
    setValues,
    resetField,
    resetForm,
    setTouched,
    setErrors,
    setFieldError,
    setFieldTouched,
    setFieldValue,
  } = useForm({
    ...form.formOptions,
  })

  const buildDefineFields = (): Record<string, any> => {
    const res: Record<string, any> = {}
    form.fields.forEach((field) => {
      res[field.fieldId] = defineField(field.fieldId)[0]
    })
    return res
  }

  return {
    defineField,
    errors,
    values,
    handleSubmit,
    meta,
    setValues,
    resetField,
    resetForm,
    setTouched,
    setErrors,
    setFieldError,
    setFieldTouched,
    setFieldValue,
    buildDefineFields,
  }
}
