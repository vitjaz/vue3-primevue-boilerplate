<template>
  <div class="flex gap-3">
    <FloatLabel>
      <CustomInputText v-model:value="model.firstName" inputId="firstName" />
      <label for="firstName">Ваше имя</label>
    </FloatLabel>
    <FloatLabel>
      <CustomInputText v-model:value="model.lastName" inputId="lastName" />
      <label for="lastName">Ваша фамилия</label>
    </FloatLabel>
  </div>
  <div class="flex gap-3">
    <div class="flex gap-3 flex-1">
      <!-- FloatLabel for correct styles -->
      <FloatLabel>
        <CustomInputText
          v-model:value="model.countryCode"
          inputId="countryCode"
          disabled
          class="country-code"
        />
      </FloatLabel>
      <FloatLabel>
        <CustomInputMask
          v-model:value="model.phone"
          id="phone"
          mask="(999)-999-9999"
        />
        <label for="phone">Номер телефона</label>
      </FloatLabel>
    </div>
    <CustomDropdown
      class="flex-1"
      :options="countries"
      v-model:value="model.country"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex gap-2 align-items-center">
          <span :class="`fi fi-${slotProps.value.code.toLowerCase()}`"></span>
          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex gap-2 align-items-center">
          <span :class="`fi fi-${slotProps.option.code.toLowerCase()}`"></span>
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </CustomDropdown>
  </div>
  <FloatLabel>
    <CustomInputText v-model:value="model.email" inputId="email" />
    <label for="email">Ваш email</label>
  </FloatLabel>
  <div class="flex gap-3">
    <FloatLabel>
      <CustomPassword
        class="w-full"
        v-model:value="model.password"
        inputId="password"
        :feedback="false"
        toggleMask
      />
      <label for="password">Пароль</label>
    </FloatLabel>
    <FloatLabel>
      <CustomPassword
        class="w-full"
        v-model:value="repeatPassword"
        inputId="repeatPassword"
        :feedback="false"
        toggleMask
      />
      <label for="repeatPassword">Повторите пароль</label>
    </FloatLabel>
  </div>
  <div
    class="progress-container flex align-items-center justify-content-center gap-1"
  >
    <div
      v-for="cell in cells"
      :key="cell"
      class="progress-cell bg-gray-200"
    ></div>
  </div>
  <CustomCheckbox
    v-model:value="acceptRules"
    label="Я соглашаюсь с Политикой конфиденциальности"
    binary
    class="text-sm"
  />
  <div class="flex flex-column">
    <CustomButton label="Зарегистрироваться" />
    <p class="text-center text-grey-light text-xs">Или</p>
    <CustomButton
      label="Зарегистрироваться с помощью Google"
      icon="pi pi-google"
      severity="secondary"
      outlined
    />
  </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/coreUI/CustomButton.vue'
import CustomPassword from '@/components/coreUI/CustomPassword.vue'
import CustomInputText from '@/components/coreUI/CustomInputText.vue'
import CustomCheckbox from '@/components/coreUI/CustomCheckbox.vue'
import FloatLabel from 'primevue/floatlabel'
import CustomInputMask from '@/components/coreUI/CustomInputMask.vue'
import CustomDropdown from '@/components/coreUI/CustomDropdown.vue'
import { ref, watch } from 'vue'
import { CountryTelCode } from '@/global/utils'
import type { Nullable } from 'primevue/ts-helpers'
import type {
  CountryCode,
  CountryDropdownOption,
} from '@/global/utils/countries'

interface IModel {
  firstName: Nullable<string>
  lastName: Nullable<string>
  phone: string | undefined
  countryCode: Nullable<string>
  country: Nullable<CountryDropdownOption>
  email: Nullable<string>
  password: Nullable<string>
}

const model = ref<IModel>({
  firstName: null,
  lastName: null,
  phone: undefined,
  countryCode: null,
  country: { name: 'Россия', code: 'RU' },
  email: null,
  password: null,
})

const cells = ['cell1', 'cell2', 'cell3', 'cell4', 'cell5']

const repeatPassword = ref<Nullable<string>>(null)
const acceptRules = ref<boolean>(false)

const countries = ref([
  { name: 'Россия', code: 'RU' },
  { name: 'Украина', code: 'UA' },
  { name: 'Беларусь', code: 'BY' },
  { name: 'Казахстан', code: 'KZ' },
  { name: 'Узбекистан', code: 'UZ' },
  { name: 'Таджикистан', code: 'TJ' },
  { name: 'Киргизия', code: 'KG' },
  { name: 'Молдова', code: 'MD' },
  { name: 'Азербайджан', code: 'AZ' },
  { name: 'Туркменистан', code: 'TM' },
  { name: 'Армения', code: 'AM' },
])

watch(
  () => model.value.country,
  (value) => {
    if (value) {
      model.value.countryCode = '+' + CountryTelCode[value.code as CountryCode]
    }
  },
  { immediate: true },
)
</script>

<style scoped lang="scss">
.country-code {
  width: 4.2rem !important;
}

.progress-container {
  .progress-cell {
    background-color: #e2e2ea !important;
    width: 40px;
    height: 4px;
    border-radius: 3px;
  }
}
</style>
