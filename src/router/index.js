import Vue from 'vue'
import Router from 'vue-router'
import PageList from "../views/cms/page/PageList";
import Home from "../views/home/page/Home";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {path: "/cms/page/list", name: 'PageList', component: PageList}
      ]
    }
  ]
})
