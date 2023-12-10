
import { disabledTimeListsProps } from 'element-plus/es/components/time-picker/src/props/shared';
import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  { path: '/', redirect: '/contents'},
  { path: '/contents',  component:() => import('../components/Content.vue'), props: true }, 
  { path: '/login', component:() => import('../components/Login.vue') },
  { path: '/profile', component:() => import('../components/Profile.vue') , props: (route) => ({ isEditing: route.query.editing === 'true' }),},
  { path: '/review', component:() => import('../components/ReviewDetail.vue')},
  { path: '/reviewedit', component:() => import('../components/ReviewEdit.vue')},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

router.beforeEach((to, from, next) =>{
    let login_user = localStorage.getItem('user_login_info');
    if (login_user || to.path == '/login') {
        next();
    } else {
        next("/login")
    }
})
export default router