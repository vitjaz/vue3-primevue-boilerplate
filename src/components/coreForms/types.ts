import type { MaybeRef } from 'vue'

export interface IFieldMeta {
  fieldId: string
  fieldType: FIELD_TYPES
  label?: string
  placeholder?: string
  toggleMask?: boolean // for password
  feedback?: boolean // for password
  binary?: boolean // for checkbox
  severity?: SeverityType
  outlined?: boolean
  text?: boolean
  link?: boolean
  icon?: string
  rounded?: boolean
  class?: string
  floatLabel?: boolean
  invalid?: boolean
  smallHelpText?: string
  size?: string
  onClick?: () => void
  invalidMessage?: string
}

export interface IFormMeta {
  fields: IFieldMeta[]
  formOptions: {
    validationSchema?: any
    initialValues?: any
    validateOnMount?: boolean
    keepValuesOnUnmount?: MaybeRef<boolean>
  }
  onSubmit?: (data: any) => void
}

export enum FIELD_TYPES {
  TEXT = 'text',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  DROPDOWN = 'dropdown',
  BUTTON = 'button',
  MASK = 'mask',
}

export type SeverityType =
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'help'
  | 'info'
  | 'contrast'
