import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getToken } from '../utils/auth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/settings',
    children: [
      // 首页
      {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/home/settings.vue')
      },
      // 组织结构
      {
        path: '/social_securitys',
        name: 'social_securitys',
        component: () => import('../views/tissue/social_securitys.vue')
      },
      // 员工
      {
        path: '/permissions',
        name: 'permissions',
        component: () => import('../views/permissions/permissions.vue')
      },
      // 公司设置
      {
        path: '/approvals',
        name: 'approvals',
        component: () => import('../views/HomeMent/approvals.vue')
      },
      // 权限设置
      {
        path: '/departments',
        name: 'departments',
        component: () => import('../views/departments/departments.vue')
      },
      // 社保
      {
        path: '/salarys',
        name: 'salarys',
        component: () => import('../views/HomeMent/salarys.vue')
      },
      // 考勤
      {
        path: '/employees',
        name: 'employees',
        component: () => import('../views/employees/employees.vue')
      },
      // 工资
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/HomeMent/user.vue')
      },
      // 审批
      {
        path: '/attendances',
        name: 'attendances',
        component: () => import('../views/attendances/attendances.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // 登录页面
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

// 登录鉴权
router.beforeEach((to, form, next) => {
  let token = getToken()
  if (!token && to.path != '/login') {
    next('/login')
  } else if (token && to.path == '/login') {
    next('/')
  } else {
    next()
  }
})

export default router
