import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FormTemplate from "@/components/FormTemplate.vue";
//import TableView from "@/views/TableView.vue";
import MenuTemplate from "@/components/MenuTemplate.vue";
import LoginView from "@/views/LoginView.vue";
import DataGrid from "@/views/DataGrid.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/menu',
      name:'menu',
      component: MenuTemplate
    },
    {
      path:'/login',
      name:'login',
      component: LoginView
    },
    {
      path:'/form',
      name:'form',
      component:FormTemplate
    },
    {
      path:'/tabla',
      name:'tabla',
      component: DataGrid
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router