import { createRouter, createWebHistory } from 'vue-router';
// 1、引入组件
import Test from '../components/Test.vue'
/**
 * 2、配置路由映射关系
 */
const routes = [
  {
    path: '/',
    components: {
      'Test':Test,
    }
  }
]
// 3、创建一个路由的对象
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router