export enum CountryTelCode {
  AM = 374,
  AZ = 994,
  BY = 375,
  UA = 380,
  RU = 7,
  KZ = 7,
  TM = 993,
  MD = 373,
  TJ = 992,
  UZ = 998,
  KG = 996,
}

export type CountryCode = keyof typeof CountryTelCode
export type CountryDropdownOption = { name: string; code: CountryCode }
