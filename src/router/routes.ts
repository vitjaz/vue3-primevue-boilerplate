import type { RouteRecordRaw } from 'vue-router'
import { ROUTES } from './routesEnum'

import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'

import MainView from '@/view/MainView.vue'
import StartPage from '@/pages/StartPage.vue'

// TEST PAGES
import TestButtonsPage from '@/pages/TestButtonsPage.vue'
import TestFormBuilderPage from '@/pages/TestFormBuilderPage.vue'
import TestFormBuilderPageComposableTop from '@/pages/TestFormBuilderPageComposableTop.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: ROUTES.INDEX,
    component: MainView,
    children: [
      {
        path: `/`,
        name: ROUTES.START_PAGE,
        component: StartPage,
      },
      {
        path: `/${ROUTES.LOGIN}`,
        name: ROUTES.LOGIN,
        component: LoginPage,
      },
      {
        path: `/${ROUTES.REGISTER}`,
        name: ROUTES.REGISTER,
        component: RegisterPage,
      },
      {
        path: `/${ROUTES.TEST_BUTTONS}`,
        name: ROUTES.TEST_BUTTONS,
        component: TestButtonsPage,
      },
      {
        path: `/${ROUTES.TEST_FORM_BUILDER}`,
        name: ROUTES.TEST_FORM_BUILDER,
        component: TestFormBuilderPage,
      },
      {
        path: `/${ROUTES.TEST_FORM_BUILDER_COMPOSABLE_TOP}`,
        name: ROUTES.TEST_FORM_BUILDER_COMPOSABLE_TOP,
        component: TestFormBuilderPageComposableTop,
      },
    ],
  },
]
