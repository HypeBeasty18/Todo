
import MyDay from "../components/screens/myDay/MyDay";
import Important from "../components/screens/important/Important";
import Planned from "../components/screens/planned/Planned";
import Tasks from "../components/screens/tasks/Tasks";
import Home from "../components/screens/home/Home";
import Auth from "../components/screens/auth/Auth";
import SignUp from "../components/screens/signUp/SignUp";


export const routes = [
  {
    path: '/',
    component: Home ,
    name: 'Main'
  },
  {
    path: '/myday',
    component: MyDay ,
    name: 'My Day'
  },
  {
    path: '/important',
    component: Important,
    name: 'Important'
  },
  {
    path: '/planned',
    component: Planned,
    name: 'Planned'
  },
  {
    path: '/tasks',
    component: Tasks,
    name: 'Tasks'
  },
  {
    path: '/auth',
    component: Auth,
    name: 'Auth'
  },
  {
    path: '/signup',
    component: SignUp,
    name: 'SignUp'
  }
]