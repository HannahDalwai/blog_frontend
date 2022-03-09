import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
// lazy-loaded
const Profile = () => import("@/views/Profile.vue")
const BoardAdmin = () => import("@/components/BoardAdmin.vue")
const BoardUser = () => import("@/components/BoardUser.vue")
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
  {
  path: "/posts",
  name: "PostsList",
  component: PostsList
},
{
  path: "/posts/:id",
  name: "post-details",
  component: Post
},
{
  path: "/add",
  name: "add",
  component:AddPost
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router