import Vue from 'vue'
import Router from 'vue-router'
import PageList from "../views/cms/page/PageList";
import Home from "../views/home/page/Home";
import PageAdd from "../views/cms/page/PageAdd";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {path: "/cms/page/pagelist/", name: 'PageList', component: PageList},
        {path: "/cms/page/add", name: 'PageAdd', component: PageAdd}
      ]
    }
  ]
})
